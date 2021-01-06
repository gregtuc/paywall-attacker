var selectors = [];

function process(data) {
  //Pipe and filter the paywall blacklist
  pipeFilter(data);
  //Return data to socket
  return selectors;
}

function pipeFilter(data) {
  start = new Date().getTime();
  //Filter
  for (var i = 0; i < data.length; i++) {
    //Push elements with a fuzzy match of 0.9 or greater.
    var result = fm.get(data[i]);
    if (result.distance >= 0.95) {
      selectors.push(data[i]);
      console.log(result);
    }
  }
  console.log(
    "Pipe & Filter time: ",
    (end = new Date().getTime()),
    (end - start) / 1000
  );
}

module.exports = { process };
