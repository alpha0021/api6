const express = require('express');
const router = express.Router();
const Police = require('../models/police');

//get a list of police from the  database

router.get('/polices',function(req,res,nest){
  Police.find({}).then(function(polices){
    res.send(polices);
  });
});


//add a new police

router.post('/polices',function(req,res,next){
  Police.create(req.body).then(function(police){
    res.send(police);
  }).catch(next);
});



//update a police

router.put('/polices/:id',function(req,res,next){
  Police.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    Police.findOne({_id:req.params.id}).then(function(police){
          res.send(police);
    });

  });
});

//delete one police  from  database


router.delete('/polices/:id',function(req,res,next){
  Police.findByIdAndRemove({_id:req.params.id}).then(function(police){
    res.send(police);
  });
});

module.exports = router;
