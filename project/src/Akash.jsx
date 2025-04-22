import React from "react";




class Akash extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message:"intial message",
            count:0
        }
    }

static getDerivedStateFromProps(props,state){
    if(props.intialmessage && props.intialmessage !== state.message){
        return{
            message:props.intialmessage
        }

        
    }
    return null
}


componentDidMount(){
    this.interval=setInterval(()=>{
        this.setState=((prevstate)=>({
            count:prevstate.count+1
        }))
    },1000)
}

 shouldComponentUpdate(nextprops,nextstate){
    if(this.state.count!==nextstate.count){
        return true
    }
    return false
 }

  getSnapshotBeforeUpdate(prevprops,prevstate){
    if(prevstate.count!==this.state.count){
        return `count changed from ${prevstate} to ${this.state.count}`
    }
    return null
  }

  componentDidUpdate(prevprops,prevstate,snapshot){
    if(snapshot){
        console.log("snapshot:",snapshot)
    }
  }
  componentWillUnmount(){
    clearInterval=(this.interval)
  }


  render(){
    <div>
        <h1>{this.state.message}</h1>
        <p>counnt:{this.state.count}</p>
        <button onClick={this.updated}>message updated</button>
    </div>
  }
  
  updated=()=>{
    this.setState({
        message:"message updated"
    })
  }

    
}

    export default Akash