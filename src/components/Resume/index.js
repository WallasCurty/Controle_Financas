import React from "react";
import ResumeItens from "../ResumeItens";
import * as C from "./style";
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from "react-icons/fa"


const Resume = ({income, expense, total}) =>{
    return (
        <C.Conteiner>
            <ResumeItens title = "Entradas" Icon = {FaRegArrowAltCircleUp} value={income}/>
            <ResumeItens title = "Saida" Icon = {FaRegArrowAltCircleDown} value={expense}/>
            <ResumeItens title = "Total" Icon = {FaDollarSign} value={total}/>
        </C.Conteiner>
    );
};
 export default Resume;