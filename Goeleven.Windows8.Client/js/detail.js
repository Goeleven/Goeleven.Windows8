/// <reference path="../js/jquery-1.6.4.min.js" />
/// <reference path="../js/jquery-ui-1.8.16.min.js" />
/// <reference path="../js/goeleven.mobile.dragdrop.js" />

(function () {
    "use strict";

    var ui = WinJS.UI;
    var utils = WinJS.Utilities;    
    
    ui.Pages.define("/html/detail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var item = options && options.item ? options.item : data.items.getAt(0);
            element.querySelector(".titlearea .pagetitle").textContent = item.group.title;
            element.querySelector("article .item-title").textContent = item.title;
            element.querySelector("article .item-subtitle").textContent = item.subtitle;
            element.querySelector("article .item-image").src = item.backgroundImage;
            element.querySelector("article .item-image").alt = item.subtitle;
            //element.querySelector("article .item-content").innerHTML = item.content;

            $(".drag").mobiledraganddrop({
                targets: ".drop",
                status: "#status",
                ondrop: function (element, target) {
                    element.remove().appendTo(target);
                }
            });

            var locator = Windows.Devices.Geolocation.Geolocator();
            var promise = locator.getGeopositionAsync().then(
                function (pos) {
                    element.querySelector(".titlearea .pagetitle").textContent += " (" + pos.coordinate.latitude + ", " + pos.coordinate.longitude + ")";
                });
        }
    })
})();
