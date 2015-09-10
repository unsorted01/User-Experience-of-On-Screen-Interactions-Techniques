$(document).ready(function(){   

factor_x = ($(window).width()) / 1920.0;

$('html').css("transform","scale("+factor_x+","+factor_x+")");  
//For Firefox
$('html').css("-moz-transform","scale("+factor_x+","+factor_x+")"); 
      
//For Google Chrome
$('html').css("-webkit-transform","scale("+factor_x+","+factor_x+")");

//For Opera
$('html').css("-o-transform","scale("+factor_x+","+factor_x+")");

  $(".a").click(function() {                                                  // if user click eurobasket_1987 image
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
        $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    });
  });
    
$(".b").click(function() {                                                    // if user click euro_2004 image
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
});

$(".c").click(function() {                                                    // if user click olympic_2004 image
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
});

$(".d").click(function() {                                                    // if user click eurobasket_2005 image
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
});

$(".e").click(function() {                                                    // if user click mundobasket_2006 image
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
});

$(".f").click(function() {                                                    // if user click mundial_2014 image
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
});

});
