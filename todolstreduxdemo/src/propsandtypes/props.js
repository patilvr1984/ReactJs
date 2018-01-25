import React from "react";
import PropTypes from 'prop-types';

const Headline = (props) =>{
    return <h1>React {props.title} demo</h1>
}

const Greeting = (props) =>{
    return <p> Welcome {props.name}</p>
}

const ChangeProps = () =>{
       return( <div>
        <Headline title="111" />
        <Greeting name="asads" /></div>);
}
    

class Props extends React.Component{
	render(){
		return(
			<div >
                <table border='1'>
                    <tr>
                        <th>Result</th>
                        <th>Demo Inputs</th>
                        <th>Code</th>
                    </tr>
                    <tr>
                        <td>
                            <Headline title="props and types" />
                            <Greeting name="Vishal" />
                        </td>
                        <td>
                            Please hit the button to change the props values.   
                           
                        </td>
                        <td>
                          
                        </td>
                    </tr>
                </table>
        
			
			</div>
		);
	}
}

Greeting.propTypes = {
    name: PropTypes.string
}

export default Props;