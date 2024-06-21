import React,{Component} from 'react'
import ComponentB from '../StateUpliftClassComponent/ComponentB'
import ComponentC from '../StateUpliftClassComponent/ComponentC'


class ComponentA extends Component{
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            phone:''
        }
    }

    updateDetails = (newName, newEmail, newPhone) => {
       this.setState({
        name:newName,
        email:newEmail,
        phone:newPhone
       })
    }
  render(){
    return(
        <>
          <ComponentB updateDetails={this.updateDetails}/>
          <ComponentC  name={this.state.name} email={this.state.email} phone={this.state.phone}/>
        </>
    )
  }
}

export default ComponentA