const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { MusicModel } = require('../models/MusicModel');

router.get('/', (req, res) => {
  MusicModel.find((err, docs) => {
    //console.log(docs);
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  })
})

/*router.post('/', (req, res) => {
  const newRecord = new MusicModel({
    author: req.body.author,
    message: req.body.message
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error creating new data : ' + err);
  })
});
// update
router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  const updateRecord = {
    author: req.body.author,
    message: req.body.message
  };

  MusicModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord},
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  )
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  MusicModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    })
});*/

module.exports = router; 