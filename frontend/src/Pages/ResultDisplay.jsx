import React ,{useEffect, useState} from "react";
import ResultInfo from "../components/ResultInfo/ResultInfo";
import { useParams } from "react-router-dom";
import './CSS/ResultDisplay.css'


const ResultDisplay =  ()=>{
    const {id} = useParams()
    return(
      <div className="resultdisplay">
        <ResultInfo email = {id} />
        
      </div>
    )
}

export default ResultDisplay;