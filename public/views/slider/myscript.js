$(document).ready(function(){

    var screenHeight = screen.height;
if (screenHeight < 800) {
  $('body').css('zoom', 0.8);
} else {
     $('body').css('zoom', 1);
}        


  $("#rangeinput").change(function() {
    if (rangevalue.value>=0&&rangevalue.value<=10) {                          // if user slides to eurobasket_1987 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im2").hide();                                                       
    $(".im3").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im1").fadeIn(2000);                                                   // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("li").removeClass('clicked');                                           // removes the class "clicked" in every item at the timeline
    $(".a").addClass('clicked');                                              // inserts the class "clicked" to the relative item at the timeline  

    loadJSON('json/eurobasket_1987.json',function(response) {                 // load the relative text
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];             // shows the relative text in the webpage
    });
    }

  if (rangevalue.value>10&&rangevalue.value<=20) {                            // if user slides to euro_2004 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im1").hide();
    $(".im3").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im2").fadeIn(2000);                                                   // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".b").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline 

    loadJSON('json/euro_2004.json',function(response) {                       // load the relative text
      re = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
    });
  }

    if (rangevalue.value>20&&rangevalue.value<=30) {                          // if user slides to olympic_2004 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im1").hide();
    $(".im2").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im3").fadeIn(2000);                                                   // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".c").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline   

    loadJSON('json/olympic_2004.json',function(response) {                    // load the relative text            
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];             // show the relative text in the webpage
    });
  }

   if (rangevalue.value>30&&rangevalue.value<=40) {                           // if user slides to eurobasket_2005 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im4").fadeIn(2000);                                                   // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".d").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline  
    
    loadJSON('json/eurobasket_2005.json',function(response) {                 // load the relative text 
      re = JSON.parse(response);  
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
    });
  }

    if (rangevalue.value>40&&rangevalue.value<=50) {                          // if user slides to mundobasket_2006 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im4").hide();
    $(".im6").hide();
    $(".im5").fadeIn(2000);                                                   // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".e").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline

    loadJSON('json/mundobasket_2006.json',function(response) {                // load the relative text 
      re = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
    });
  }

  if (rangevalue.value>50&&rangevalue.value<=60) {                            // if user slides to mundial_2014 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                      // hide the previous text and images
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").fadeIn(2000);                                                   // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".f").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline   

    loadJSON('json/mundial_2014.json',function(response) {                    // load the relative text
      re = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re['@text'];               // show the relative text in the webpage
    });
  }
})});


