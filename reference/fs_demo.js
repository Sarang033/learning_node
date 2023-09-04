const fs = require('fs');
const path= require('path')

// Create folder on our system

// fs.mkdir(path.join(__dirname, '/About'),{}, err =>{
//     if(err) throw err;
//     console.log('Folder created.....')
// })

// Create and write into a file

// fs.writeFile(path.join(__dirname,'/About','about.txt'),'hi my name is Sarang Sharma', err=>{
//     if(err) throw err;
//     console.log("File created and written to");
// })

fs.readFile(path.join(__dirname,'/About','01_conditionals.py'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})