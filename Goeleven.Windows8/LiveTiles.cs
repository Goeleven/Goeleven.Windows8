using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.Data.Xml.Dom;
using Windows.UI.Notifications;

namespace Goeleven.Windows8
{
    public class LiveTiles
    {
        private TileUpdater tileUpdater;
        private BadgeUpdater badgeUpdater;
        private ToastNotifier toastNotifier;

        public LiveTiles() {
            tileUpdater = TileUpdateManager.CreateTileUpdaterForApplication();
            tileUpdater.EnableNotificationQueue(true);

            badgeUpdater = BadgeUpdateManager.CreateBadgeUpdaterForApplication();

            toastNotifier = ToastNotificationManager.CreateToastNotifier();
        }

        public void ShowAsLiveTile(string text)
        {
            XmlDocument tileXml = TileUpdateManager.GetTemplateContent(TileTemplateType.TileWideText01);

            XmlNodeList textElements = tileXml.GetElementsByTagName("text");
            textElements.Item(0).AppendChild(tileXml.CreateTextNode(text));

            TileNotification tile = new TileNotification(tileXml);

            tileUpdater.Update(tile);
        }

        public void ShowAsBadge(int number)
        {
            var badgeXml = BadgeUpdateManager.GetTemplateContent(BadgeTemplateType.BadgeNumber);

            XmlElement badgeElement = (XmlElement)badgeXml.SelectSingleNode("/badge");
            badgeElement.SetAttribute("value", number.ToString());
            
            var badgeNotification = new BadgeNotification(badgeXml);
            badgeUpdater.Update(badgeNotification);
        }

        public void ShowAsToast(string text)
        {
            XmlDocument toastXml = ToastNotificationManager.GetTemplateContent(ToastTemplateType.ToastText02);

            XmlNodeList stringElements = toastXml.GetElementsByTagName("text");
            stringElements.Item(0).AppendChild(toastXml.CreateTextNode(text));

            ToastNotification toast = new ToastNotification(toastXml);

            toastNotifier.Show(toast);
        }
    }
}
