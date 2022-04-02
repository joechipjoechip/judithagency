var express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
// //   res.send('hello world');
// 	console.log("here the / -> req : ", req.originalUrl);

// 	res.redirect('index.html');
// });

// The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){

	console.log("here the * -> req : ", req.originalUrl);

	// console.log("res : ", res);

	// res.redirect(`/?${req.originalUrl.replace("/", "")}`);
	// res.redirect(req.originalUrl + ".html");
	res.redirect("/");

});

app.listen(3000, "127.0.0.1");