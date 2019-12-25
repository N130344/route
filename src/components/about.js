import React,{Component} from 'react';
import axios from 'axios';
import Form from './formCom'

export class About extends Component{
  state = {
    persons:[]
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/about`)
      .then(res => {
        alert("data",res.data)
        const persons = res.data;
        this.setState({persons});
      })
  }

  render() {
    return (
      <ul>
         <div>
        <h2>-- About --</h2>
        </div>
        <Form/>
        { this.state.persons.map(person => <li>{person}</li>)}
      </ul>
    )
  }

 
}
export default About;