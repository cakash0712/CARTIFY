import React from "react"





class Bio extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message:"Intial message",
            count:0
        }

    }

    static getDerivedStateFromProps(props,state){
        if(props.initialmessage && props.initialmessage !==state.message){
            return{
                message:props.initialmessage
            }
        }
        return null
    }

   componentDidMount(){
    this.interval=setInterval(()=>{
        this.setState((prevstate)=>({
            count:prevstate.count+1
        }))
    },1000)
   }

   shouldComponentUpdate(nextprops,nextstate){
    if(this.state.count !== nextstate.count){
        return true
    }
    return false
   }

   getSnapshotBeforeUpdate(prevprops,prevstate){
    if(prevstate.count !==this.state.count){
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
    return(
        <div>
            <h1>{this.state.message}</h1>
            <p>count:{this.state.count}</p>
            <button onClick={this.changed}>message updated</button>
        </div>
    )
   }


   changed=()=>{
    this.setState({
        message:"message updated"
    })
   }
     

}


export default Bio