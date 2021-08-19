const restModel  = require("../models/rest.model")

const getRest =  (req, res) => {
    restModel.find({})
    .then(result =>{
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })


}



const deleteRest =  (req, res) => {
    restModel.deleteOne({_id:req.params.restId})
    .then(result =>{
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })


}

const addRest =  (req, res) => {
    const {
title,
address,
description,
image_url,
type
      } = req.body;
    
      // create the new cat 
      const newrestObj = new restModel({
        title: title,
        address: address,
        description: description,
        image_url:image_url,
        type:type
      });
      newrestObj.save();
    
      res.json(newrestObj);


    // restModel.deleteOne({_id:req.params.restId})
    // .then(result =>{
    //     res.status(200).json(result)
    // })
    // .catch(err => {
    //     res.status(500).json(err)
    // })


}


module.exports = {
    deleteRest,
    getRest,
    addRest,
  };
