import React ,{useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import './Resultsprompt.css'






const Resultsprompt =  ()=>{
    
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [error , setError] = useState("")

    const submit = async (e)=>{
        e.preventDefault()
        
        try{
            const res = await fetch('/results',{
                method: 'POST',
                body: JSON.stringify({email, name}),
                headers : {'Content-Type': 'application/json'}
            });
            const data = await res.json();
            console.log(data)
            if(data.user){
                navigate(`/Resultdisplay/${data.user}`)
            }
            if (data.error){
                setError(data.error);
            }
            
        }
        catch(err){
            console.log(err)
        }
        
        
    }
    



    
    

    return(
        <div className="resultsprompt">
        <h1>RESULTS</h1>
            <form method="POST">

            <div className="input-group">
                <input type="text"  required onChange={(e)=>{setEmail(e.target.value)}}></input>
                <label className="l1" htmlFor="">Email Address</label>
                
            </div>
            <div className="input-group">
                <input type = "name" required onChange={(e)=>{setName(e.target.value)}}></input>
                <label className="l2">Name</label>
            </div>
            <p>{error}</p>
            <input className="btn" type="submit" onClick={submit}></input>
            </form>
        </div>
    )
}
export default Resultsprompt;