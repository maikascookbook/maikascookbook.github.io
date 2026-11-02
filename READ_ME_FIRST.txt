MAIKA'S COOKBOOK — OPTION D APP ICON + PWA UPDATE

This package is tailored to your existing GitHub Pages site.
Your website already has PWA support; this update adds the approved Option D icon to Apple Home Screens and the web app manifest.

IMPORTANT: Do NOT delete or replace recipes.js, recipe-updates.js, app.js, styles.css or your recipe photographs.
Do NOT replace the entire repository with only this package.

1. Unzip the package on your iPad or computer.
2. Open GitHub repository: maikascookbook/maikascookbook.github.io
3. Select Add file > Upload files.
4. Upload ALL EIGHT files from this package to the ROOT of the repository (not a new folder):
   index.html
   manifest.webmanifest
   sw.js
   apple-touch-icon.png
   icon-192.png
   icon-512.png
   icon-1024.png
   favicon-32.png
5. GitHub will replace index.html, manifest.webmanifest and sw.js with the updated versions; this is intentional.
6. Commit changes and wait for GitHub Pages to publish (usually a few minutes).
7. On each Apple device, open https://maikascookbook.github.io/ in Safari and refresh.
8. Remove the OLD cookbook Home Screen icon (Remove Bookmark / Delete App for the web shortcut; do not delete any saved data if prompted).
9. In Safari, Share > Add to Home Screen > enable Open as Web App if offered > Add.
10. Open the new icon and check the cloud Sync indicator. If needed, sign in to your EXISTING cookbook account (do not create a new account).

SAFETY: Your Supabase cloud recipes are not modified by these files. Still keep the backup JSON you exported earlier until you verify the new installed app is synchronized.

OFFLINE: The interface and bundled site files are cached after a successful visit. Full offline editing and cloud sync are NOT guaranteed; Supabase needs an internet connection.
