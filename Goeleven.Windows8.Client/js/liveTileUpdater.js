(function () {
    "use strict";

    var actions = [
        { key: "action1", title: "Do the dishes", subtitle: "Home" },
        { key: "action2", title: "Put out the trash", subtitle: "Garden" },
        { key: "action3", title: "Wash the car", subtitle: "Carwash" },
        { key: "action4", title: "Demo the app", subtitle: "Conference room"},
        { key: "action5", title: "Book holiday", subtitle: "Travel Agency" },
        { key: "action6", title: "Vacuum cleaning", subtitle: "Home" }
    ];

    function sendTileTextNotificationWithXml(title, image) {
        // get a XML DOM version of a specific template by using getTemplateContent
        var tileXml = Windows.UI.Notifications.TileUpdateManager.getTemplateContent(Windows.UI.Notifications.TileTemplateType.tileWideSmallImageAndText01);

        // get the text attributes for this template and fill them in
        var tileTextAttributes = tileXml.getElementsByTagName("text");
        tileTextAttributes[0].appendChild(tileXml.createTextNode(title));

        //// get the image attributes for this template and fill them in
        //var tileImageAttributes = tileXml.getElementsByTagName("image");
        //tileImageAttributes[0].setAttribute("src", image);

        ////// fill in a version of the square template returned by GetTemplateContent
        //var squareTileXml = Windows.UI.Notifications.TileUpdateManager.getTemplateContent(Windows.UI.Notifications.TileTemplateType.tileSquareImage);
        //var squareTileImageAttributes = squareTileXml.getElementsByTagName("image");
        //squareTileImageAttributes[0].setAttribute("src", image);

        // include the square template into the notification
        var node = tileXml.importNode(squareTileXml.getElementsByTagName("binding").item(0), true);
        tileXml.getElementsByTagName("visual").item(0).appendChild(node);

        // create the notification from the XML
        var tileNotification = new Windows.UI.Notifications.TileNotification(tileXml);

        // send the notification to the app's application tile
        Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);
    }

    function resetTile() {
        Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().clear();
        Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().enableNotificationQueue(true);

        Windows.UI.Notifications.BadgeUpdateManager.createBadgeUpdaterForApplication().clear();
    }

    function updateBadge(numActions) {
        var badgeXml = Windows.UI.Notifications.BadgeUpdateManager.getTemplateContent(Windows.UI.Notifications.BadgeTemplateType.badgeNumber);

        var badgeAttributes = badgeXml.getElementsByTagName("badge");
        badgeAttributes[0].setAttribute("value", numActions);

        var badgeNotification = new Windows.UI.Notifications.BadgeNotification(badgeXml);
        Windows.UI.Notifications.BadgeUpdateManager.createBadgeUpdaterForApplication().update(badgeNotification);
    }

    function sendTileNotifications() {
        resetTile();
        actions.forEach(function (item) {
            sendTileTextNotificationWithXml(item.title, null); // item.backgroundImage);
        });
        updateBadge(actions.length);
    }

    sendTileNotifications();

    WinJS.Namespace.define("liveTileUpdater", {
        sendTileNotifications: sendTileNotifications
    });
})