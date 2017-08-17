function scrollTo(id, offset) {
  var top = 0;
  if (id) {
    top = $("#" + id).offset().top;
  }
  if (offset == undefined) {
    offset = 0;
  }
  $("html, body").animate({
    scrollTop: (top + offset)
  }, 400);
}

function showTrophies() {
  document.getElementById("sport-junkies").style.display = "block";
}
function hideTrophies() {
  document.getElementById("sport-junkies").style.display = "none";
}

function toggleKeyPlayer(nr) {
  var kp = $(".keyplayer-" + nr);
  kp.toggleClass("active");
  kp.next("div").toggleClass("w3-hide");
}

$(function() {
  // Check if the device supports touch events
  if("ontouchstart" in document.documentElement) {
    // Loop through each stylesheet
    for(var sheetI = document.styleSheets.length - 1; sheetI >= 0; sheetI--) {
      var sheet = document.styleSheets[sheetI];
      // Verify if cssRules exists in sheet
      if(sheet.cssRules) {
        // Loop through each rule in sheet
        for(var ruleI = sheet.cssRules.length - 1; ruleI >= 0; ruleI--) {
          var rule = sheet.cssRules[ruleI];
          // Verify rule has selector text
          if(rule.selectorText) {
            // Replace hover psuedo-class with active psuedo-class
            rule.selectorText = rule.selectorText.replace(":hover", ":active");
          }
        }
      }
    }
  }
});

function adaptNavbar() {
  var position2 = $("#2-brothers").offset().top;
  var positionK = $("#apps-n-games").offset().top;
  var positionP = $("#players-lounge").offset().top;
  var scrollTop = $(window).scrollTop();

  $(".navbar-item").removeClass("text-pink text-red text-green text-blue");
  if (scrollTop > positionP) {
    $(".navbar-p").addClass("text-blue");
  } else if (scrollTop > positionK) {
    $(".navbar-k").addClass("text-green");
  } else if (scrollTop > position2 - 66) {
    $(".navbar-2").addClass("text-red");
  }
}

$(document).ready(function() {
  var touch = "ontouchstart" in document.documentElement;
  if(touch) {
    // no special handling for touch devices
  }
  $(window).bind("scroll", function() {
    adaptNavbar();
  });
});
