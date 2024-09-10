const fs=require('fs');


if(!fs.existsSync('./new')){ //first checking if the directory does not exist then create it 
fs.mkdir('./new',(err)=>{
    if(err)  throw err;
    console.log('Directory created');
})

}



// fs.mkdir('./new',(err)=>{  //creating a new directory mkdir->make directory 
//     if(err)  throw err;
//     console.log('Directory created');
// })

// deleting the existing  directory

if(fs.existsSync('./new')){ //first checking if the directory  exist if it does  then delete or remove it rmdir->remove dir

    fs.rmdir('./new',(err)=>{
        if(err)  throw err;
        console.log('Directory removed');
    })
    
    }



