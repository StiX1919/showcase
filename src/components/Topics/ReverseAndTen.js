import React, {Component} from "react"

class ReverseAndTen extends Component {
    constructor(){

        super()
        this.state = {
        newNums: "Backwards",
        finalNums: "+10",
        userInput: 0,

        }
    }

    handleState(val){
        this.setState({userInput: val})
    }
    

    revAndTen (userInput) {
        var revStr = userInput.split(",").reverse()
        var backNums = []
        for(var i=0;i<revStr.length;i++)(
            backNums.push(parseInt(revStr[i])),

            revStr[i]=parseInt(revStr[i]) +10
        )
        this.setState({newNums: backNums})
        this.setState({finalNums: revStr})
    }


    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Reverse numbers and add 10 to each</h4>
                <input className="inputLine" onChange={(e)=> this.handleState(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.revAndTen(this.state.userInput)}>Reverse away</button>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.newNums) }</span>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.finalNums) }</span>
            </div>
        )
    }
}

export default ReverseAndTen