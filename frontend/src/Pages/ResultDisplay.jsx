import React ,{useEffect, useState} from "react";
import ResultInfo from "../components/ResultInfo/ResultInfo";
import { useParams } from "react-router-dom";


const ResultDisplay =  ()=>{
    const {id} = useParams()
    return(
      <div className="resultdisplay">
        <ResultInfo email = {id} />
      </div>
    )
}

export default ResultDisplay;