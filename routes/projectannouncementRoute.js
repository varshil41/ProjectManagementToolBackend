var express = require('express');
var announce = require('../Models/ProjectAnnouncementModel');
var router = express.Router();

router.post('/',(req,res)=>{
    announce.addprojectannouncement(req.body,(err,rows)=>{
       if(err){
           res.json(err);
       }
       else{
           res.json(rows);
       }
   })
})

router.get('',(req,res)=>{
    announce.getAllprojectAnnoucement((err,rows)=>{
       if(err){
           res.json(err);
       }
       else{
           res.json(rows);
       }
   })
})

router.get('/:empid',(req,res)=>{
    announce.getAnnounceByProjectByEmpId(req.params.empid,(err,rows)=>{
       if(err){
           res.json(err);
       }
       else{
           res.json(rows);
       }
   })
})

router.delete('/:id',(req,res)=>{
    announce.deleteAnnouncement(req.params.id,(err,rows)=>{
       if(err){
           res.json(err);
       }
       else{
           res.json(rows);
       }
   })
})

router.put('/',(req,res)=>{
    announce.updateAnnouncement(req.body,(err,rows)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})

module.exports = router;