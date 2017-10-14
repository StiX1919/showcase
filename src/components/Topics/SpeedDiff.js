import React, {Component} from "react"

class SpeedDiff extends Component {
    constructor(){

        super()
        this.state = {
        total: "Time to catch up. Hours,Minutes,Seconds",
        userInput1: "First but slow",
        userInput2: "Last but fast",
        userInput3: "How far between"

        }
    }

    handleState1(val){
        this.setState({userInput1: val})
    }
    handleState2(val){
        this.setState({userInput2: val})
    }
    handleState3(val){
        this.setState({userInput3: val})
    }

    catchUp(userInput1,userInput2,userInput3) {
        let time=userInput3/(userInput2-userInput1);
        var sum = userInput2>userInput1 ? [(Math.floor(time)),(Math.floor(time*60%60)),(Math.floor(time*3600%60))] : null;
        this.setState({total:sum})
    }
    


    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>How much time to catch up?</h4>
                <input className="inputLine" onChange={(e)=> this.handleState1(e.target.value)} placeholder="Slower Speed: Num"></input>
                <input className="inputLine" onChange={(e)=> this.handleState2(e.target.value)} placeholder="Faster Speed: Num"></input>
                <input className="inputLine" onChange={(e)=> this.handleState3(e.target.value)} placeholder="Distance between"></input>
                <button className="confirmationButton" onClick={()=>this.catchUp(this.state.userInput1, this.state.userInput2,this.state.userInput3)}>When will he catch up?</button>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.total) }</span>
            </div>
        )
    }
}

export default SpeedDiff