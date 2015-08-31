/*
* Flux 3D Carousel
* Author: Dean Coulter
* Licensed under the MIT license
* 
* Version 0.1
*/

(function($){
  
$.fn.carousel3d = function(args){
  
  var screenHeight = screen.height;
if (screenHeight < 800) {
  $('body').css('zoom', 0.8);
} else {
     $('body').css('zoom', 1);
} 

	var el = ({
		carousel_frame: $(this)
	});

	var size = el.carousel_frame.children().size();	
	var panelSize = el.carousel_frame.width();
	var translateZ = Math.round( ( panelSize / 2 ) / Math.tan( Math.PI / size ) );

	el.carousel_frame.css({
		"transform": "rotateY(0deg) translateZ(-"+translateZ+"px)"
	})

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


  if(rotate_int==0)                                                       // if user select eurobasket_1987 image
   {    
    $("div").finish();                                                        // stop every running fade-in   
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();                                            
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // removes the class "clicked" in every item at the timeline
    $(".a").addClass('clicked');                                              // inserts the class "clicked" to the relative item at the timeline 
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
  }


  if((rotate_int==5)||(rotate_int==-1))                                    // if user select euro_2004 image
  { $("div").finish();                                                        // stop every running fade-in 
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();                                                // fade-in the relative image                                                  
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".b").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin   
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


  if((rotate_int==4)||(rotate_int==-2))                                    // if user select olympic_2004 image
  { $("div").finish();                                                        // stop every running fade-in 
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".c").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin   
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


  if((rotate_int==3)||(rotate_int==-3))                                    // if user select eurobasket_2005 image
  { $("div").finish();                                                        // stop every running fade-in 
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".d").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timeline  
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


  if((rotate_int==2)||(rotate_int==-4))                                    // if user select mundobasket_2006 image
  { $("div").finish();                                                        // stop every running fade-in 
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".e").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin
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


  if((rotate_int==1)||(rotate_int==-5))                                    // if user select mundial_2014 image
  { $("div").finish();                                                        // stop every running fade-in 
    $("#mytext").finish();
    $("#mytext").hide();                                                      // hide the previous text and images
    $("#mybutton").hide();
    $("#mytext").fadeIn(2000);                                                // fade-in the relative text
    $("#mybutton").show(2000);
    $("li").removeClass('clicked');                                           // remove the class "clicked" in every item at the timeline
    $(".f").addClass('clicked');                                              // insert the class "clicked" to the relative item at the timelin
    $("entity").empty();   
    $("#mybutton").attr("disabled", false); 
    document.getElementById("mybutton").style.backgroundColor = "#3cb0fd";
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
  }

  animate_slider();
	});	

}
})(jQuery);

