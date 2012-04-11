(function () {
    "use strict";

    var actions = [
        { key: "action1", title: "Do the dishes", subtitle: "Home", backgroundImage: "/images/widelogo.png" },
        { key: "action2", title: "Put out the trash", subtitle: "Garden", backgroundImage: "/images/widelogo.png" },
        { key: "action3", title: "Wash the car", subtitle: "Carwash", backgroundImage: "/images/widelogo.png" },
        { key: "action4", title: "Demo the app", subtitle: "Conference room", backgroundImage: "/images/widelogo.png" },
        { key: "action5", title: "Book holiday", subtitle: "Travel Agency", backgroundImage: "/images/widelogo.png" },
        { key: "action6", title: "Vacuum cleaning", subtitle: "Home", backgroundImage: "/images/widelogo.png" }
    ];

    function sendTileTextNotificationWithXml(title, image) {
        // get a XML DOM version of a specific template by using getTemplateContent
        var tileXml = Windows.UI.Notifications.TileUpdateManager.getTemplateContent(Windows.UI.Notifications.TileTemplateType.tileWideText01);

        // You will need to look at the template documentation to know how many text fields a particular template has
        // get the text attributes for this template and fill them in
        var tileAttributes = tileXml.getElementsByTagName("text");
        tileAttributes[0].appendChild(tileXml.createTextNode(title));
        // tileAttributes[1].appendChild(tileXml.createTextNode(title));

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
            sendTileTextNotificationWithXml(item.title, item.backgroundImage);
        });
        updateBadge(actions.length);
    }

    sendTileNotifications();

    WinJS.Namespace.define("liveTileUpdater", {
        sendTileNotifications: sendTileNotifications
    });

})();