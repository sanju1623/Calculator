var express = require('express');
var router = express.Router();
var ejs=require('ejs');

function getInput(req,res)
{
   console.log("In getInput Function");
    ejs.renderFile('./views/out.ejs',function(err,result){
        // if it is success
         if(!err)
           {
                res.end(result);
           }
        //ERROR
        else
          {
             res.end("ERROR OCCURED ");
             console.log(err);
          }
    });
}

function add(req,res)
{
   console.log("In add Function");
   var first=parseFloat(req.param('first'));
   var second=parseFloat(req.param('second'));
   var answer=parseFloat(req.param('first'))+parseFloat(req.param('second'));
   var out=[first,second,answer]; 
   console.log(out);
   ejs.renderFile('./views/input.ejs',{data:out},function(err,result){
        // if it is success
         if(!err)
           {
                res.end(result);
           }
        //ERROR
        else
          {
             res.end("ERROR OCCURED ");
             console.log(err);
          }
    });
}



function subtract(req,res)
{
   console.log("In subtract Function");
   var first=parseFloat(req.param('first'));
   var second=parseFloat(req.param('second'));
   var answer=parseFloat(req.param('first'))-parseFloat(req.param('second'));
   var out=[first,second,answer]; 
   ejs.renderFile('./views/input.ejs',{data:out},function(err,result){
        // if it is success
         if(!err)
           {
                res.end(result);
           }
        //ERROR
        else
          {
             res.end("ERROR OCCURED ");
             console.log(err);
          }
    });
}


function divide(req,res)
{
   console.log("In divide Function");
   var first=parseFloat(req.param('first'));
   var second=parseFloat(req.param('second'));
   var answer=parseFloat(req.param('first'))/parseFloat(req.param('second'));
   var out=[first,second,answer]; 
   ejs.renderFile('./views/input.ejs',{data:out},function(err,result){
        // if it is success
         if(!err)
           {
                res.end(result);
           }
        //ERROR
        else
          {
             res.end("ERROR OCCURED ");
             console.log(err);
          }
    });
}



function multiply(req,res)
{
   console.log("In multiple Function");
   var first=parseFloat(req.param('first'));
   var second=parseFloat(req.param('second'));
   var answer=parseFloat(req.param('first'))*parseFloat(req.param('second'));
   var out=[first,second,answer]; 
   ejs.renderFile('./views/input.ejs',{data:out},function(err,result){
        // if it is success
         if(!err)
           {
                res.end(result);
           }
        //ERROR
        else
          {
             res.end("ERROR OCCURED ");
             console.log(err);
          }
    });
}



//
//function add(req, res){
//	var x=parseFloat(req.param("first"))+parseFloat(req.param("second"));
//	console.log(x);
//	res.send(JSON.stringify(x));
//}
//



exports.getInput=getInput;
exports.add=add;
exports.subtract=subtract;
exports.divide=divide;
exports.multiply=multiply;