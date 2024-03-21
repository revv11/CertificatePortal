const express = require("express")
const Routes = require("./Routes/Routes")


const app = express();


app.use(express.json());

app.listen(4000, ()=>{
    console.log("listening on port 4000")
})

app.use(Routes)