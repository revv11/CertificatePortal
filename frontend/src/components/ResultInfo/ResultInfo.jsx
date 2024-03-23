import React ,{useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import "./ResultInfo.css"
import negative from "../../Assets/negative.png"
import positive from "../../Assets/positive.png"
import rankico from '../../Assets/rank.png'
import nameico from '../../Assets/user.png'
import total from '../../Assets/total.png'


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
      <div className="resultinfowhole">

        <div className="resultinfo">
          <div className="name box">
            <img src={nameico} className="nameico"></img>
            <h1>Name: {name}</h1>
          </div>
          <div className="marks box">
            <img src={total} className="marksico"></img>
           <h1>Marks: {marks}</h1>
          </div>
        
        <div className="pmarks box">
        <img src= {positive} className="positive"></img>
        <h1>Positive Marks: {pmarks}</h1>
        </div>
        <div className="nmarks box">
        <img src={negative} className="negative"></img>
        <h1>Negative Marks: {nmarks}</h1>

        </div>
     
        <div className="rank box">

        <img src={rankico} className="rank" alt="" />
        <h1>Rank: {rank}</h1>
        </div>
        </div>
        <a href={`http://localhost:4000/generatecertificate/${name}`}><button>Certificate</button></a>
      </div>
    )
}

export default ResultInfo;