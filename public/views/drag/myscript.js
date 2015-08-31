$(document).ready(function(){
var screenHeight = screen.height;
if (screenHeight < 800) {
  $('body').css('zoom', 0.8);
} else {
     $('body').css('zoom', 1);
}        
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
  {  

    $("#mybutton").removeClass();
    $("#mybutton").addClass("a1");
    $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();
    $(".im2").hide();                                                       
    $(".im3").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im1").fadeIn(2000);                                                   // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // removes the class "clicked" in every item at the timeline
    $("#a").addClass('clicked');                                              // inserts the class "clicked" to the relative item at the timeline 
    $("entity").empty();   
    $("#mybutton").attr("disabled", false);  
    document.getElementById("mybutton").style.backgroundColor = "#3cb0fd";
    loadJSON('json/eurobasket_1987.json',function(response) {                 // load the relative text
        re1 = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re1['@text'];             // shows the relative text in the webpage

       $(".a1").click(function() { 
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
  }


  if (d==1)                                                                   // if the dropped object is euro_2004
  { $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();
    $(".im1").hide();
    $(".im3").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im2").fadeIn(2000);                                                   // fade-in the relative image                                                  
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $("#b").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin   
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
}

 
  if (d==2)                                                                   // if the dropped object is olympic_2004
  { $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();
    $(".im1").hide();
    $(".im2").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im3").fadeIn(2000);                                                   // fade-in the relative image                                                  
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $("#c").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin   
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
}


  if (d==3)                                                                   // if the dropped object is eurobasket_2005
  { $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im4").fadeIn(2000);                                                   // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $("#d").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline  
    $("entity").empty();   
    $("#mybutton").attr("disabled", false); 
    document.getElementById("mybutton").style.backgroundColor = "#3cb0fd";
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
}


  if (d==4)                                                                   // if the dropped object is mundobasket_2006
  { $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im4").hide();
    $(".im6").hide();
    $(".im5").fadeIn(2000);                                                   // fade-in the relative image
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $("#e").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin
    $("entity").empty();   
    $("#mybutton").attr("disabled", false); 
    document.getElementById("mybutton").style.backgroundColor = "#3cb0fd";
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
}


  if (d==5)                                                                   // if the dropped object is mundial_2014
  { $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").fadeIn(2000);                                                   // fade-in the relative image                                                  
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $("#f").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin   
    $("entity").empty(); 
    $("#mybutton").attr("disabled", false);
    document.getElementById("mybutton").style.backgroundColor = "#3cb0fd";
      loadJSON('json/mundial_2014.json',function(response) {                    // load the relative text
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
}
  event.target.style.border = "" ;                                            // drop-target border change to initial value  
}  



