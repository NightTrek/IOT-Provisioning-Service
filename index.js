const express   = require('express');
const cors      = require('cors');
const fs        = require('fs');


const app       = express();


// Middlewares setup
// app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());//

// If we are in production serve our clients build  folder//
// This folder is created during production only
// if(process.env.NODE_ENV === 'production') {
  
// }
app.use(express.static('public'));
app.post('/vpn/conf', (req,res) => {
    if(req.body.DID){
        try{
            let vpnConfigFile = fs.readFileSync(`./ovpn/${req.body.DID}_san_jose_Ca.ovpn`, )
        }catch(err){
            console.log(err);
            res.status(500).send(err);
        }
    }
})
// Routes setup
// const routes = require('./routes');
// app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
