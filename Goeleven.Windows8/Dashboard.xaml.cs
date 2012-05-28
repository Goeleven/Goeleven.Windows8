using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Goeleven.Windows8.Data;
using Goeleven.Windows8.Pages;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Grouped Items Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234231

namespace Goeleven.Windows8
{
    /// <summary>
    /// A page that displays a grouped collection of items.
    /// </summary>
    public sealed partial class Dashboard : Goeleven.Windows8.Common.LayoutAwarePage
    {
        public Dashboard()
        {
            this.InitializeComponent();
        }

        /// <summary>
        /// Invoked when this page is about to be displayed in a Frame.
        /// </summary>
        /// <param name="e">Event data that describes how this page was reached.  The Parameter
        /// property provides the grouped collection of items to be displayed.</param>
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            var data = (SampleDataSource)e.Parameter;
            this.DefaultViewModel["Groups"] = data.ItemGroups;
            this.DefaultViewModel["Messages"] = data.WallMessages;
        }

        /// <summary>
        /// Invoked when a group header is clicked.
        /// </summary>
        /// <param name="sender">The Button used as a group header for the selected group.</param>
        /// <param name="e">Event data that describes how the click was initiated.</param>
        void Header_Click(object sender, RoutedEventArgs e)
        {
            // Determine what group the Button instance represents
            var group = (sender as FrameworkElement).DataContext;

            // Navigate to the appropriate destination page, configuring the new page
            // by passing required information as a navigation parameter
            this.Frame.Navigate(typeof(GroupDetailPage), group);
        }

        /// <summary>
        /// Invoked when an item within a group is clicked.
        /// </summary>
        /// <param name="sender">The GridView (or ListView when the application is snapped)
        /// displaying the item clicked.</param>
        /// <param name="e">Event data that describes the item clicked.</param>
        void ItemView_ItemClick(object sender, ItemClickEventArgs e)
        {
            // Navigate to the appropriate destination page, configuring the new page
            // by passing required information as a navigation parameter
            this.Frame.Navigate(typeof(ItemDetailPage), e.ClickedItem);
        }

        /// <summary>
        /// Wait with showing controls until the image is adjusted to the screen size
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BackgroundImage_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            content.Visibility = Windows.UI.Xaml.Visibility.Visible;
        }

        private void Inbox_Click(object sender, RoutedEventArgs e)
        {
            
            //this.Frame.Navigate(typeof(GroupDetailPage), null);
        }

        private void wallMessage_Clicked(object sender, ItemClickEventArgs e)
        {

        }

        private void getorganized_Click(object sender, ItemClickEventArgs e)
        {
            var grid = (Grid) e.ClickedItem;

            switch (grid.Name) { 
                case "inbox":
                    this.Frame.Navigate(typeof(Inbox));
                    break;

            }
            
        }

        private void context_Click(object sender, ItemClickEventArgs e)
        {

        }
    }
}
