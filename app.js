const StreamChat = require('stream-chat').StreamChat;
const express = require('express')
const app = express()
const port = 3000

const api_key = 'dhha7wesgt7e'
const api_secret = 't4tpfnbru3vasevc6r2avyydn8wzxqecvnqd39gfqq57wcfy5fmcmsy8yaunbmes'

app.get('/token', (req, res) =>{
    if(req.query.user_id){
        const serverClient = StreamChat.getInstance(api_key, api_secret);
        const token = serverClient.createToken(req.query.user_id);
        res.send({token: token});
    }else{
        res.send({message: 'User ID Required'})
    }
})

app.listen(port, () => {
    console.log('App listening at http://localhost:${port}');
})
