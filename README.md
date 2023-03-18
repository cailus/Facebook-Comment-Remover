# Facebook Post Remover Bookmarklet

This bookmarklet is designed to help you remove posts from your Facebook activity log in an automated fashion.

## How to use

1. Go to Facebook and navigate to **Settings & Privacy**.
2. Click on **Activity Log**.
3. Select the **Comments** filter from the left sidebar.
4. Locate the following buttons on the page: the "Select All" checkbox, the gray "Remove" button, and the blue "Remove" button.
5. Right-click on the "Select All" checkbox, then click **Inspect** to open the browser's developer tools. The corresponding HTML element should be highlighted.
6. Right-click on the highlighted element and choose **Copy** > **Copy selector (JS)**.
7. Replace the `button1Selector` value in the `bookmarklet.js` code with the copied selector.
8. Repeat steps 5-7 for both the gray and blue "Remove" buttons, updating the `button2Selector` and `button3Selector` values, respectively.
9. Open the browser console (right-click anywhere on the page, click **Inspect**, and then click on the **Console** tab).
10. Copy the entire modified code from `bookmarklet.js` and paste it into the console.
11. Press **Enter** to start the process.

The bookmarklet will automatically click on the necessary buttons to remove posts from your activity log. It will continue to do so indefinitely until you stop it or close the browser.

## Troubleshooting

If the script doesn't work, it's possible that the paths for the buttons have changed. You'll need to update the button selectors in the `bookmarklet.js` file following the same steps mentioned in the "How to use" section.

## Notes

If you refresh the page and your comments are back up, that means they are undeletable.
This bookmarklet is not affiliated with or endorsed by Facebook. Use it at your own risk. The code is provided "as is" with no guarantees or warranties. Always double-check the button selectors before running the script, as changes to Facebook's layout or code may affect its functionality.
