const express = require ('express');
const mongoose = require("mongoose");
const router = express.Router();
const cors = require('cors');
const Routes = require('./Routes/routes.js');
require('./models/dbConfig.js');

const app = express();
bodyParser = require('body-parser');



//mongoose.set('useFindAndModify', false);


app.use(bodyParser.json());
app.use(cors());
app.use('/',Routes);

app.listen(8080, () => console.log('Server started: 8080'));






/*const  port = process.env.PORT ||3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const ObjectID = require('mongoose').Types.ObjectId;

const { MusicModel } = require('./models/MusicModel.js');

router.get('/post', (req, res) => {
  MusicModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  })
});


//mongoose.connect('mongodb://localhost:27017/NLPLAY')

//var MusicSchema = mongoose.Schema;

//var Music = mongoose.model('Music',MusicSchema);


 //'Music');  collection name





//start listening on port 8080
app.listen(8080, () => console.log('Server Started: 8080'));

//MIDDLEWARES
app.use('/post',() => {
    console.log('middle est la');
});

//ROUTES
/*app.get('/',(req,res)=>{
  res.send('on est al'); 
});

app.get('/post',(req,res)=>{
    res.send('on est post'); 
  }); 

/*router.get('/',(req,res)=>{
  Music.find((err,docs) => {
    console.log
  })
})*/

//