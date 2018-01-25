import React from "react";
import {Student} from "./Student.js";
import {Teacher} from "./Teacher.js";
import RenderDOM from "react-dom";

export default class College extends React.Component{
    render(){
        return(
            <div>
                <Teacher name="Vishal" subject="OOPS" dep="I.T."/>
                <Student name="Parth" age="21" dep="I.T." rollnumber="RN123"/>
            </div>
        );  
    };
};
RenderDOM.render( < College / > , document.getElementById("root"));