import React, {Component} from "react"

class Sum extends Component {
    constructor(){

        super()
        this.state = {
        total: 0,
        userInput1: 0,
        userInput2: 0

        }
    }

    handleState1(val){
        this.setState({userInput1: val})
    }
    handleState2(val){
        this.setState({userInput2: val})
    }

    sumMethod(userInput1,userInput2) {
        var num1 = parseInt(userInput1,10)
        var num2 = parseInt(userInput2,10)
        if(num1 !== isNaN || num2 !== isNaN){
            var result = num1 + num2
        this.setState({total: result})
        }else{
            this.setState({total: "That one isn't a number silly."})
        }
    }


    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Plussing things</h4>
                <input className="inputLine" onChange={(e)=> this.handleState1(e.target.value)}></input>
                <input className="inputLine" onChange={(e)=> this.handleState2(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.sumMethod(this.state.userInput1, this.state.userInput2)}>Add them together</button>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.total) }</span>
            </div>
        )
    }
}

export default Sum