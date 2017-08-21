function scrollTo(id, offset, jump) {
  var top = 0;
  if (id) {
    top = $("#" + id).offset().top;
  }
  if (offset == undefined) {
    offset = 0;
  }
  $("html, body").animate({
    scrollTop: (top + offset)
  }, ((jump == undefined) ? 400 : 0), 'swing', function() {
    adaptNavbar(id);
  });
}

function jumpTo(id, offset) {
  scrollTo(id, offset, true);
}

function showTrophies() {
  document.getElementById("sport-junkies").style.display = "block";
}
function hideTrophies() {
  document.getElementById("sport-junkies").style.display = "none";
}
function showTiliard() {
  var tiliard = $(".tiliard");
  if (!tiliard.hasClass("active")) {
    toggleDetails("tiliard");
  }
  scrollTo('game-1', -66);
}

function toggleDetails(sel) {
  var el = $("." + sel);
  el.toggleClass("active");
  el.next("div").toggleClass("w3-hide");
  if (sel == "tiliard") {
    var screenshots = $(".screenshots");
    if (!screenshots.hasClass("slick-initialized")) {
      screenshots.slick({
        infinite: true,
        arrows: false,
        dots: true
      });
    }
  }
}

function sendMail(to) {
  document.location = "mailto:" + to + "@2kayplayers.com";
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

function adaptNavbar(id) {
  var positionMotto = $("#motto").offset().top;
  var position2 = $("#2-brothers").offset().top;
  var positionK = $("#apps-n-games").offset().top;
  var positionP = $("#players-lounge").offset().top;
  var scrollTop = $(window).scrollTop();

  if (scrollTop >= positionMotto) {
    var navbar = $("#navbar");
    if (!navbar.hasClass("active")) {
      navbar.addClass("active");
    }
  } else {
    var navbar = $("#navbar");
    if (navbar.hasClass("active")) {
      $("#navbar").removeClass("active");
    }
  }

  $(".navbar-item").removeClass("text-pink text-red text-green text-blue");
  if (id == undefined) {
    if (scrollTop > positionP - 32) {
      $(".navbar-p").addClass("text-blue");
    } else if (scrollTop > positionK) {
      $(".navbar-k").addClass("text-green");
    } else if (scrollTop > position2 - 66) {
      $(".navbar-2").addClass("text-red");
    }
  } else {
    if (id == "players-lounge") {
      $(".navbar-p").addClass("text-blue");
    } else if (id == "apps-n-games") {
      $(".navbar-k").addClass("text-green");
    } else if (id == "2-brothers") {
      $(".navbar-2").addClass("text-red");
    }
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
  $(window).bind("resize", function() {
    adaptNavbar();
  });
});
