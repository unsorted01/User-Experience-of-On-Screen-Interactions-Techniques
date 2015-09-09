module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // frontend routes =========================================================
  // route to handle all angular requests


  app.get('*', function(req, res) {
    var x=Math.floor((Math.random() * 12) + 1);
    if (x==1) {res.sendfile('./public/views/click/click.html');};
    if (x==2) {res.sendfile('./public/views/hover/hover.html');};
    if (x==3) {res.sendfile('./public/views/drag/drag.html');};
    if (x==4) {res.sendfile('./public/views/slider/slider.html');};
    if (x==5) {res.sendfile('./public/views/zoom/zoom.html');};
    if (x==6) {res.sendfile('./public/views/carouzel/carouzel.html');};
    if (x==7) {res.sendfile('./public/views/click_an/click.html');};
    if (x==8) {res.sendfile('./public/views/hover_an/hover.html');};
    if (x==9) {res.sendfile('./public/views/drag_an/drag.html');};
    if (x==10) {res.sendfile('./public/views/slider_an/slider.html');};
    if (x==11) {res.sendfile('./public/views/zoom_an/zoom.html');};
    if (x==12) {res.sendfile('./public/views/carouzel_an/carouzel.html');};
  });

};
