const express = require("express")
const Routes = require("./Routes/Routes")
const ejs  =  require("ejs")


const app = express();

app.use(express.static('Public'));
app.set("view engine", 'ejs')
app.set('views', './views')

app.use(express.json());


app.listen(4000, ()=>{
    console.log("listening on port 4000")
})

app.use(Routes)