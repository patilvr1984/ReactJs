import React from "react";
import axios from "axios";

class Restws extends React.Component{
    
    render(){
		return (
			<RestWSCode/>
		);
	}
}

class RestWSCode extends React.Component{
	render(){ 
           
            return(
			<div>
                <RestWSCodeExicutor/>
			</div>
		);
	};
}

class RestWSCodeExicutor extends React.Component{
	
    constructor(props) {
    super(props);
    
    this.state = {
      kind: '',
      data: []
    };
   }

  
  componentDidMount(){
    axios
      .get('http://localhost:8082/ReactDemo/emp/')
      .then(({ data })=> {
      	this.setState({ 
          data: data
        });
      })
      .catch((err)=> {})
  }
      
  render() {
	 const child = this.state.data.map((el, index) => {
      return <div   key={index}>
        <p>Name       = { el.name } and Department = { el.department }</p>
      </div>
    });

    return (    
                <div  >
                    <h2>Example of rest WS calling</h2>
                    Reslut  = {child}
                </div>
           );
    }
}

export default Restws;