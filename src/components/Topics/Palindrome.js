import React, {Component} from "react"

class Palindrome extends Component {
    constructor(){

        super()
        this.state = {
        palindrom: "",
        userInput: "",

        }
    }

    handleState(val){
        this.setState({userInput: val})
    }

    filterMethod(userInput) {
        var backWord = userInput.split("").reverse().join("").toLowerCase();
        var result;
        if(backWord === userInput.toLowerCase()){
            result = "YES"
        }
        else result= 'NO'
        this.setState({palindrom: result})
    }


    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Is it a Palindrome?!</h4>
                <span className="puzzleText" > Original: { JSON.stringify(this.state.unfilteredArray) }</span>
                <input className="inputLine" onChange={(e)=> this.handleState(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.filterMethod(this.state.userInput)}>Palindrome?</button>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.palindrom) }</span>
            </div>
        )
    }
}

export default Palindrome