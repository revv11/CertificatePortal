const readXlsxFile = require("read-excel-file/node")



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