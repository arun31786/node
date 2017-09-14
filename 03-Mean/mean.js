var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

MongoClient.connect("mongodb://localhost:27017/dbName", function (err, db) {
    if (err) {
        console.log("db connection error");
    }
    console.log("We are connected");
    
    app.listen(3000, '127.0.0.1', function(){
    console.log("Server is running at 3000");
		
        app.get('/abc', function(req, res){
            db.collection('myCollection').find().toArray(function(err, result){
                if (err) return console.log(err)
                var panelData = result
                
                res.send(panelData)
            })
        });


    
    app.post('/create', function (req, res) {
        console.log('in hello request');
        console.log(req.body);
        var collection = db.collection('ticket');
		var ticket = {
			'type': req.body.type,
			'date': req.body.date,
			'description': req.body.desc,
			'summary': req.body.summary
		};

    	collection.insert(ticket, function (err, result) {
			if (err) {
				console.log("ticket save error");
				res.send({success: false})
			} else {
				res.send({success: true})
            }
		});
    });
	
	app.put('/ThumbEdit', function(req, res){
  	db.collection('myCollection').findOneAndUpdate({title: req.body.search}, {
    $set: {
      title: req.body.editedTitle,
      summary: req.body.editedSummary,
      severity: req.body.editedSeverity
    }
  }/*, {
    sort: {_id: -1},
    upsert: true
  }*/, function(err, result){
    if (err) return console.log(err)
      console.log('Update done')
	 res.send({success: false})
  })
});
        
        app.delete('/ThumbDelete', function(req, res){
            db.collection('myCollection').findOneAndDelete({title: req.body.searchme},
                function(err, result){
                if (err) return console.log(err)
                console.log('Deleted!!!!')
                res.redirect('/')
            })

})
        
});

});




