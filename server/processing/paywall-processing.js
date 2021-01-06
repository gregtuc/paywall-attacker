function process(url) {
  //Chicago Business
  if (RegExp("chicagobusiness.com", "g").test(url)) {
    console.log("%c Website matched: ", "color: #bada55");
    return [[".tp-modal", ".tp-backdrop", "script"], 0];
  }
  //Chicago Tribune
  if (RegExp("chicagotribune.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [["div[id='reg-overlay']", "script"], 0];
  }
  //Irish Times
  if (RegExp("irishtimes.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [["div[class*='mfp-ready']", "script"], 0];
  }
  //LA Times
  if (RegExp("latimes.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [["metering-modal", "script"], 0];
  }
  //Washington Post
  if (RegExp("washingtonpost.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [
      [
        "div[id*='paywall']",
        "div[class*='wall_background']",
        "script",
        "iframe",
        "div[data-qa*='paywall']",
      ],
      0,
    ];
  }
  //Forbes
  if (RegExp("forbes.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [[".tp-modal", ".tp-backdrop", "script"], 0];
  }
  //National Post
  if (RegExp("nationalpost.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [[".tp-modal", ".tp-backdrop", "#footer", "script"], 0];
  }
  //NYTimes
  if (RegExp("nytimes.com", "g").test(url)) {
    console.log("Website matched: ", url);
    //#app > div > div
    return [
      [
        "$('#gateway-content').remove()",
        "$('#app > div > div').attr('style', 'overflow: auto!important')",
      ],
      1,
    ];
  }
  //The Seattle Times
  if (RegExp("seattletimes.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [["script"], 0];
  }
  //USAToday
  if (RegExp("usatoday.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [["script", "div[class*='sp_vei']", "div[class*='sp_message']"], 0];
  }
  //Quora
  if (RegExp("quora.com", "g").test(url)) {
    console.log("Website matched: ", url);
    return [["div[class*='BaseSignupForm']", "script"], 0];
  }
}

module.exports = { process };
