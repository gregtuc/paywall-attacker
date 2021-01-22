# paywall-attacker
prototype chrome extension that removes paywalls and annoying overlays. This extension will be made more user-friendly moving forward (won't have to start a server in your command line)
To use it:
1) Clone the repository, navigate to it in your terminal/cmd window (Ex: "cd Desktop/paywall-attacker"), and enter "npm install".
2) Enable developer mode in chrome://extensions (switch in the top right of the window) and click and drag the directory onto the page.
3) Navigate to the server directory (Ex: "cd server") in paywall-attacker and run "npm run dev".

This program pipes DOM content to the server and runs data through two filters:
1) Site-specific filters. Mostly for high-profile journalism websites, this first filter quickly gets rid of known paywalls/modals/overlays.
2) General blacklist filtering. Fuzzy-match algo is used to reject DOM elements that have greater than an 85% match with blacklisted classes and ID's. This helps to attack elements that had their names changed slightly to avoid detection.

After bad elements are reported to the client, they are removed with JQuery and the Mutation Observer interface is used to track and prevent items from being re-injected after removal.

Socket.io used to allow multiple socket connections for multiple tabs + faster than standard requests.

Website with paywalled content:
![Alt text](https://github.com/gregtuc/paywall-attacker/blob/main/images/example-image-2.png?raw=true "ImageOne")

Activation of the extension and filtering:
![Alt text](https://github.com/gregtuc/paywall-attacker/blob/main/images/example-image-3.PNG?raw=true "ImageTwo")

Website after extension has activated:
![Alt text](https://github.com/gregtuc/paywall-attacker/blob/main/images/example-image-4.PNG?raw=true "ImageThree")
