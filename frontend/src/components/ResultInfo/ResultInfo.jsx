import React ,{useEffect, useState} from "react";
import {useParams} from 'react-router-dom'

const ResultInfo = (props) =>{
    const [marks, setMarks] = useState("");
    const [rank , setRank] = useState("");
    const [nmarks, setNmarks] = useState("")
    const [pmarks, setPmarks] = useState("")
    const [name, setName] = useState("")
    useEffect(() => {
        
        const sendData = async () => {
          try {
            const response = await fetch('/ResultDisplay', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
              },
              body: JSON.stringify({
                email: props.email
              }),
            });
            const data = await response.json();
            
            setMarks(data.marks);
            setRank(data.rank);
            setNmarks(data.nmarks);
            setPmarks(data.pmarks);
            setName(data.name);

            
            
          } 
          catch (error) {
            console.error('Error sending data:', error.message);
            // Handle error
          }
        };
    
        sendData(); // Call the function to send the POST request
      }, []);

    return(
        <div className="resultinfo">
        
        <h1>Name: {name}</h1>
        <h1>Marks: {marks}</h1>
        <h1>Rank: {rank}</h1>
        <h1>Positive Marks: {pmarks}</h1>
        <h1>Negative Marks: {nmarks}</h1>
        </div>
    )
}

export default ResultInfo;