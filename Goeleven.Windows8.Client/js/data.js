﻿(function () {
    "use strict";

    var groupDescription = "Group Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor scelerisque lorem in vehicula. Aliquam tincidunt, lacus ut sagittis tristique, turpis massa volutpat augue, eu rutrum ligula ante a ante";
    var itemDescription = "Item Description: Pellentesque porta mauris quis interdum vehicula urna sapien ultrices velit nec venenatis dui odio in augue cras posuere enim a cursus convallis neque turpis malesuada erat ut adipiscing neque tortor ac erat";
    var itemContent = "<p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat</p><p>Curabitur class aliquam vestibulum nam curae maecenas sed integer cras phasellus suspendisse quisque donec dis praesent accumsan bibendum pellentesque condimentum adipiscing etiam consequat vivamus dictumst aliquam duis convallis scelerisque est parturient ullamcorper aliquet fusce suspendisse nunc hac eleifend amet blandit facilisi condimentum commodo scelerisque faucibus aenean ullamcorper ante mauris dignissim consectetuer nullam lorem vestibulum habitant conubia elementum pellentesque morbi facilisis arcu sollicitudin diam cubilia aptent vestibulum auctor eget dapibus pellentesque inceptos leo egestas interdum nulla consectetuer suspendisse adipiscing pellentesque proin lobortis sollicitudin augue elit mus congue fermentum parturient fringilla euismod feugiat";

    // These three strings encode placeholder images. You will want to set the
    // backgroundImage property in your real data to be URLs to images.
    var lightGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY7h4+cp/AAhpA3h+ANDKAAAAAElFTkSuQmCC";
    var mediumGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY5g8dcZ/AAY/AsAlWFQ+AAAAAElFTkSuQmCC";
    var darkGray = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXY3B0cPoPAANMAcOba1BlAAAAAElFTkSuQmCC";

    // Each of these sample groups must have a unique key to be displayed
    // separately.
    var sampleGroups = [
        { key: "group1", title: "overview", subtitle: "Group Subtitle: 1", backgroundImage: "http://cdn.goeleven.com/images/minlivingroom.jpg", description: groupDescription },
        { key: "group2", title: "Family", subtitle: "Group Subtitle: 2", backgroundImage: "/images/rune.jpg", description: groupDescription },
        { key: "group3", title: "Organize", subtitle: "Group Subtitle: 3", backgroundImage: "http://cdn.goeleven.com/images/mintoday.jpg", description: groupDescription },
        { key: "group4", title: "Projects", subtitle: "Group Subtitle: 4", backgroundImage: "http://cdn.goeleven.com/images/minprojects.jpg", description: groupDescription },
        { key: "group5", title: "Store", subtitle: "Group Subtitle: 5", backgroundImage: "http://cdn.goeleven.com/images/minstore.jpg", description: groupDescription }
    ];

    // Each of these sample items should have a reference to a particular
    // group.
    var sampleItems = [
        { group: sampleGroups[0], title: "HOME", subtitle: "Next Actions", description: itemDescription, content: itemContent, backgroundImage: "http://cdn.goeleven.com/images/minlivingroom.jpg" },
        { group: sampleGroups[0], title: "GARDEN", subtitle: "Next Actions", description: itemDescription, content: itemContent, backgroundImage: "http://cdn.goeleven.com/images/mingarden.jpg" },
        { group: sampleGroups[0], title: "OFFICE", subtitle: "Next Actions", description: itemDescription, content: itemContent, backgroundImage: "http://cdn.goeleven.com/images/minoffice2.jpg" },
        { group: sampleGroups[0], title: "OUTSIDE", subtitle: "Next Actions", description: itemDescription, content: itemContent, backgroundImage: "http://cdn.goeleven.com/images/minleisure.jpg" },
        { group: sampleGroups[0], title: "ON THE GO", subtitle: "Next Actions", description: itemDescription, content: itemContent, backgroundImage: "http://cdn.goeleven.com/images/mintravel.jpg" },

        { group: sampleGroups[1], title: "RUNE", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: "/images/rune.jpg" },
        { group: sampleGroups[1], title: "NORE", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: "/images/nore.jpg" },
        { group: sampleGroups[1], title: "WENDY", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: "/images/wendy.jpg" },
               
        { group: sampleGroups[2], title: "INBOX", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: "http://cdn.goeleven.com/images/mininbox.jpg" },
        { group: sampleGroups[2], title: "CALENDAR", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: "http://cdn.goeleven.com/images/mintoday.jpg" },
        
        { group: sampleGroups[3], title: "BEER BREW", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: "/images/brew.jpg" },
        { group: sampleGroups[3], title: "PLANTS", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: "/images/plants.jpg" },
        { group: sampleGroups[3], title: "CAMPING", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: "/images/mercury.jpg" },

        { group: sampleGroups[4], title: "ASSISTANT", subtitle: "Item Subtitle: 1", description: itemDescription, content: itemContent, backgroundImage: "http://cdn.goeleven.com/images/minstore.jpg" },
        { group: sampleGroups[4], title: "DOMOTICS", subtitle: "Item Subtitle: 2", description: itemDescription, content: itemContent, backgroundImage: "/images/domotics.jpg" },
        { group: sampleGroups[4], title: "DIY", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: "/images/diy.jpg" },
        { group: sampleGroups[4], title: "GARDEN", subtitle: "Item Subtitle: 3", description: itemDescription, content: itemContent, backgroundImage: "/images/tools.jpg" }

    ];

    function groupKeySelector(item) {
        return item.group.key;
    }

    function groupDataSelector(item) {
        return item.group;
    }

    // This function returns a WinJS.Binding.List containing only the items
    // that belong to the provided group.
    function getItemsFromGroup(group) {
        return list.createFiltered(function (item) { return item.group.key === group.key; });
    }

    var list = new WinJS.Binding.List();
    var groupedItems = list.createGrouped(groupKeySelector, groupDataSelector);

    // overview: Replace the data with your real data.
    // You can add data from asynchronous sources whenever it becomes available.
    sampleItems.forEach(function (item) {
        list.push(item);
    });

    WinJS.Namespace.define("data", {
        items: groupedItems,
        groups: groupedItems.groups,
        getItemsFromGroup: getItemsFromGroup
    });

})();
