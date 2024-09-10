const fsPromises=require('fs').promises;
const path=require('path');


const fileOps=async()=>{
    try{
        const data=await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8')
        console.log(data);

        await fsPromises.unlink(path.join(__dirname,'files','starter.txt')); //unlink is used to delete the file usonf fsPromises

        await fsPromises.writeFile(path.join(__dirname,'files','promisewrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'files','promisewrite.txt'),'\n\n Nice to meet you');

        await fsPromises.rename(path.join(__dirname,'files','promisewrite.txt'),path.join(__dirname,'files','promiseComplete.txt'));

        const newdata=await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf8')
        console.log(newdata);

    }
    catch(err){
        console.log(err);
    }
}

fileOps();


//how to read  a file in nodejs
/*fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{ //instead pf using this we can also use path directly

    //fs.readFile('./files/starter.txt','utf8',(err,data)=>{ //instead pf using this we can also use path directly
    //asybchronous fashion of nodejs    await
    //it will first execute the statements which are not the file operations one.
    //or we can say that first it will execute the statements other than the file opeartions after that
    //it will excute the file operations.

    if(err)  throw err;
    console.log(data); //this will output the buffer data
    //we can use toString to convert the buffer data into the string so it is readable by the user.

   // console.log(data.toString());
    //we can also use the parameter 'utf8' with (err,data) it will directly convert buffer data into string
    //and will produce the output as string which can be read by the user.
})*/


//console.log('Hello')

/*fs.writeFile(path.join(__dirname,'files','reply.txt',),'Nice to meet you',(err)=>{

    if(err)  throw err;
    console.log('write completed')
})
//how to append or update a file in nodejs

fs.appendFile(path.join(__dirname,'files','appendedfile.txt',),'successfully appended the file using fs.appendFile',(err)=>{

    if(err)  throw err;
    console.log('append  completed')
})

//in order to update or modify an existing file we can use appendFile method inside the writeFile method which we want to modify
fs.writeFile(path.join(__dirname,'files','reply.txt',),'Nice to meet you',(err)=>{

    if(err)  throw err;
    console.log('write completed');

    fs.appendFile(path.join(__dirname,'files','reply.txt',),'\n\n Yes it has been modified',(err)=>{

        if(err)  throw err;
        console.log('append  completed');


        fs.rename(path.join(__dirname,'files','reply.txt',),path.join(__dirname,'files','newreply.txt',),(err)=>{

            if(err)  throw err;
            console.log('rename  completed');
        })
    })
})*/







// exit on uncaught errors
//process.on()