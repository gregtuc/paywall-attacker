# paywall-attacker
chrome extension that removes paywalls and annoying overlays.
To use it:
1) Clone the repository and run "npm install".
2) Enable developer mode in chrome://extensions and click and drag the directory onto the page.
3) Navigate to the server directory in paywall-attacker and run "npm run dev".

This program pipes DOM content to the server and runs data through two filters:
1) Site-specific filters. Mostly for high-profile journalism websites, this first filter quickly gets rid of paywalls and modals.
2) General blacklist filtering. A fuzzy-match module is used to reject DOM elements that have greater than an 85% match with blacklisted classes and ID's. This helps to attack elements that had their names changed slightly to avoid detection.

After identifying bad elements are reported to the client, they are removed with JQuery and the Mutation Observer interface is used to track and prevent items from being re-injected after removal.

Note: Socket.io used for future implementation to monitor DOM content, as websockets are generally faster and scalable for such a project.

Website with paywalled content:
![Alt text](https://github.com/gregtuc/paywall-attacker/blob/main/images/example-image-2.png?raw=true "ImageOne")

Activation of the extension and filtering:
![Alt text](https://github.com/gregtuc/paywall-attacker/blob/main/images/example-image-3.PNG?raw=true "ImageTwo")

Website after extension has activated:
![Alt text](https://github.com/gregtuc/paywall-attacker/blob/main/images/example-image-4.PNG?raw=true "ImageThree")
