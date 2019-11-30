window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



var image = document.getElementById("mainbanner");
var currentPos = 0;
var images = ["images/wellington-promo.jpg", "images/info-sys-banner.png", "images/course-advice.jpg", "images/topic-cover-hr.jpg", "images/topic-cover-marketing.jpg"]

function changebanner() {
  if (++currentPos >= images.length)
    currentPos = 0;

  image.src = images[currentPos];
}

setInterval(changebanner, 5000);

$(document).ready(function () {
  $("#carouselExampleIndicators").carousel({interval: 5000, pause: "hover"});
  // executes when HTML-Document is loaded and DOM is ready
  console.log("document is ready");


  $(".card").hover(
    function () {
      $(this).addClass('shadow-lg').css('cursor', 'pointer');
    }, function () {
      $(this).removeClass('shadow-lg');
    }
  );

  // document ready  
});

function mylink(){
  window.open(
    'http://careerquiz.sim.vuw.ac.nz/',
    '_blank' // <- This is what makes it open in a new window.
  );
}

function myFunction1(elmnt,clr) {
  elmnt.style.color = clr;
}

$(document).ready(function () {
  // Configure/customize these variables.
  var showChar = 150;  // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "Read More";
  var lesstext = "Less";


  $('.more').each(function () {
    var content = $(this).html();

    if (content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

      $(this).html(html);
    }

  });

  $(".morelink").click(function () {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});

var infotype;
$(function () {
  $('#infotype').change(function () {
    var infotype = $('#infotype input:radio:checked').val()
    if (infotype == "Major") {
      document.getElementById("specialisationdiv").style.display = "block";
    }
    else {
      document.getElementById("specialisationdiv").style.display = "none";
      if (infotype == "Minor") {
        document.getElementById("p0").innerHTML = "Take at least 60 INFO points at 200-level or above (At least 15 of those points must be at 300 level.)";
        document.getElementById("s0").innerHTML = "Take at least 60 INFO points at 200-level or above (At least 15 of those points must be at 300 level.)";
        document.getElementById("courseselect").style.display = "block";
      }
      else{
        document.getElementById("courseselect").style.display = "block";
        document.getElementById("p0").innerHTML = "Take at least 60 INFO points at 200-level or above (At least 15 of those points must be at 300 level.)";
        document.getElementById("s0").innerHTML = "Take at least 60 INFO points at 200-level or above (At least 15 of those points must be at 300 level.)";
      }
    }

    // alert(infotype);
  })
})
var majortype;
$(function () {
  $('#majortype').change(function () {
    majortype = $('#majortype input:radio:checked').val()
    // alert(majortype);
    document.getElementById("courseselect").style.display = "block";
    // if(majortype == "INFO Major")z;
  })
})

var courseplan = [];
var courseplan1 = [];
var courseplan2 = [];
var courseplan3 = [];
var pointsplaned;
$(function () {
  $('input:checkbox').change(function () {
    // var infotype = $('#infotype input:radio:checked').val()
    // alert(infotype);
    document.getElementById("p1").innerHTML = "";
    if ($(this).is(".plan:checked")) {
      var tri1cou = 'INFO ' + $(this).val();
      courseplan.push(tri1cou);
      courseplan.sort();
      pointsplaned = courseplan.length * 15;
      // alert("Courses I will take are " + courseplan.join(", "));
      document.getElementById("trione2020").innerHTML = courseplan.join(", ")  ;
      updatecourse();
    }
    else if ($(this).is(".plan:not(:checked)")) {
      // alert("Checkbox is unchecked.");
      var removetri1 = 'INFO ' + $(this).val();
      var removeItem = removetri1;
      for (var i = 0; i < courseplan.length; i++) {
        if (courseplan[i] === removeItem) {
          courseplan.splice(i, 1);
        }
      }
      courseplan.sort();
      pointsplaned = courseplan.length * 15;
       document.getElementById("trione2020").innerHTML = courseplan.join(", ")  ;
      updatecourse();
      //  alert("Courses I will take are: " + coursestaken.join(", "));
    }

    if ($(this).is(".plan2:checked")) {
      var tri2cou = 'INFO ' + $(this).val();
      courseplan2.push(tri2cou);
      courseplan2.sort();
      pointsplaned = courseplan2.length * 15;
      // alert("Courses I will take are " + courseplan2.join(", "));
      document.getElementById("tritwo2020").innerHTML = courseplan2.join(", ") ;
      updatecourse();
    }
    else if ($(this).is(".plan2:not(:checked)")) {
      // alert("Checkbox is unchecked.");
      var removetri2 = 'INFO ' + $(this).val();
      var removeItem = removetri2;
      for (var i = 0; i < courseplan2.length; i++) {
        if (courseplan2[i] === removeItem) {
          courseplan2.splice(i, 1);
        }
      }
      courseplan2.sort();
      pointsplaned = courseplan2.length * 15;
       document.getElementById("tritwo2020").innerHTML = courseplan2.join(", ") ;
      updatecourse();
      //  alert("Courses I will take are: " + coursestaken.join(", "));
    }


    if ($(this).is(".plan3:checked")) {
      var tri3cou = 'INFO ' + $(this).val();
      courseplan3.push(tri3cou);
      courseplan3.sort();
      pointsplaned = courseplan3.length * 15;
      // alert("Courses I will take are " + courseplan3.join(", "));
      document.getElementById("trithree2020").innerHTML =  courseplan3.join(", ") ;
      updatecourse();
    }
    else if ($(this).is(".plan3:not(:checked)")) {
      // alert("Checkbox is unchecked.");
      var removetri3 = 'INFO ' + $(this).val();
      var removeItem = removetri3;
      for (var i = 0; i < courseplan3.length; i++) {
        if (courseplan3[i] === removeItem) {
          courseplan3.splice(i, 1);
        }
      }
      courseplan3.sort();
      pointsplaned = courseplan3.length * 15;
       document.getElementById("trithree2020").innerHTML =  courseplan3.join(", ") ;
      updatecourse();
      //  alert("Courses I will take are: " + coursestaken.join(", "));
    }
  })
})




var coursestaken = [];
var totalpoints;
$(function () {
  $('input:checkbox').change(function () {
    // var infotype = $('#infotype input:radio:checked').val()
    // alert(infotype);
    document.getElementById("p1").innerHTML = "";
    if ($(this).is(".done:checked")) {
      coursestaken.push($(this).val());
      coursestaken.sort();
      totalpoints = coursestaken.length * 15;
      // alert("Courses I have taken are: " + coursestaken.join(", "));
      // document.getElementById("p1").innerHTML = "Courses I have taken are: " + coursestaken.join(", ") +" | "+ totalpoints +" Points" ;
      updatecourse();
    }
    else if ($(this).is(".done:not(:checked)")) {
      // alert("Checkbox is unchecked.");
      var removeItem = $(this).val();
      for (var i = 0; i < coursestaken.length; i++) {
        if (coursestaken[i] === removeItem) {
          coursestaken.splice(i, 1);
        }
      }
      coursestaken.sort();
      totalpoints = coursestaken.length * 15;
      //  document.getElementById("p1").innerHTML = "Courses I have taken are: " + coursestaken.join(", ") +" | "+ totalpoints +" Points" ;
      updatecourse();
      //  alert("Courses I have taken are: " + coursestaken.join(", "));
    }
  })
})
// var coursestaken200 = [];
function updatecourse() {
  // alert(majortype);
  var info101 = coursestaken.includes("101");
  var info141 = coursestaken.includes("141");
  var info151 = coursestaken.includes("151");
  var info226 = coursestaken.includes("226");
  var info231 = coursestaken.includes("231");
  var info234 = coursestaken.includes("234");
  var info246 = coursestaken.includes("246");
  var info264 = coursestaken.includes("264");
  var info320 = coursestaken.includes("320");
  var info334 = coursestaken.includes("334");
  var info336 = coursestaken.includes("336");
  var info354 = coursestaken.includes("354");
  var info360 = coursestaken.includes("360");
  var info376 = coursestaken.includes("376");
  var info377 = coursestaken.includes("377");
  var info381 = coursestaken.includes("381");
  var info386 = coursestaken.includes("386");
  var info388 = coursestaken.includes("388");
  var info391 = coursestaken.includes("391");
  var info395 = coursestaken.includes("395");
  var level100done;
  var BA300done;
  var IT300done;
  var IT200c;
  var BA200c;
  var BAcap;
  var ITcap;
  
  var minordone;
  if (info101 && info141 && info151) {
    level100done = true;
  }
  // alert("cool");
  var coursestaken200 = [];
  var IT200 = [];


  if (info231 && info226 && info246) {
    IT200c = true;
//     alert("IT200");
  }
  if (info231 && info234 && info264){
    BA200c = true;
//     alert("BA200");
  }
  if (info320){
    BAcap = true;
    ITcap = true;
  }

  if (info395){
    BAcap = true;
  }
  var IT200list = ["INFO 226","INFO 231", "INFO 246"];
  var BA200 = [];
  var coursestaken300 = [];
  var coursestaken300BA = [];
  var coursestaken300IT = [];
  var capstone;

  if (info226) { coursestaken200.push("INFO 226"); }
  else {
    for (var i = 0; i < coursestaken200.length; i++) {
      if (coursestaken200[i] === "INFO 226") {
        coursestaken200.splice(i, 1);
        IT200.splice(i, 1);
        // alert(coursestaken200);
      }
    }
  }
  if (info231) { coursestaken200.push("INFO 231"); }
  else {
    for (var i = 0; i < coursestaken200.length; i++) {
      if (coursestaken200[i] === "INFO 231") {
        coursestaken200.splice(i, 1);
        IT200.splice(i, 1);
        BA200.splice(i, 1);
      }
    }
  }
  if (info234) { coursestaken200.push("INFO 234"); }
  else {
    for (var i = 0; i < coursestaken200.length; i++) {
      if (coursestaken200[i] === "INFO 234") {
        coursestaken200.splice(i, 1);
        BA200.splice(i, 1);
      }
    }
  }
  if (info246) { coursestaken200.push("INFO 246"); }
  else {
    for (var i = 0; i < coursestaken200.length; i++) {
      if (coursestaken200[i] === "INFO 246") {
        coursestaken200.splice(i, 1);
        IT200.splice(i, 1);
      }
    }
  }
  if (info264) { coursestaken200.push("INFO 264"); }
  else {
    for (var i = 0; i < coursestaken200.length; i++) {
      if (coursestaken200[i] === "INFO 264") {
        coursestaken200.splice(i, 1);
        BA200.splice(i, 1);
      }
    }
  }
  if (info334) { coursestaken300.push("INFO 334");
  coursestaken300BA.push("INFO 334");
}
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 334") {
        coursestaken300.splice(i, 1);
        coursestaken300BA.splice(i, 1);
      }
    }
  }
  if (info336) { coursestaken300.push("INFO 336"); }
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 336") {
        coursestaken300.splice(i, 1);
      }
    }
  }
  if (info354) { coursestaken300.push("INFO 354");
  coursestaken300BA.push("INFO 354"); 
coursestaken300IT.push("INFO 354");  }
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 354") {
        coursestaken300.splice(i, 1);
        coursestaken300BA.splice(i, 1);
        coursestaken300IT.splice(i, 1);
      }
    }
  }
  if (info360) { coursestaken300.push("INFO 360"); }
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 360") {
        coursestaken300.splice(i, 1);
      }
    }
  }
  if (info376) { coursestaken300.push("INFO 376"); 
  coursestaken300BA.push("INFO 376");
coursestaken300IT.push("INFO 376");
}
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 376") {
        coursestaken300.splice(i, 1);
        coursestaken300BA.splice(i, 1);
        coursestaken300IT.splice(i, 1);
      }
    }
  }
  if (info377) { coursestaken300.push("INFO 377");
                coursestaken300IT.push("INFO 377"); }
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 377") {
        coursestaken300.splice(i, 1);
        coursestaken300IT.splice(i, 1);
      }
    }
  }
  if (info381) { coursestaken300.push("INFO 381"); }
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 381") {
        coursestaken300.splice(i, 1);
      }
    }
  }
  if (info386) { coursestaken300.push("INFO 386");
coursestaken300IT.push("INFO 386"); }
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 386") {
        coursestaken300.splice(i, 1);
        coursestaken300IT.splice(i, 1);
      }
    }
  }
  if (info388) { coursestaken300.push("INFO 388"); 
  coursestaken300BA.push("INFO 388");}
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 388") {
        coursestaken300.splice(i, 1);
        coursestaken300BA.splice(i, 1);
      }
    }
  }
  if (info391) { coursestaken300.push("INFO 391"); }
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 391") {
        coursestaken300.splice(i, 1);
      }
    }
  }
  if (info395) { coursestaken300.push("INFO 395"); }
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 395") {
        coursestaken300.splice(i, 1);
      }
    }
  }
  if (info320) { coursestaken300.push("INFO 320"); }
  else {
    for (var i = 0; i < coursestaken300.length; i++) {
      if (coursestaken300[i] === "INFO 320") {
        coursestaken300.splice(i, 1);
      }
    }
  }

  // Minor validation code
  if (infotype == "Major") {
    document.getElementById("specialisationdiv").style.display = "block";
    // document.getElementById("courseselect").style.display = "block";
  }
  if (infotype = $('#infotype input:radio:checked').val() == "Minor") {

    if (coursestaken300.length >= 1 && coursestaken300.length + coursestaken200.length >= 4) {
      document.getElementById("p0").innerHTML = ("Minor done")
      document.getElementById("s0").innerHTML = ("Minor done")
    } else {
      if (coursestaken300.length + coursestaken200.length != 4) {
        document.getElementById("p0").innerHTML = ("At least 4 200 level or above paper required")
        document.getElementById("s0").innerHTML = ("At least 4 200 level or above paper required")
      } else if (coursestaken300.length <= 0) {
        document.getElementById("p0").innerHTML = ("At least 1 300 level paper required")
        document.getElementById("s0").innerHTML = ("At least 1 300 level paper required")
      }
    }
  }

  if (level100done) {
    // alert("100 levesl done");
  }
  if (info320 || info395){
    capstone = true;
    // alert("Capstone");
  }

    if (coursestaken300BA.length >= 2){
    BA300done = true;
    //     alert("BA course done");
      }

      if (coursestaken300IT.length >= 2){
      IT300done = true;
      //     alert("IT course done");
        }

      document.getElementById("info100").style.display ='block';
      document.getElementById("info200").style.display ='block';
      document.getElementById("info300").style.display ='block';
      document.getElementById("infocap").style.display ='block';
      document.getElementById("info100t3").style.display ='block';
      document.getElementById("info300t3").style.display ='block';
      document.getElementById("info100t2").style.display ='block';
      document.getElementById("info200t2").style.display ='block';
      document.getElementById("info300t2").style.display ='block';

  if (majortype == "INFO Major") {
    // document.getElementById("courseselect").style.display = "block";
    // check if 100 level done, 3 200 level courses, 2 300 level course as well as one capstone.  
    document.getElementById("p0").innerHTML = "Take all 100 level papers, at least 45 INFO points at 200-level and 45 points at 300 level courses including a Capstone paper";
    document.getElementById("s0").innerHTML = "Take all 100 level papers, at least 45 INFO points at 200-level and 45 points at 300 level courses including a Capstone paper";
        document.getElementById("courseselect").style.display = "block";
    if(level100done){
      document.getElementById("p0").innerHTML = "Take at least 45 INFO points at 200-level and 45 points at 300 level courses including a Capstone paper";
      document.getElementById("s0").innerHTML = "Take at least 45 INFO points at 200-level and 45 points at 300 level courses including a Capstone paper";
      document.getElementById("info100").style.display ='none';
      document.getElementById("info100t2").style.display ='none';
      document.getElementById("info100t3").style.display ='none';
    }
    if(coursestaken200.length >= 3){
      document.getElementById("info200").style.display ='none';
      document.getElementById("info200t2").style.display ='none';
      document.getElementById("p0").innerHTML = "Take at least 45 points at 300 level including a Capstone paper";
      document.getElementById("s0").innerHTML = "Take at least 45 points at 300 level including a Capstone paper";
    }
    if(capstone && coursestaken200.length <= 2){
      document.getElementById("p0").innerHTML = "Take at least 45 points at 300 level course";
      document.getElementById("s0").innerHTML = "Take at least 45 points at 300 level course";
    }
    if(level100done && coursestaken200.length >= 3 && coursestaken300.length >= 3 && capstone){
      document.getElementById("info300").style.display ='none';
      document.getElementById("info300t3").style.display ='none';
      document.getElementById("infocap").style.display ='none';
      document.getElementById("p0").innerHTML = "INFO Major completed";
      document.getElementById("s0").innerHTML = "INFO Major completed";
      // alert("Info Major done")
    }
  }

  if (majortype == "Business Analysis") {
    document.getElementById("p0").innerHTML = "Take all 100 level papers, INFO 231, INFO 234, INFO 264 and two of INFO 334, INFO 354, INFO 376, INFO 388 and one Capstone paper";
    document.getElementById("s0").innerHTML = "Take all 100 level papers, INFO 231, INFO 234, INFO 264 and two of INFO 334, INFO 354, INFO 376, INFO 388 and one Capstone paper";
        document.getElementById("courseselect").style.display = "block";
    if(level100done){
      document.getElementById("info100").style.display ='none';
      document.getElementById("info100t2").style.display ='none';
      document.getElementById("info100t3").style.display ='none';
      document.getElementById("p0").innerHTML = "Take all INFO 231, INFO 234, INFO 264 and two of INFO 334, INFO 354, INFO 376, INFO 388 and one Capstone paper";
      document.getElementById("s0").innerHTML = "Take all INFO 231, INFO 234, INFO 264 and two of INFO 334, INFO 354, INFO 376, INFO 388 and one Capstone paper";
    }
    if(BA200c){
      document.getElementById("info200").style.display ='none';
      document.getElementById("info200t2").style.display ='none';
      document.getElementById("p0").innerHTML = "Take two of INFO 334, INFO 354, INFO 376, INFO 388 and one Capstone paper";
      document.getElementById("s0").innerHTML = "Take two of INFO 334, INFO 354, INFO 376, INFO 388 and one Capstone paper";
    }
    if(BAcap && coursestaken300BA.length <= 1){
      document.getElementById("p0").innerHTML = "Take two of INFO 334, INFO 354, INFO 376, INFO 388";
      document.getElementById("s0").innerHTML = "Take two of INFO 334, INFO 354, INFO 376, INFO 388";
    }  
    // if(BAcap){
    //   document.getElementById("infocap").style.display ='none';
    // }
    if(level100done && IT200c && coursestaken300BA.length >= 2 && BAcap){
      document.getElementById("info300").style.display ='none';
      document.getElementById("info300t3").style.display ='none';
      document.getElementById("infocap").style.display ='none';
      // alert("BA done")
      document.getElementById("p0").innerHTML = "Business Analysis specialisation completed";
      document.getElementById("s0").innerHTML = "Business Analysis specialisation completed";
    }
  }

  if (majortype == "IT Solutions") {
    document.getElementById("p0").innerHTML = "Take all 100 level papers, INFO 231, INFO 226, INFO 246, INFO 320 (Capstone) and two of INFO 354, INFO 376, INFO 377, INFO 386";
    document.getElementById("s0").innerHTML = "Take all 100 level papers, INFO 231, INFO 226, INFO 246, INFO 320 (Capstone) and two of INFO 354, INFO 376, INFO 377, INFO 386";
        document.getElementById("courseselect").style.display = "block";
    if(level100done){
      document.getElementById("info100").style.display ='none';
      document.getElementById("info100t2").style.display ='none';
      document.getElementById("info100t3").style.display ='none';
      document.getElementById("p0").innerHTML = "Take all INFO 231, INFO 226, INFO 246, INFO 320 (Capstone) and two of INFO 354, INFO 376, INFO 377, INFO 386";
      document.getElementById("s0").innerHTML = "Take all INFO 231, INFO 226, INFO 246, INFO 320 (Capstone) and two of INFO 354, INFO 376, INFO 377, INFO 386";
    }
    if(IT200c){
      document.getElementById("info200").style.display ='none';
      document.getElementById("info200t2").style.display ='none';
      document.getElementById("p0").innerHTML = "Take INFO 320 (Capstone) and two of INFO 354, INFO 376, INFO 377, INFO 386";
      document.getElementById("s0").innerHTML = "Take INFO 320 (Capstone) and two of INFO 354, INFO 376, INFO 377, INFO 386";
    }
    if(ITcap && coursestaken300IT.length <= 1){
      document.getElementById("p0").innerHTML = "Take two of INFO 354, INFO 376, INFO 377, INFO 386";
      document.getElementById("s0").innerHTML = "Take two of INFO 354, INFO 376, INFO 377, INFO 386";
    }  
    if(level100done && ITcap && coursestaken300IT.length >= 2 && ITcap){
      document.getElementById("info300").style.display ='none';
      document.getElementById("info300t3").style.display ='none';
      document.getElementById("infocap").style.display ='none';
      // alert("BA done")
      document.getElementById("p0").innerHTML = "IT Solutions specialisation completed";
      document.getElementById("s0").innerHTML = "IT Solutions specialisation completed";
    }
  }

  var texttaken = "Courses I have taken are: " + coursestaken.join(", ") + " | " + totalpoints + " Points ";
  document.getElementById("p1").innerHTML = texttaken;
  // document.getElementById("s1").innerHTML = texttaken;
  document.getElementById("page1").value = texttaken;
}

// $(document).ready(function() {
//   $("button").click(function(){
//       var coursestaken = [];
//       $.each($("input[name='sport']:checked"), function(){            
//           coursestaken.push($(this).val());
//       });
//       alert("My favourite sports are: " + coursestaken.join(", "));
//   });
// });

// document.getElementById("p1").innerHTML = "New text!";

function myundergrad() {
  // alert("hi");
  document.getElementById("page1").value = "undergrad";
  nextPrev(1);
}

function postgrad() {
  // alert("hi2");
  document.getElementById("page1").value = "postgrad";
  nextPrev(1);
  // document.getElementById("lookupbar").innerHTML = "new HTML";
}

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    // document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    // document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}