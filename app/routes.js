module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
     app.get('/click', function(req, res) {
  res.sendfile('./public/views/click/click.html');
});
     app.get('/hover', function(req, res) {
  res.sendfile('./public/views/hover/hover.html');
});
     app.get('/drag', function(req, res) {
  res.sendfile('./public/views/drag/drag.html');
});
     app.get('/slider', function(req, res) {
  res.sendfile('./public/views/slider/slider.html');
});
     app.get('/zoom', function(req, res) {
  res.sendfile('./public/views/zoom/zoom.html');
});
     app.get('/carouzel', function(req, res) {
  res.sendfile('./public/views/carouzel/carouzel.html');
});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};