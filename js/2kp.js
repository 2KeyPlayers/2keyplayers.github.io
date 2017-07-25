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

function adaptBars() {
  var playPosition = $("#play").offset().top;
  var aboutPosition = $("#about").offset().top;
  var stuffPosition = $("#stuff").offset().top;
  var contactPosition = $("#contact").offset().top;
  var scrollTop = $(window).scrollTop();
  var offset = 10;

  $(".logo").removeClass("inactive");
  $(".sidebar-item").removeClass("active");
  $(".navbar-item").removeClass("text-pink text-red text-green text-blue");

  if (scrollTop > contactPosition + offset) {
    $(".sidebar-contact").addClass("active");
    $(".navbar-contact").addClass("text-blue");
  } else if (scrollTop > stuffPosition + offset) {
    $(".sidebar-stuff").addClass("active");
    $(".navbar-stuff").addClass("text-green");
  } else if (scrollTop > aboutPosition - 74 + offset) {
    $(".sidebar-about").addClass("active");
    $(".navbar-about").addClass("text-red");
  } else {
    $(".logo").addClass("inactive");
    $(".sidebar-play").addClass("active");
    $(".navbar-play").addClass("text-pink");
  }
}

$(document).ready(function() {
  var touch = "ontouchstart" in document.documentElement;
  if(touch) {
    // no special handling for touch devices
  }
  $(window).bind("scroll", function() {
    adaptBars();
  });
});
