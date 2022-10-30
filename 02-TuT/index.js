// const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async ()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data, ' from read promise');
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nAppend nice to meet you!')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData);
    }
    catch(err){console.error(err)}
}
fileOps()




/*
//console.log('i am index read')
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8' ,(err, data) =>{
    if(err) throw err;
    console.log(data, ' read complete');
})
console.log('i am index write')
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'writing Nice to meet you.', (err) =>{
    if(err) throw err;
    console.log('write complete');
    //console.log('i am index append')
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), ' appending new text.', (err) =>{
        if(err) throw err;
        console.log('Append complete');
        //console.log('i am index rename')
        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'renameAppend.txt'), (err) =>{
            if(err) throw err;
            console.log('Rename complete');
        })
    })
})
*/





//exit on uncaught errors
process.on('uncaughtException', err=>{
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})