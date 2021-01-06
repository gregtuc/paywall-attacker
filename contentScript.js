//Current URL.
const url = String(window.location.href);

//Connect to the socket server
var socket = io.connect("http://localhost:3002");
socket.on("connect", function () {
  console.log("Client connected");
});

//ad-socket response
socket.on("ad-socket-response", function (data) {
  if (data) {
    sanitize(data);
    observeMutations(data);
  }
});

//paywall-socket response
socket.on("paywall-socket-response", function (data) {
  if (data) {
    sanitize(data);
    observeMutations(data);
  }
});

//paywall-socket response
socket.on("paywall-socket-response-code", function (code) {
  if (code) {
    executeSpecificCode(code);
  }
});

//paywall-socket request
function sendPaywallSocket() {
  socket.emit("paywall-socket", url);
}

//ad-socket request
function sendAdSocket() {
  socket.emit("ad-socket", getSelectors());
}

//Sanitizes bad elements.
function sanitize(data) {
  for (var i = 0; i < data.length; i++) {
    try {
      $(`.${data[i]}`).remove();
    } catch (e) {
      continue;
    }
  }
}

//Executite code dished out from server in browser.
function executeSpecificCode(code) {
  for (var i = 0; i < code.length; i++) {
    eval(code[i]);
    new MutationObserver(() => {
      try {
        selectors.forEach((selector) => {
          eval(code);
        });
      } catch (e) {
        console.log(`Cannot remove element`);
      }
    }).observe(document, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
  }
}

//Prevent re-injection of bad elements.
function observeMutations(selectors) {
  new MutationObserver(() => {
    try {
      selectors.forEach((selector) => {
        $(`${selector}`).remove();
      });
    } catch (e) {
      console.log(`Cannot remove element`);
    }
  }).observe(document, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  });
}

//Get array of class and ID selectors.
function getSelectors() {
  const class_list = Array.from(
    document.querySelectorAll("[class]")
  ).flatMap((e) => e.className.toString().split(/\s+/));
  const id_list = Array.from(document.querySelectorAll("[id]")).flatMap((e) =>
    e.className.toString().split(/\s+/)
  );
  return refineData(class_list, 0).concat(refineData(id_list, 1));
}

//Format (& remove dups) of selectors array.
function refineData(data, datatype) {
  var m = {},
    result = [];
  for (var i = 0; i < data.length; i++) {
    var v = data[i];
    if (!m[v]) {
      if (datatype == 0) {
        result.push("." + v);
      } else {
        result.push("#" + v);
      }
      m[v] = true;
    }
  }
  return result;
}

$(document).ready(function () {
  sendPaywallSocket();
  sendAdSocket();
});
