function process(url) {
  //Chicago Business
  if (RegExp("chicagobusiness.com", "g").test(url)) {
    console.log("%c Website matched: ", "color: #bada55");
    return [".tp-modal", ".tp-backdrop", "script"];
  }
  //Chicago Tribune
  if (RegExp("chicagotribune.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return ["div[id='reg-overlay']", "script"];
  }
  //Irish Times
  if (RegExp("irishtimes.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return ["div[class*='mfp-ready']", "script"];
  }
  //LA Times
  if (RegExp("latimes.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return ["metering-modal", "script"];
  }
  //Washington Post
  if (RegExp("washingtonpost.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [
      "div[id*='paywall']",
      "div[class*='wall_background']",
      "script",
      "iframe",
      "div[data-qa*='paywall']",
    ];
  }
  //Forbes
  if (RegExp("forbes.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [".tp-modal", ".tp-backdrop", "script"];
  }
  //National Post
  if (RegExp("nationalpost.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [".tp-modal", ".tp-backdrop", "#footer", "script"];
  }
  //NYTimes
  if (RegExp("nytimes.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return ["style[data-lights='css']"];
  }
  //The Seattle Times
  if (RegExp("seattletimes.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return ["script"];
  }
  //USAToday
  if (RegExp("usatoday.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return ["script", "div[class*='sp_vei']", "div[class*='sp_message']"];
  }
  //Quora
  if (RegExp("quora.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return ["div[class*='BaseSignupForm']", "script"];
  }
}

module.exports = { process };
