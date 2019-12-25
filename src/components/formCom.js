import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
class Form extends Component 
{
    constructor(props) {
      super(props);
      this.state = {};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      console.log("event : --->",event.target)
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.setState({});
      //ReactDOM.findDOMNode(this.refs.myInput).focus()
      // let user = this.state
        this.props.history.push('/topics',this.state)
      // axios.post(`http://localhost:3000/about`, { user })
      // .then(res => {
      //   alert(JSON.stringify(res.data,null,5))
      //   console.log(res.data);
      // })
  }
    optionsList = ()=>{
      return ["mango","coconut","lime","grapefruit"].map((ele)=>{
        return <option value ={ele}>{ele}</option> 
      })
    }
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            first:
            <div><input type="text" name = "first" value={this.state.value} onChange={this.handleChange} ref = "myInput"></input></div>
            last:
            <div><input type="text" name = "last" value={this.state.value} onChange={this.handleChange} /></div>
            <select name="options" value={this.state.value} onChange={this.handleChange}>
              {this.optionsList()}
          </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{JSON.stringify(this.state)}</h1>
        </div>
      )
    }
}
export default withRouter(Form)