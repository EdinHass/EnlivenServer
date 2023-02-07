const StreamChat = require('stream-chat').StreamChat;
const express = require('express')
const app = express()
const port = 3000

const api_key = 'efvau2adu3pn'
const api_secret = 'bqqf5s7c2wch3kqprybv8yb9c72b2sgftzh9p9kxt7srq85mq36fntgpnh5k35kh'

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
