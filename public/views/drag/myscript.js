$(document).ready(function(){
factor_x = ($(window).width()) / 1920.0;


$('html').css("transform","scale("+factor_x+","+factor_x+")");  
//For Firefox
$('html').css("-moz-transform","scale("+factor_x+","+factor_x+")"); 
      
//For Google Chrome
$('html').css("-webkit-transform","scale("+factor_x+","+factor_x+")");

//For Opera
$('html').css("-o-transform","scale("+factor_x+","+factor_x+")");    
})


var d=-1;     
                                                              // set counter to decide which object dragged
function allowDrop(ev) {                                                   
    ev.preventDefault();                                                    // drop-target border change
    ev.target.style.border = "3px dotted red";   
}
function drag0(ev) {                                                        // user starts drag eurobasket_1987 object
 d=0;
}
function drag1(ev) {                                                        // user starts drag euro_2004 object
 d=1;
}
function drag2(ev) {                                                        // user starts drag olympic_2004 object
 d=2;
}
function drag3(ev) {                                                        // user starts drags eurobasket_2005 object
 d=3;
}
function drag4(ev) {                                                        // user starts drag mundobasket_2006 object
 d=4;
}
function drag5(ev) {                                                        // user starts drag mundial_2014 object
 d=5;
} 
document.addEventListener("dragleave", function(event) {                    // drop-target border change to initial value         
    if ( event.target.className == "div1" ) {
        event.target.style.border = "";
    }
});

function drop(ev) {                                                           // user drops an object 
    ev.preventDefault();
  if (d==0)                                                                   // if the dropped object is eurobasket_1987
  { $("div").finish();                                                        // stop every running fade-in 
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
    $("#a").addClass('clicked');                                              // inserts the class "clicked" to the relative item at the timeline  
    loadJSON('json/eurobasket_1987.json',function(response) {                 // load the relative text
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];             // shows the relative text in the webpage
        $("#mytext").fadeIn(2000);                                                // fade-in the relative text
     })
  }


  if (d==1)                                                                   // if the dropped object is euro_2004
  { $("div").finish();                                                        // stop every running fade-in 
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
    $("#b").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline 
    loadJSON('json/euro_2004.json',function(response) {                       // load the relative text
      re = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                                // fade-in the relative text
     })
  }

 
  if (d==2)                                                                   // if the dropped object is olympic_2004
  { $("div").finish();                                                        // stop every running fade-in 
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
    $("#c").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline   
    loadJSON('json/olympic_2004.json',function(response) {                    // load the relative text            
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];             // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                                // fade-in the relative text 
     })
  }


  if (d==3)                                                                   // if the dropped object is eurobasket_2005
  { $("div").finish();                                                        // stop every running fade-in 
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
    $("#d").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline  
    loadJSON('json/eurobasket_2005.json',function(response) {                 // load the relative text 
      re = JSON.parse(response);  
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
      $("#mytext").fadeIn(2000);                                                // fade-in the relative text
     })
  }


  if (d==4)                                                                   // if the dropped object is mundobasket_2006
  { $("div").finish();                                                        // stop every running fade-in 
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
    $("#e").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin
    loadJSON('json/mundobasket_2006.json',function(response) {                // load the relative text 
      re = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
      $("#mytext").fadeIn(2000);                                                // fade-in the relative text
     })
  }


  if (d==5)                                                                   // if the dropped object is mundial_2014
  { $("div").finish();                                                        // stop every running fade-in 
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
    $("#f").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin   
    loadJSON('json/mundial_2014.json',function(response) {                    // load the relative text
      re = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
     })
  }
  event.target.style.border = "" ;                                            // drop-target border change to initial value  
}  



