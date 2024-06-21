import React,{Component} from 'react'

class ComponentB extends Component{
  constructor(){
    super()
    this.state = {
        name:'',
        email:'',
        phone:''
    }
  }
  handleUpdate = () => {
    this.props.updateDetails(this.state.name, this.state.email, this.state.phone)
    this.setState({
        name:'',
        email:'',
        phone:''
    })
  }

  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({[name]:value})
  }
  render(){
    return(
        <>  
          name:<input name="name" value={this.state.name} onChange={this.handleChange}/>
          email:<input name="email" value={this.state.email} onChange={this.handleChange}/>
          phone:<input name="phone" value={this.state.phone} onChange={this.handleChange}/>

          <button onClick={this.handleUpdate}>submit</button>
        </>
    )
  }
}

export default ComponentB