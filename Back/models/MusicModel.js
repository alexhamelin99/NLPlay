const mongoose = require("mongoose");

const MusicModel = mongoose.model(
    "NLPLAY",
    {
      Id: {
        type: Number,
        required: false
      },
      song_name:{
        type:String,
        required:false
      },
      artist_name:{
        type:String,
        required:false
      },
      release_date:{
        type:Number,
        required:false
      },
      link:{
        type:String,
        required:false
      },
      lyrics:{
        type:String,
        required:false
      },
      topic_1:{
        type:Number,
        required:false
      },
      topic_2:{
        type:Number,
        required:false
      },
      topic_3:{
        type:Number,
        required:false
      },
      topic_4:{
        type:Number,
        required:false
      },
      topic_5:{
        type:Number,
        required:false
      },
      topic_6:{
        type:Number,
        required:false
      },
      lda_main_topic:{
        type:String,
        required:false
      },
      x:{
        type:Number,
        required:false
      },
      y:{
        type:Number,
        required:false
      },
    },
    "Music"
  );

  module.exports = {MusicModel};