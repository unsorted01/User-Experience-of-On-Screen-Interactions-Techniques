$(document).ready(function(){
$("button").show(2000); 
factor_x = ($(window).width()) / 1920.0;


$('html').css("transform","scale("+factor_x+","+factor_x+")");  
//For Firefox
$('html').css("-moz-transform","scale("+factor_x+","+factor_x+")"); 
      
//For Google Chrome
$('html').css("-webkit-transform","scale("+factor_x+","+factor_x+")");

//For Opera
$('html').css("-o-transform","scale("+factor_x+","+factor_x+")"); 

    var currentFontSize = $('html').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum/factor_x;

    var currentHeight = $('body').css('height');
    var currentHeightNum = parseFloat(currentHeight, 10);
    var newHeight = currentHeightNum/factor_x; 

    if (factor_x<1) {
    $('html').css('font-size', newFontSize);  
    $('body').css('height', newHeight); 
}

function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });    
}

$(function() {

  function call()
        {
              if($(this).hasClass('selected')) {
                 deselect($(this));               
                } else {
              $(this).addClass('selected');
             $('.pop').slideFadeToggle();
    }
    return false; }
        function caller()
        {
            setTimeout(call,180000);
        }
        caller();
         
  $('.close').on('click', function() {
    deselect($('#contact'));
    return false;
  });

   $('#message_submit').on('click', function() {
    deselect($('#contact'));
    return false;
  });
   
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};

  $("#rangeinput").change(function() {
    if (rangevalue.value>=0&&rangevalue.value<=10) {                          // if user slides to eurobasket_1987 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish(); 
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im2").hide();                                                       
    $(".im3").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im1").fadeIn(2000);                                                   // fade-in the relative image
    $("li").removeClass('clicked');                                           // removes the class "clicked" in every item at the timeline
    $(".a").addClass('clicked');                                              // inserts the class "clicked" to the relative item at the timeline  
    loadJSON('json/eurobasket_1987.json',function(response) {                 // load the relative text
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];             // shows the relative text in the webpage
        $("#mytext").fadeIn(2000);
    });
    }

  if (rangevalue.value>10&&rangevalue.value<=20) {                            // if user slides to euro_2004 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish(); 
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im1").hide();
    $(".im3").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im2").fadeIn(2000);                                                   // fade-in the relative image
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".b").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline 
    loadJSON('json/euro_2004.json',function(response) {                       // load the relative text
      re = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    });
  }

    if (rangevalue.value>20&&rangevalue.value<=30) {                          // if user slides to olympic_2004 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im1").hide();
    $(".im2").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im3").fadeIn(2000);                                                   // fade-in the relative image
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".c").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline   
    loadJSON('json/olympic_2004.json',function(response) {                    // load the relative text            
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];             // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                                // fade-in the relative text 
    });
  }

   if (rangevalue.value>30&&rangevalue.value<=40) {                           // if user slides to eurobasket_2005 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im4").fadeIn(2000);                                                   // fade-in the relative image
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".d").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline  
    loadJSON('json/eurobasket_2005.json',function(response) {                 // load the relative text 
      re = JSON.parse(response);  
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
      $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    });
  }

    if (rangevalue.value>40&&rangevalue.value<=50) {                          // if user slides to mundobasket_2006 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im4").hide();
    $(".im6").hide();
    $(".im5").fadeIn(2000);                                                   // fade-in the relative image
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".e").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin
    loadJSON('json/mundobasket_2006.json',function(response) {                // load the relative text 
      re = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
      $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    });
  }

  if (rangevalue.value>50&&rangevalue.value<=60) {                            // if user slides to mundial_2014 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").fadeIn(2000);                                                   // fade-in the relative image
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".f").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin   
    loadJSON('json/mundial_2014.json',function(response) {                    // load the relative text
      re = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text   
    });
  }
})});


