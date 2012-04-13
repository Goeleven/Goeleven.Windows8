(function ($) {
    var currentDrag = "";
    var dragCounter = 0;
    var mouseX = 0;
    var mouseY = 0;
    var liftX = -3;
    var liftY = -3;

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        $("#ghost").css({ top: (mouseY - liftY) + "px", left: (mouseX - liftX) + "px" });
    });

    function IsValidDrop(id) {
        var returnValue = false;
        var currentDragParent = "#" + $(currentDrag).parent().attr("id");
        if (currentDragParent == id) {
            returnValue = false;
        } else {
            returnValue = true;
        }
        return returnValue;
    }

    function ProcessDragEvent(id, dragSelector, dropSelector, statusSelector, selectedClass, activeClass, ondrag) {
        if (id != "#ghost") currentDrag = id;
        if (ondrag != null) ondrag($(currentDrag));
        $(dragSelector).removeClass(selectedClass);
        $(currentDrag).addClass(selectedClass);
        $("#ghost").remove();
        $(currentDrag).clone().attr("id", "ghost").css({ position: "absolute" }).appendTo("body").fadeTo(0, 0.5);
        if (statusSelector.length > 0) {
            $(statusSelector).find("#dragging").html(currentDrag);
        }
        if (currentDrag.length > 1) {
            var source = "#" + $(currentDrag).parent().attr("id");
            $(dropSelector).not(source).addClass(activeClass);
        }
    }

    function ProcessDropEvent(id, dragSelector, dropSelector, statusSelector, selectedClass, activeClass, ondrop) {
        if (IsValidDrop(id) && $(id).hasClass(activeClass)) {
            if (currentDrag.length > 1) {
                $("#ghost").remove();
                $(currentDrag).removeClass(selectedClass);
                if (ondrop != null) {
                    ondrop($(currentDrag), $(id));
                }
                else {
                    $(currentDrag).remove().appendTo(id);
                }
                if (statusSelector.length > 0) {
                    $(statusSelector).find("#dropping").html(id);
                }
            }
            $(dropSelector).removeClass(activeClass);
        }
    }

    function clearTimeout(element) {
        var t = element.data('timeout');
        if (t != null) window.clearTimeout(t);
        $(this).data('timeout', null);
    }

    $.fn.mobiledraganddrop = function (settings) {
        var config = {
            classmodifier: "mobiledraganddrop",
            targets: ".drop",
            status: "",
            selectedclass: "selected",
            activeclass: "active",
            ondrag: null,
            ondrop: null,
            ondoubletap: null,
            onhold: null
        };
        dragCounter++;
        var selectorForDropZones = "";
        var selectorForDraggables = "";
        var selectorForStatus = "";
        var selectedClass = "";
        var activeClass = "";
        var lastClicked;
        var isSecondClick;
        if (settings) {
            $.extend(config, settings);
        }
        selectedClass = config.selectedclass;
        activeClass = config.activeclass;
        selectorForDropZones = "." + config.classmodifier + dragCounter + "drop";
        $(config.targets).addClass(config.classmodifier + dragCounter + "drop");
        selectorForDraggables = "." + config.classmodifier + dragCounter + "drag";
        $(this).addClass(config.classmodifier + dragCounter + "drag");
        selectorForStatus = config.status;
        if (selectorForStatus.length > 0) {
            $(selectorForStatus).html('<p>Dragging: <span id="dragging">&nbsp;</span><br>Dropping: <span id="dropping">&nbsp;</span></p>');
        }
        $(selectorForDraggables).unbind("mousedown");
        $(selectorForDraggables).unbind("touchstart");
        $(selectorForDraggables).live("mousedown touchstart", function () {
            var now = new Date().getTime();
            // the first time this will make delta a negative number
            var lastTouch = $(this).data('lastTouch') || now + 1;
            var delta = now - lastTouch;
            if (delta < 300 && 0 < delta) {
                $(this).data('lastTouch', null);

                if (config.ondoubletap !== null && typeof config.ondoubletap === 'function') {

                    clearTimeout($(this));

                    ProcessDragEvent("", selectorForDraggables, selectorForDropZones, selectorForStatus, selectedClass, activeClass, config.ondrag);
                    $(selectorForDropZones).removeClass(activeClass);

                    config.ondoubletap($(this));
                }
            } else {
                $(this).data('lastTouch', now);

                var id = "#" + $(this).attr("id");
                ProcessDragEvent(id, selectorForDraggables, selectorForDropZones, selectorForStatus, selectedClass, activeClass, config.ondrag);
                if (lastClicked == currentDrag) isSecondClick = true;
                else isSecondClick = false;
                if (id != "#ghost") lastClicked = id;

                var element = $(this);
                if (config.onhold != null && typeof config.onhold === 'function') {
                    clearTimeout(element);
                    var timeout = window.setTimeout(function () {
                        ProcessDragEvent("", selectorForDraggables, selectorForDropZones, selectorForStatus, selectedClass, activeClass, config.ondrag);
                        $(selectorForDropZones).removeClass(activeClass);
                        config.onhold(element);
                    }, 750);
                    $(this).data('timeout', timeout);
                    $(document).mousemove(function () {
                        clearTimeout(element);
                    });
                }
            }


            return false;
        });

        $(selectorForDropZones).live("mouseup touchend", function () {
            var id = "#" + $(this).attr("id");
            clearTimeout($(currentDrag));
            if (lastClicked == currentDrag && isSecondClick && !$(id).hasClass(activeClass)) {
                ProcessDragEvent("", selectorForDraggables, selectorForDropZones, selectorForStatus, selectedClass, activeClass, config.ondrag);
                $(selectorForDropZones).removeClass(activeClass);
                lastClicked = null;
                isSecondClick = false;
            }
            else {
                ProcessDropEvent(id, selectorForDraggables, selectorForDropZones, selectorForStatus, selectedClass, activeClass, config.ondrop);
            }
            return false;
        });
        return;
    };
})(jQuery);