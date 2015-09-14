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
    if (factor_x<0.9) {
      $('head').append("<style>entity:hover:after  { font-size: initial; }</style>");
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


var d=-1;  

$('#drag1').on('dragstart', function(e){
    e.originalEvent.dataTransfer.setData('text/html', $('#a'));
    e.originalEvent.dataTransfer.effectAllowed = 'move';
    d=0;
});//dataTransfer.setData('text/html', e.target.innerHTML);

$('#drag2').on('dragstart', function(e){
    e.originalEvent.dataTransfer.setData('text/html', $('#b'));
    e.originalEvent.dataTransfer.effectAllowed = 'move';
    d=1;
});

$('#drag3').on('dragstart', function(e){
    e.originalEvent.dataTransfer.setData('text/html', $('#c'));
    e.originalEvent.dataTransfer.effectAllowed = 'move';
    d=2;
});

$('#drag4').on('dragstart', function(e){
    e.originalEvent.dataTransfer.setData('text/html', $('#d'));
    e.originalEvent.dataTransfer.effectAllowed = 'move';
    d=3;
});

$('#drag5').on('dragstart', function(e){
    e.originalEvent.dataTransfer.setData('text/html', $('#e'));
    e.originalEvent.dataTransfer.effectAllowed = 'move';
    d=4;
});

$('#drag6').on('dragstart', function(e){
    e.originalEvent.dataTransfer.setData('text/html', $('#f'));
    e.originalEvent.dataTransfer.effectAllowed = 'move';
    d=5;
});

var drop = $('#drop');
drop.on('dragover', function(e){
    e.preventDefault();

});
drop.on('dragenter', function(e){
    e.preventDefault();
    e.target.style.border = "3px dotted red"; 
});
drop.on("dragleave", function(e) {                    // drop-target border change to initial value         
    if ( e.target.className == "div1" ) {
        e.target.style.border = "";
    }
})

drop.on('drop', function(e){
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
    $("entity").empty();                                                      // delete all items with abstracts
    loadJSON('json/eurobasket_1987.json',function(response) {                 // load the relative text
        re = JSON.parse(response);                                             // fade-in the relative text
        document.getElementById("mytext").innerHTML =re['@text'];             // show the relative text in the webpage
        $("#mytext").fadeIn(2000); 
        wrapText("mytext",re.Resources,re['@text'].length);                   // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                         // inserting abstract to every recognised entity
           var abst=re.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
           }
        }
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
    $("entity").empty();                                                      // delete all items with abstracts
    loadJSON('json/euro_2004.json',function(response) {                       // load the relative text
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];             // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                            // fade-in the relative text
        wrapText("mytext",re.Resources,re['@text'].length);                   // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                         // inserting abstract to every recognised entity
           var abst=re.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
          }
        }
     })
  }

 
  if (d==2)                                                                   // if the dropped object is olympic_2004
  { $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mytext").finish();
    $(".im1").hide();
    $(".im2").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im3").fadeIn(2000);                                                   // fade-in the relative image
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $("#c").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline   
    $("entity").empty();                                                      // delete all items with abstracts
    loadJSON('json/olympic_2004.json',function(response) {                    // load the relative text            
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];             // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                                // fade-in the relative text
        wrapText("mytext",re.Resources,re['@text'].length);                   // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                         // inserting abstract to every recognised entity
           var abst=re.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
          }
        }
     })
  }


  if (d==3)                                                                   // if the dropped object is eurobasket_2005
  { $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mytext").finish();
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im5").hide();
    $(".im6").hide();
    $(".im4").fadeIn(2000);                                                   // fade-in the relative image
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $("#d").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline  
    $("entity").empty();                                                      // delete all items with abstracts
    loadJSON('json/eurobasket_2005.json',function(response) {                 // load the relative text 
        re = JSON.parse(response);  
        document.getElementById("mytext").innerHTML =re['@text'];             // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                                // fade-in the relative text
        wrapText("mytext",re.Resources,re['@text'].length);                   // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                         // inserting abstract to every recognised entity
           var abst=re.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
          }
        }
     })
  }


  if (d==4)                                                                   // if the dropped object is mundobasket_2006
  { $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mytext").finish();
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im4").hide();
    $(".im6").hide();
    $(".im5").fadeIn(2000);                                                   // fade-in the relative image
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $("#e").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin
    $("entity").empty();                                                      // delete all items with abstracts
    loadJSON('json/mundobasket_2006.json',function(response) {                // load the relative text 
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];             // show the relative text in the webpage
       $("#mytext").fadeIn(2000);                                                // fade-in the relative text
        wrapText("mytext",re.Resources,re['@text'].length);                   // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                         // inserting abstract to every recognised entity
           var abst=re.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
          }
        }
     })
  }


  if (d==5)                                                                   // if the dropped object is mundial_2014
  { $("div").finish();                                                        // stop every running fade-in 
    $("img").finish();  
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mytext").finish();
    $(".im1").hide();
    $(".im2").hide();
    $(".im3").hide();
    $(".im4").hide();
    $(".im5").hide();
    $(".im6").fadeIn(2000);                                                   // fade-in the relative image
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $("#f").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin   
    $("entity").empty();                                                      // delete all items with abstracts
    loadJSON('json/mundial_2014.json',function(response) {                    // load the relative text
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];             // show the relative text in the webpage
       $("#mytext").fadeIn(2000);                                                // fade-in the relative text
        wrapText("mytext",re.Resources,re['@text'].length);                   // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                         // inserting abstract to every recognised entity
           var abst=re.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
          }
        }
     })
  }
   e.preventDefault();
    e.target.style.border = "";                                          // drop-target border change to initial value  
});


})


