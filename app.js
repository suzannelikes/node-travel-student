var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	

	console.log("Travel application is running!");

	var myName = "Suzanne";
	app.get("/", function (req, resp) {
    resp.render("index", {"name":myName });
	});
    
  app.get("/travel",function(req, resp) {
    db.findArray({}, function(results) {
      var params = {
        "places": results
      }
      resp.render("travel", params);
    });
  });
  
  app.get("/travel/rating/:rating",function(req, resp) {
    var rating = parseInt(req.params.rating);
    var params = {
      "rating" : rating
    }
    db.findArray(params, function(results) {
      var params = {
        "places": results
      }
      resp.render("travel", params);
    });
  });
    
    
});