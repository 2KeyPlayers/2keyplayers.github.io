function toggleNavigation() {
  var nav = $(".navigation");
  nav.slideToggle(400, function() {
    nav.toggleClass('opened');
    if (nav.is(".opened")) {
      $(".fa-bars").hide();
      $(".fa-close").show();
    } else {
      $(".fa-bars").show();
      $(".fa-close").hide();
    }
  });
}

function toggleNavigationItems() {
  $(".nav-item").toggle();
}

function closeNavigation() {
  if (! $(".navigation-toggler").is(":hidden")) {
    toggleNavigation();
  }
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

$(document).ready(function() {
  $("a.top").click(function() {
     $("html, body").animate({
       scrollTop: 0
     }, 400);
  });

  var touch = "ontouchstart" in document.documentElement;
  if(touch) {
    $("#logo").removeClass("w3-padding-16");
    $("#logo").addClass("fixed-navigation-padding");
    $("#navigation").addClass("fixed");
    $("#main").addClass("no-margin-top");
    $(window).bind("scroll", function() {
      var headerHeight = $("#header").height();
      if ($(window).scrollTop() > headerHeight - 43) {
        $(".navigation-toggler-logo").show();
      } else {
        $(".navigation-toggler-logo").hide();
      }
    });
  } else {
    $(window).bind("scroll", function() {
      var headerHeight = $("#header").height();
      if ($(window).scrollTop() > headerHeight) {
        $(".navigation-toggler-logo").show();
		$(".nav-item").hide();
        $("#navigation").addClass("fixed");
      } else {
        $(".navigation-toggler-logo").hide();
		$(".nav-item").show();
        $("#navigation").removeClass("fixed");
      }
    });
  }
});
