const express = require('express')
const fs = require('fs');
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors());
app.get('/products', (req, res) => {
    var json = fs.readFileSync('./list.json',"utf8",(err,content) =>{
        if (err) {
            console.log(err);
        } else {
            //JSON.parse(content);
            JSON.stringify(content.toString());
        }
    });
    console.log(json);
    res.send(json)
    

   // res.send(json);
    //res.send(JSON.stringify(data));

})
app.listen(port, () => console.log(`Example app listening on port port!`))
