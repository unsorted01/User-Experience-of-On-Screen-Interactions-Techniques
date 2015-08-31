$(document).ready(function($){

    var screenHeight = screen.height;
if (screenHeight < 800) {
  $('body').css('zoom', 0.8);
} else {
     $('body').css('zoom', 1);
}        


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
    $("#mybutton").hide();
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
    $("#mybutton").hide();
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
    $("#mybutton").hide();
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
    $("#mybutton").hide();
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
    $("#mybutton").hide();
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
    $("#mybutton").hide();
  })
})

$(document).ready(function($){
  $(".im1").click(function() {                                                      // if user click the zoom lens icon in eurobasket_1987 image
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $(".per1").hide();                                                              // hide the previous text  
    $(".ima1").fadeIn(2000);                                                        // fade-in the relative image
    $("#mytext").fadeIn(2000); 
    

    $("#mybutton").hide();  
    $("#mybutton").show(2000);                                                     // fade-in the relative text
    $("entity").empty();   
    $("#mybutton").attr("disabled", false);  
    document.getElementById("mybutton").style.backgroundColor = "#3cb0fd";
    loadJSON('json/eurobasket_1987.json',function(response) {                 // load the relative text
        re1 = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re1['@text'];             // shows the relative text in the webpage

       $("#mybutton").click(function() { 
          $("div").finish();  
          $("#mytext").hide(); 
          document.getElementById("mybutton").style.backgroundColor = "#bd0a0a";
          document.getElementById("mytext").innerHTML =re1['@text'];            // show the relative text in the webpage
          wrapText("mytext",re1.Resources,re1['@text'].length);                 // function wrapText tags every recognised entity
          var a=0;
          $("#mybutton").attr("disabled", true);
          for ( j =0; j < re1.Resources.length  ; j++) {                        // inserting abstract to every recognised entity
             var abst=re1.Resources[j]["@abstract"];   
             if (abst) {
                a=a+1;
                $('entity:nth-child(' + a + ')').attr('data-content',abst);
              }
          }
         $("#mytext").show(); 
      })
    })      
})})

$(document).ready(function($){                                  
  $(".im2").click(function() {                                                      // if user click the zoom lens icon in euro_2004 image
    $("div").finish();                                                              // stop every running fade-in 
    $("img").finish();  
    $(".per2").hide();                                                              // hide the previous text  
    $(".ima2").fadeIn(2000);                                                        // fade-in the relative image
    $("#mytext").fadeIn(2000);  
    
    $("#mybutton").hide();  
    $("#mybutton").show(2000);                                                     // fade-in the relative text
    $("entity").empty();   
    $("#mybutton").attr("disabled", false);  
    document.getElementById("mybutton").style.backgroundColor = "#3cb0fd";  
    loadJSON('json/euro_2004.json',function(response) {                       // load the relative text
      re2 = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re2['@text'];               // show the relative text in the webpage
      $("#mybutton").click(function() { 
        $("div").finish();  
        $("#mytext").hide();  
        document.getElementById("mybutton").style.backgroundColor = "#bd0a0a";
        document.getElementById("mytext").innerHTML =re2['@text'];             // function wrapText tags every recognised entity
        wrapText("mytext",re2.Resources,re2['@text'].length);                  // function wrapText tags every recognised entity
        var a=0;
        $("#mybutton").attr("disabled", true);
        for ( j =0; j < re2.Resources.length  ; j++) {                         // inserting abstract to every recognised entity
           var abst=re2.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
           }
        }
        $("#mytext").show(); 
    })
   })
})})

$(document).ready(function($){                                                      
  $(".im3").click(function() {                                                      // if user click the zoom lens icon in olympic_2004 image              
    $("div").finish();                                                              // stop every running fade-in
    $("img").finish();  
    $(".per3").hide();                                                              // hide the previous text 
    $(".ima3").fadeIn(2000);                                                        // fade-in the relative image
    $("#mytext").fadeIn(2000);   
    $("#mybutton").hide();  
    $("#mybutton").show(2000);                                                     // fade-in the relative text
    $("entity").empty();   
    $("#mybutton").attr("disabled", false);  
    document.getElementById("mybutton").style.backgroundColor = "#3cb0fd";                                                    
    loadJSON('json/olympic_2004.json',function(response) {                    // load the relative text
      re3 = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re3['@text'];               // show the relative text in the webpage
      $("#mybutton").click(function() { 
        $("div").finish();  
        $("#mytext").hide();
        document.getElementById("mybutton").style.backgroundColor = "#bd0a0a";
        document.getElementById("mytext").innerHTML =re3['@text'];             // function wrapText tags every recognised entity
        wrapText("mytext",re3.Resources,re3['@text'].length);                   // function wrapText tags every recognised entity
        var a=0;
        $("#mybutton").attr("disabled", true);
        for ( j =0; j < re3.Resources.length  ; j++) {                         // inserting abstract to every recognised entity
           var abst=re3.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
           }
        }
        $("#mytext").show();
    })
   })
})})

$(document).ready(function($){                                                                    
  $(".im4").click(function() {                                                      // if user click the zoom lens icon in eurobasket_2005 image 
    $("div").finish();                                                              // stop every running fade-in
    $("img").finish();                                                              
    $(".per4").hide();                                                              // hide the previous text 
    $(".ima4").fadeIn(2000);                                                        // fade-in the relative image   
    $("#mytext").fadeIn(2000);
     $("#mybutton").hide();  
    $("#mybutton").show(2000);                                                     // fade-in the relative text
    $("entity").empty();   
    $("#mybutton").attr("disabled", false);  
    document.getElementById("mybutton").style.backgroundColor = "#3cb0fd";                                                        // fade-in the relative text  
    loadJSON('json/eurobasket_2005.json',function(response) {                 // load the relative text 
      re4 = JSON.parse(response);  
      document.getElementById("mytext").innerHTML =re4['@text'];               // show the relative text in the webpage  
      $("#mybutton").click(function() { 
        $("div").finish();  
        $("#mytext").hide(); 
        document.getElementById("mybutton").style.backgroundColor = "#bd0a0a";
        document.getElementById("mytext").innerHTML =re4['@text'];             // function wrapText tags every recognised entity
        wrapText("mytext",re4.Resources,re4['@text'].length);                  // function wrapText tags every recognised entity
        var a=0;
        $("#mybutton").attr("disabled", true);
        for ( j =0; j < re4.Resources.length  ; j++) {                         // inserting abstract to every recognised entity
           var abst=re4.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
           }
        }
        $("#mytext").show();
    })
   })  
})})

$(document).ready(function($){                                                      
  $(".im5").click(function() {                                                      // if user click the zoom lens icon in mundobasket_2006 image
    $("div").finish();                                                              // stop every running fade-in
    $("img").finish();  
    $(".per5").hide();                                                              // hide the previous text
    $(".ima5").fadeIn(2000);                                                        // fade-in the relative image
    $("#mytext").fadeIn(2000);  
    $("#mybutton").hide();  
    $("#mybutton").show(2000);                                                     // fade-in the relative text
    $("entity").empty();   
    $("#mybutton").attr("disabled", false);  
    document.getElementById("mybutton").style.backgroundColor = "#3cb0fd";                                                     // fade-in the relative text  
    loadJSON('json/mundobasket_2006.json',function(response) {                // load the relative text 
      re5 = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re5['@text'];               // show the relative text in the webpage
      $("#mybutton").click(function() { 
        $("div").finish();  
        $("#mytext").hide();  
        document.getElementById("mybutton").style.backgroundColor = "#bd0a0a";
        document.getElementById("mytext").innerHTML =re5['@text'];             // function wrapText tags every recognised entity
        wrapText("mytext",re5.Resources,re5['@text'].length);                   // function wrapText tags every recognised entity
        var a=0;
        $("#mybutton").attr("disabled", true);
        for ( j =0; j < re5.Resources.length  ; j++) {                         // inserting abstract to every recognised entity
           var abst=re5.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
           }
        }
         $("#mytext").show();
   })
  })     
})})

$(document).ready(function($){
  $(".im6").click(function() {                                                      // if user click the zoom lens icon in mundial_2014 image
    $("div").finish();                                                              // stop every running fade-in
    $("img").finish();  
    $(".per6").hide();                                                              // hide the previous text
    $(".ima6").fadeIn(2000);                                                        // fade-in the relative image
    $("#mytext").fadeIn(2000);
    $("#mybutton").hide();  
    $("#mybutton").show(2000);                                                     // fade-in the relative text
    $("entity").empty();   
    $("#mybutton").attr("disabled", false);  
    document.getElementById("mybutton").style.backgroundColor = "#3cb0fd";                                                        // fade-in the relative text
    loadJSON('json/mundial_2014.json',function(response) {                // load the relative text 
      re6 = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re6['@text'];               // show the relative text in the webpage
      $("#mybutton").click(function() { 
        $("div").finish();  
        $("#mytext").hide();  
        document.getElementById("mybutton").style.backgroundColor = "#bd0a0a";
        document.getElementById("mytext").innerHTML =re6['@text'];             // function wrapText tags every recognised entity
        wrapText("mytext",re6.Resources,re6['@text'].length);                   // function wrapText tags every recognised entity
        var a=0;
        $("#mybutton").attr("disabled", true);
        for ( j =0; j < re6.Resources.length  ; j++) {                         // inserting abstract to every recognised entity
           var abst=re6.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
           }
        }
         $("#mytext").show();
   })
  })
})})