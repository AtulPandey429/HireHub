let express=require('express');
let router =express.Router();
// model 
let Job =require('../models/job-DB.js');
const { name } = require('ejs');

// router.get('/',function(req,res){

// });
router.get('/',function(req,res){
    res.render('landing');
});

// index
router.get('/jobs', async function(req,res){
    // extract all the jobs from db
    try{
        let foundJobs = await Job.find({});
        res.render('index',{foundJobs});

    }catch (error){
        console.log('error while extraxting all jobs',error);
    }

});

// new
 router.get('/jobs/new',function(req,res){
    res.render('new');
 });

 // create
 router.post('/jobs',async function(req,res){
    // database work here
    try {
      
       let newJob = new Job({
          name:req.body.name,
          address:req.body.address,
          image:req.body.image
   
       });
       await newJob.save();
       res.redirect('/jobs');

    } catch (error) {
      console.log('error while adding a new  jobs',error);
   }
    
 });


 // show
 router.get('/jobs/:id',function(req,res){
    res.render('show');
 });

 // edit

 router.get('/jobs/:id/edit',function(req,res){
    res.render('edit');
 });

 // update

 router.patch('/jobs/:id',function(req,res){
    res.send('logic to update job');
 });

 // delete

 router.delete('/jobs/:id',function(req,res){
    res.send('logic to delete jobs');
 });


module.exports=router;