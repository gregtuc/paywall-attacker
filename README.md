# paywall-murderer
chrome extension that very well may suplex paywalls and annoying page elements if it doesn't break the page first. That's a risk you'll have to take. 

To use it:
1) Clone the repository and run "npm install".
2) Enable developer mode in chrome://extensions and click and drag the directory onto the page.
3) Navigate to the server directory in paywall-murderer and run "npm run dev".

Socket.io used because I wanted to try it out but also because I have plans for realtime server-client chatter to make sure webpages don't try to re-inject annoying overlays and modals (paywalls). 
