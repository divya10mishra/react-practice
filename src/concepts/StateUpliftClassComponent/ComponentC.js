import React,{Component} from 'react'

class ComponentC extends Component{
      render(){
        return(
            <>
            <div>name:{this.props.name}</div>
            <div>email:{this.props.email}</div>
            <div>phone:{this.props.phone}</div>
            </>
        )
    }
}

export default ComponentC