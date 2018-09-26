var deleteLog = false;

//adding the params info into the page
function addToLog(callbackName, params) {
  var callbackData = "<h4>" + callbackName + "</h4>";
  Object.keys(params).forEach(function(key) {
    var content = params[key];

    if (content !== null && typeof content === "object") {
      content = JSON.stringify(content);
    }
    callbackData += "<p><b>" + key + "</b>: " + content + "</p>";
  });
  callbackData += "<br />";

  // document.getElementById('callbacksDiv').innerHTML += callbackData;
}

var myFullpage = new fullpage("#fullpage", {
  // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
  anchors: ["firstPage", "secondPage", "3rdPage"],
  navigation: true,
  navigationTooltips: ["Page 1", "Page 2", "Page 3"],
  showActiveTooltip: false,
  menu: "#menu",
  scrollingSpeed: 1000,

  onLeave: function(origin, destination, direction) {
    var params = {
      origin: origin,
      destination: destination,
      direction: direction
    };

    //clearing the logging in the screen
    if (deleteLog) {
      document.getElementById("callbacksDiv").innerHTML = "";
    }

    addToLog("onLeave", params);

    console.log("--- onLeave ---");
    console.log(params);

    // if (params.destination.index >= 1) {
    //   openNav();
    // } else {
    //   closeNav();
    // }
  }
});

function openNav() {
  document.getElementById("fullpage").style.marginLeft = "25%";
  document.getElementById("mySidenav").style.width = "25%";
}

function closeNav() {
  document.getElementById("fullpage").style.marginLeft = "0%";
  document.getElementById("mySidenav").style.width = "0%";
}
