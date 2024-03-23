const readXlsxFile = require("read-excel-file/node")
const puppeteer = require("puppeteer")
const path = require('path')



const schema = {
    Name: {
        prop: 'name',
        type: String
    },
    'Email Address': {
        prop: "email",
        type: String
    },
    "Marks": {
        prop: "marks",
        type: Number
    } ,
    "Positive Marks":{
        prop: 'pmarks',
        type: Number,
    },
    "Negitive Marks": {
        prop : 'nmarks',
        type : Number,
    },
    "Rank":{
        prop: "rank",
        type: Number,
    }
}

module.exports.results_post = async (req,res)=>{
    const {email , name} = req.body;
    let result = {};
    
   try{

       const sheet_data = await readXlsxFile("./data/data.xlsx", {schema, sheet: 'Sheet1'})
       const data = sheet_data.rows
       
       for(var i = 0 ; i<data.length; i++){
           
           if(data[i].email === email){
            if(data[i].name===name){

                result = {user: data[i].email}
            }  
           
           }

           
       }
       if(result.user){
        res.status(201).json(result)
       }
       else{
        
           res.status(201).json({error: 'invalid credentials'})
       }

   } 
   catch(err){
    res.status(400).json({error: err})
   }
}//

module.exports.resultDisplay_post = async (req,res)=>{
    const {email} = req.body;
    
    try{

        const sheet_data = await readXlsxFile("./data/data.xlsx", {schema, sheet: 'Sheet1'})
        const data = sheet_data.rows
        for(var i = 0 ; i<4; i++){
            
            if(data[i].email === email){
                
                res.status(201).json({email: data[i].email, name: data[i].name , marks: data[i].marks, nmarks:data[i].nmarks, pmarks: data[i].pmarks, rank: data[i].rank});
                
            }
           
        }
    } 
    catch(err){
     res.status(400).json({error: err})
    }
    
}

module.exports.certificate_get = (req,res)=>{
    res.render('certificate', {name: req.params.name})
}
//
module.exports.generatecertificate = async (req,res) =>{
    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`${req.protocol}://${req.get('host')}`+`/certificate/${req.params.name}`,{
            waitUntil: "networkidle2"
        });
        page.setViewport({width:1680, height:1050});
        const date = new Date()
        const pdf = await page.pdf({
            path: `${path.join(__dirname, '../Public/files', date.getTime()+".pdf" )}`,
            format:"A3"
        });

        await browser.close();

        const pdfURL = path.join(__dirname, '../Public/files', date.getTime()+".pdf" )

        // res.set({
        //     "Content-Type": "application/pdf",
        //     "Content-Length": pdf.length
        // });
        // res.sendFile(pdfURL);
        res.download(pdfURL, function(err){
            if (err){

                console.log(err)
            }
        })
    }
    catch(err){
        console.log(err)
    }
}