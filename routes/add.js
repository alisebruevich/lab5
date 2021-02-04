var data = require("../data.json");

exports.addFriend = function(request, response) { 
	// Your code goes here
  var n = request.query.name;
  var d = request.query.description;
  var newFriend = {
    "name": n,
    "description": d,
    "imageURL": "https://picsum.photos/id/1003/1181/1772"
  };
  data.friends.push(newFriend);
 }
