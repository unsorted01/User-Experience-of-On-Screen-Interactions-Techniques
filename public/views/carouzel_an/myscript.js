/*
* Flux 3D Carousel
* Author: Dean Coulter
* Licensed under the MIT license
* 
* Version 0.1
*/

(function($){
$.fn.carousel3d = function(args){

	var el = ({
		carousel_frame: $(this)
	});

	var size = el.carousel_frame.children().size();	
	var panelSize = el.carousel_frame.width();
	var translateZ = Math.round( ( panelSize / 2 ) / Math.tan( Math.PI / size ) );

	el.carousel_frame.css({
		"transform": "rotateY(0deg) translateZ(-"+translateZ+"px)"
	})


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

	var rotateY = 0;
	var rotate_int = 0;
	var ry =  360/size;
	var box = 0;

	function animate_slider(){
		rotateY = ry*rotate_int;
		$("#test").text(rotateY+", "+rotate_int+", ");
		
		for(i=0;i<size;i++){
			var z = (rotate_int*ry)+(i*ry);		
			el.carousel_frame.children("figure:eq("+i+")").css({
				"transform":"rotateY("+z+"deg ) translateZ("+translateZ+"px)"
			});
		}
		
		rotateY = 0;
		box = 0; // reset rotateY, ready for re-use
	}

	animate_slider();

	$(".next").on("click", function(){
		rotate_int -=1;
		animate_slider();
	});

	$(".prev").on("click", function(){
		rotate_int +=1;
		animate_slider();
	});

	el.carousel_frame.children().on("click", function(){

		new_int = -1*$(this).index();
		if(new_int < rotate_int+(-1*(size/2)) ){
			
			rotate_int = size + new_int;
		} else {
			rotate_int = new_int;
		
		}

if(rotate_int==0)                                                         // if user select eurobasket_1987 image
   {$("div").finish();                                                    // stop every running fade-in 
    $("#mytext").finish();
    $("#mytext").hide();                                                  // hide the previous text
    $("li").removeClass('clicked');                                       // remove the class "clicked" in every item at the timeline
    $(".a").addClass('clicked');                                          // insert the class "clicked" to the relative item at the timeline 
    $("entity").empty();                                                  // delete all items with abstracts
    loadJSON('json/eurobasket_1987.json',function(response) {             // load the relative text and abstracts
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];         // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                            // fade-in the relative text
        wrapText("mytext",re.Resources,re['@text'].length);               // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                     // inserting abstract to every recognised entity
           var abst=re.Resources[j]["@abstract"];   
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
          }
        }
     })
}


if((rotate_int==5)||(rotate_int==-1))                                     // if user select euro_2004 image
   {$("div").finish();                                                    // stop every running fade-in 
    $("#mytext").finish();
    $("#mytext").hide();                                                  // hide the previous text
    $("li").removeClass('clicked');                                       // remove the class "clicked" in every item at the timeline
    $(".b").addClass('clicked');                                          // insert the class "clicked" to the relative item at the timeline 
    $("entity").empty();                                                  // delete all items with abstracts
    loadJSON('json/euro_2004.json',function(response) {                   // load the relative text and abstracts
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];         // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                            // fade-in the relative text
        wrapText("mytext",re.Resources,re['@text'].length);               // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                     // inserting abstract to every recognised entity
           var abst=re.Resources[j]["@abstract"];    
           if (abst) {
             a=a+1;
             $('entity:nth-child(' + a + ')').attr('data-content',abst);
           }
      }
    })
  }


if((rotate_int==4)||(rotate_int==-2))                                     // if user select olympic_2004 image
   {$("div").finish();                                                    // stop every running fade-in 
    $("#mytext").finish();
    $("#mytext").hide();                                                  // hide the previous text
    $("li").removeClass('clicked');                                       // remove the class "clicked" in every item at the timeline
    $(".c").addClass('clicked');                                          // insert the class "clicked" to the relative item at the timeline 
    $("entity").empty();                                                  // delete all items with abstracts 
    loadJSON('json/olympic_2004.json',function(response) {                // load the relative text and abstracts
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];         // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                            // fade-in the relative text
        wrapText("mytext",re.Resources,re['@text'].length);               // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                     // inserting abstract to every recognised entity
           var abst=re.Resources[j]["@abstract"];
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
            }
        }
    })
  }

if((rotate_int==3)||(rotate_int==-3))                                     // if user select eurobasket_2005 image
   {$("div").finish();                                                    // stop every running fade-in 
    $("#mytext").finish();
    $("#mytext").hide();                                                  // hide the previous text
    $("li").removeClass('clicked');                                       // remove the class "clicked" in every item at the timeline
    $(".d").addClass('clicked');                                          // insert the class "clicked" to the relative item at the timeline 
    $("entity").empty();                                                  // delete all items with abstracts 
    loadJSON('json/eurobasket_2005.json',function(response) {             // load the relative text and abstracts
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];         // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                            // fade-in the relative text
        wrapText("mytext",re.Resources,re['@text'].length);               // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                     // inserting abstract to every recognised entity
           var abst=re.Resources[j]["@abstract"];
           if (abst) {
              a=a+1;
              $('entity:nth-child(' + a + ')').attr('data-content',abst);
           }
       }
    })
  }

if((rotate_int==2)||(rotate_int==-4))                                     // if user select mundobasket_2006 image
   {$("div").finish();                                                    // stop every running fade-in 
    $("#mytext").finish();
    $("#mytext").hide();                                                  // hide the previous text
    $("li").removeClass('clicked');                                       // remove the class "clicked" in every item at the timeline
    $(".e").addClass('clicked');                                          // insert the class "clicked" to the relative item at the timeline 
    $("entity").empty();                                                  // delete all items with abstracts
    loadJSON('json/mundobasket_2006.json',function(response) {            // load the relative text and abstracts
        re = JSON.parse(response);
        document.getElementById("mytext").innerHTML =re['@text'];         // show the relative text in the webpage
        $("#mytext").fadeIn(2000);                                            // fade-in the relative text
        wrapText("mytext",re.Resources,re['@text'].length);               // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                     // inserting abstract to every recognised entity
         var abst=re.Resources[j]["@abstract"];
         if (abst) {
          a=a+1;
          $('entity:nth-child(' + a + ')').attr('data-content',abst);
        }
      }
    })
  }

if((rotate_int==1)||(rotate_int==-5))                                     // if user select mundial_2014 image
   {$("div").finish();                                                    // stop every running fade-in 
    $("#mytext").finish();
    $("#mytext").hide();                                                  // hide the previous text
    $("li").removeClass('clicked');                                       // remove the class "clicked" in every item at the timeline
    $(".f").addClass('clicked');                                          // insert the class "clicked" to the relative item at the timeline 
    $("entity").empty();                                                  // delete all items with abstracts
    loadJSON('json/mundial_2014.json',function(response) {                // load the relative text and abstracts
      re = JSON.parse(response);
      document.getElementById("mytext").innerHTML =re['@text'];           // show the relative text in the webpage
      $("#mytext").fadeIn(2000);                                            // fade-in the relative text
        wrapText("mytext",re.Resources,re['@text'].length);               // function wrapText tags every recognised entity
        var a=0;
        for ( j =0; j < re.Resources.length  ; j++) {                     // inserting abstract to every recognised entity
        var abst=re.Resources[j]["@abstract"];
        if (abst) {
          a=a+1;
          $('entity:nth-child(' + a + ')').attr('data-content',abst);
        }
      }
   })
  }

		animate_slider();
	});	

}
})(jQuery);

