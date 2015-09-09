$(document).ready(function($){
factor_x = ($(window).width()) / 1920.0;
factor_y = ($(window).height( ))/ 1080.0;

$('html').css("transform","scale("+factor_x+","+factor_y+")");  
//For Firefox
$('html').css("-moz-transform","scale("+factor_x+","+factor_y+")"); 
      
//For Google Chrome
$('html').css("-webkit-transform","scale("+factor_x+","+factor_y+")");

//For Opera
$('html').css("-o-transform","scale("+factor_x+","+factor_y+")");

  $(".a").click(function() {                                                        // if user click eurobasket_1987 image       
    $("li").removeClass('clicked');                                                 // removes the class "clicked" in every item at the timeline
    $(".a").addClass('clicked');                                                    // inserts the class "clicked" to the relative item at the timeline
    $("div").finish();                                                              // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                            // hide the previous text 
    $(".per1").fadeIn(2000);                                                        // fade-in the relative text
    $(".per2").hide();                                                              // hide the previous text and images
    $(".per3").hide();
    $(".per4").hide();
    $(".per5").hide();
    $(".per6").hide();
    $(".ima1").hide();
    $(".ima2").hide();
    $(".ima3").hide();
    $(".ima4").hide();
    $(".ima5").hide();
    $(".ima6").hide();
  })
})

$(document).ready(function($){                                                        
  $(".b").click(function() {                                                        // if user click euro_2004 image
    $("li").removeClass('clicked');                                                 // removes the class "clicked" in every item at the timeline
    $(".b").addClass('clicked');                                                    // inserts the class "clicked" to the relative item at the timeline
    $("div").finish();                                                              // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                            // hide the previous text 
    $(".per2").fadeIn(2000);                                                        // fade-in the relative text
    $(".per1").hide();                                                              // hide the previous text and images
    $(".per3").hide();
    $(".per4").hide();
    $(".per5").hide();
    $(".per6").hide();
    $(".ima1").hide();
    $(".ima2").hide();
    $(".ima3").hide();
    $(".ima4").hide();
    $(".ima5").hide();
    $(".ima6").hide();
  })
})

$(document).ready(function($){                                 
  $(".c").click(function() {                                                        // if user click olympic_2004 image
    $("li").removeClass('clicked');                                                 // removes the class "clicked" in every item at the timeline
    $(".c").addClass('clicked');                                                    // inserts the class "clicked" to the relative item at the timeline
    $("div").finish();                                                              // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                            // hide the previous text 
    $(".per3").fadeIn(2000);                                                        // fade-in the relative text
    $(".per2").hide();                                                              // hide the previous text and images
    $(".per1").hide();
    $(".per4").hide();
    $(".per5").hide();
    $(".per6").hide();
    $(".ima1").hide();
    $(".ima2").hide();
    $(".ima3").hide();
    $(".ima4").hide();
    $(".ima5").hide();
    $(".ima6").hide();
  })
})

$(document).ready(function($){
  $(".d").click(function() {                                                        // if user click eurobasket_2005 image
    $("li").removeClass('clicked');                                                 // removes the class "clicked" in every item at the timeline
    $(".d").addClass('clicked');                                                    // inserts the class "clicked" to the relative item at the timeline
    $("div").finish();                                                              // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                            // hide the previous text 
    $(".per4").fadeIn(2000);                                                        // fade-in the relative text
    $(".per2").hide();                                                              // hide the previous text and images
    $(".per3").hide();
    $(".per1").hide();
    $(".per5").hide();
    $(".per6").hide();
    $(".ima1").hide();
    $(".ima2").hide();
    $(".ima3").hide();
    $(".ima4").hide();
    $(".ima5").hide();
    $(".ima6").hide();
  })
})

$(document).ready(function($){
  $(".e").click(function() {                                                        // if user click mundobasket_2006 image
    $("li").removeClass('clicked');                                                 // removes the class "clicked" in every item at the timeline
    $(".e").addClass('clicked');                                                    // inserts the class "clicked" to the relative item at the timeline
    $("div").finish();                                                              // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                            // hide the previous text 
    $(".per5").fadeIn(2000);                                                        // fade-in the relative text
    $(".per2").hide();                                                              // hide the previous text and images
    $(".per3").hide();
    $(".per4").hide();
    $(".per6").hide();
    $(".per1").hide();
    $(".ima1").hide();
    $(".ima2").hide();
    $(".ima3").hide();
    $(".ima4").hide();
    $(".ima5").hide();
    $(".ima6").hide();
  })
})

$(document).ready(function($){
  $(".f").click(function() {                                                        // if user click mundial_2014 image
    $("li").removeClass('clicked');                                                 // removes the class "clicked" in every item at the timeline
    $(".f").addClass('clicked');                                                    // inserts the class "clicked" to the relative item at the timeline
    $("div").finish();                                                              // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                            // hide the previous text 
    $(".per6").fadeIn(2000);                                                        // fade-in the relative text
    $(".per2").hide();                                                              // hide the previous text and images
    $(".per3").hide();
    $(".per4").hide();
    $(".per5").hide();
    $(".per1").hide();
    $(".ima1").hide();
    $(".ima2").hide();
    $(".ima3").hide();
    $(".ima4").hide();
    $(".ima5").hide();
    $(".ima6").hide();
  })
})

$(document).ready(function($){
  $(".im1").click(function() {                                                      // if user click the zoom lens icon in eurobasket_1987 image
    $("div").finish();                                                              // stop every running fade-in 
    $("img").finish();  
    $(".per1").hide();                                                              // hide the previous text  
    $(".ima1").fadeIn(2000);                                                        // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                      // fade-in the relative text
    loadJSON('json/eurobasket_1987.json',function(response) {                       // load the relative text
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];                   // show the relative text in the webpage
    });        
})})

$(document).ready(function($){                                  
  $(".im2").click(function() {                                                      // if user click the zoom lens icon in euro_2004 image
    $("div").finish();                                                              // stop every running fade-in 
    $("img").finish();  
    $(".per2").hide();                                                              // hide the previous text  
    $(".ima2").fadeIn(2000);                                                        // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                      // fade-in the relative text
    loadJSON('json/euro_2004.json',function(response) {                             // load the relative text
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];                   // show the relative text in the webpage
    });
})})

$(document).ready(function($){                                                      
  $(".im3").click(function() {                                                      // if user click the zoom lens icon in olympic_2004 image              
    $("div").finish();                                                              // stop every running fade-in
    $("img").finish();  
    $(".per3").hide();                                                              // hide the previous text 
    $(".ima3").fadeIn(2000);                                                        // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                      // fade-in the relative text    
    loadJSON('json/olympic_2004.json',function(response) {                          // load the relative text
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];                   // show the relative text in the webpage
    });
})})

$(document).ready(function($){                                                                    
  $(".im4").click(function() {                                                      // if user click the zoom lens icon in eurobasket_2005 image 
    $("div").finish();                                                              // stop every running fade-in
    $("img").finish();                                                              
    $(".per4").hide();                                                              // hide the previous text 
    $(".ima4").fadeIn(2000);                                                        // fade-in the relative image   
    $("#mytext").fadeIn(2000);                                                      // fade-in the relative text  
    loadJSON('json/eurobasket_2005.json',function(response) {                       // load the relative text  
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];                   // show the relative text in the webpage
    });
})})

$(document).ready(function($){                                                      
  $(".im5").click(function() {                                                      // if user click the zoom lens icon in mundobasket_2006 image
    $("div").finish();                                                              // stop every running fade-in
    $("img").finish();  
    $(".per5").hide();                                                              // hide the previous text
    $(".ima5").fadeIn(2000);                                                        // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                      // fade-in the relative text  
    loadJSON('json/mundobasket_2006.json',function(response) {                      // load the relative text 
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];                   // show the relative text in the webpage
    });    
})})

$(document).ready(function($){
  $(".im6").click(function() {                                                      // if user click the zoom lens icon in mundial_2014 image
    $("div").finish();                                                              // stop every running fade-in
    $("img").finish();  
    $(".per6").hide();                                                              // hide the previous text
    $(".ima6").fadeIn(2000);                                                        // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                      // fade-in the relative text
    loadJSON('json/mundial_2014.json',function(response) {                          // load the relative text 
        re = JSON.parse(response);                          
        document.getElementById("mytext").innerHTML =re['@text'];                   // show the relative text in the webpage
    });
})})