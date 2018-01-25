import React from "react";


export class Student extends React.Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.age = props.age;
        this.dep = props.dep;
        this.rollnumber = props.rollnumber;
        
        this.handleClickEvent = this.handleClickEvent.bind(this);
    }
    
    handleClickEvent(){
        this.name = "Satish";
        this.age = "23";
        this.dep = "Computer";
        this.rollnumber = "C234";
    }
    
    render(){
        return(
                <div style={{border: '1px solid grey'}}>
                    <div>
                        <h1 style={{color:'red'}}> Students details </h1>
                        <ul>
                            <li>
                                <b>Name :</b>  {this.name}
                            </li>
                            <li>
                                <b>Age :</b>  {this.age}
                            </li>
                            <li>
                                <b>Depart :</b>  {this.dep}
                            </li>
                            <li>
                                <b>Role No. :</b>  {this.rollnumber}
                            </li>
                        </ul>
                        <button onClick={this.handleClickEvent} >Update</button>
                    </div>
                </div>
            );
    }
}

