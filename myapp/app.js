const express =require('express');
var path = require('path');
const port = 8080;
const app = express();
const res =require('http');
var mysql =require('mysql');
const fileupload =require('express-fileupload');
const { name } = require('ejs');
var uploadPath;
var file;
var result,result1;
var dirname;
var files;
var test;
var fs =require('fs');
const filetype =require('file-type')

app.use(express.static("public"));


app.set('views','./views');
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    var user ="forum"
    res.render('index', { title: user});
});


//upload files//
const fileUpload = require('express-fileupload');
app.use(fileUpload());

app.post('/upload',function(req,res){
    var name =req.files.upload.name;
   var size = req.files.upload.size;
   var images= [name,size]
    //res.send(images);
    var connexion = mysql.createConnection({
        host:'www3.futaie.org',
        user:'fabrea',
        password:'quahroh4pait',
        database:'fabrea',
        port:'3307'
    });
    connexion.connect(function(err){
        if(err) throw err;
        console.log("connected");
        var sql = "INSERT INTO fichierNodeJS (nomFichier,taille)VALUES ?";
        var values =[
            [name,size]
        ]; 
        connexion.query(sql,[values],function(err,result){
            if(err) throw err;
            console.log(result.affectedRows);
        })
    });
   
    file = req.files.upload;
    nameFile =file.name;
    dirname =__dirname;
    uploadPath =__dirname + '/public/upload/upload'+ file.name;
    file.mv(uploadPath,function(err){
        if(err){
            return res.status(500).send(err)
        }
    });
  
    
})

//app.use('public/upload',express.static(__dirname+path.join('public/upload')));
//connexion sql//
app.get('/fichier',function(req,res){
    
    var connexion = mysql.createConnection({
        host:'www3.futaie.org',
        user:'fabrea',
        password:'quahroh4pait',
        database:'fabrea',
        port:'3307'
    });
    
    connexion.connect(function(err){
        if(err) throw err;
        //console.log("connected");
        var select ="SELECT nomFichier FROM fichierNodeJS";
        connexion.query(select,function(err,result,fields){
            if (err) throw err;
            console.log("data selected");
            result1 =result[3].nomFichier;
            
           
           
            
        })
    });
    var folder ='public/upload';
    fs.readdir(folder,function(err,files){
        files.forEach(file1=>{
             test =file1;
             
           
        })
        //changer dirname pour le probleme de telechargement//
    })
    console.log(result)
    res.render('pages/fichier',{result1:result1,dirname:dirname,test:test});
   
    
    
})

  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
