var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/book');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection Successful!");
    var RegSchema = mongoose.Schema({
      name: String,
      price: String,
      quantity: String
    });
    var Book = mongoose.model('Reg', RegSchema, 'Registration');
    var book1 = new Book({ product_name: 'princess sara', 
			price:350, 
			quantity:2,
			 });
    book1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to bookstore collection.");
    }); 
}); 
