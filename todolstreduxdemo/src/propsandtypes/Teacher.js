import React from "react";

export const Teacher = (props)=>{
    
    return(
            <div style={{border: '1px solid grey'}}>
                <div>
					<h1 style={{color:'red'}}> Teachers details </h1>
					<ul>
						<li>
							<b>Name :</b>  {props.name}
						</li>
						<li>
							<b>Subject :</b>  {props.subject}
						</li>
                        <li>
							<b>Depart :</b>  {props.dep}
                        </li>
                 	</ul>
				</div>
            </div>
        );
};