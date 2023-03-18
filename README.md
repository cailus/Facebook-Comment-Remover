# Facebook Post Remover Bookmarklet

This bookmarklet is designed to help you remove posts from your Facebook activity log in an automated fashion.

## How to use

1. Go to Facebook and navigate to **Settings & Privacy**.
2. Click on **Activity Log**.
3. Select the **Comments** filter from the left sidebar.
4. Open the browser console (right-click anywhere on the page, click **Inspect**, and then click on the **Console** tab).
5. Copy the entire code from `bookmarklet.js` and paste it into the console.
6. Press **Enter** to start the process.

The bookmarklet will automatically click on the necessary buttons to remove posts from your activity log. It will continue to do so indefinitely until you stop it or close the browser.

## Troubleshooting

If the script doesn't work, it's possible that the paths for the buttons have changed. You'll need to update the button selectors in the `bookmarklet.js` file.

To find the correct button selectors:

1. Right-click on the button you want to update.
2. Click on **Inspect** to open the browser's developer tools.
3. In the **Elements** tab, the corresponding HTML element should be highlighted.
4. Right-click on the highlighted element and choose **Copy** > **Copy selector** (JS).

Replace the existing selectors in the `bookmarklet.js` file with the new ones you've copied. The selectors are defined as:

- `button1Selector`
- `button2Selector`
- `button3Selector`

Once you've updated the selectors, copy and paste the updated code into the console again and press **Enter** to restart the process.

## Notes

This bookmarklet is not affiliated with or endorsed by Facebook. Use it at your own risk. The code is provided "as is" with no guarantees or warranties. Always double-check the button selectors before running the script, as changes to Facebook's layout or code may affect its functionality.
