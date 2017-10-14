import React, {Component} from "react"

class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray:[],
            userInput: ""
        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    assignEvenAndOdds(userInput){
                    var holder = userInput.split(",");
                    var evens = [];
                    var odds = [];

                 for (var i=0; i<holder.length; i++){
                     holder[i]=parseInt(holder[i]);
                     if (holder[i] % 2 === 0) {
                       evens.push(holder[i]);
                     } else if (holder[i] % 2 !== 0 && !isNaN(holder[i])){
                       odds.push(holder[i]);
                     }
                  }
                  this.setState({ evenArray: evens, oddArray: odds});
                  }

    // sep (userInput){
    //     let evens = [];
    //     let odds = [];

       
    //     this.setState({evenArray: evens,oddArray: odds})
    // }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <input className="inputLine" onChange={(e)=> this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.assignEvenAndOdds(this.state.userInput)}>Split</button>
                <span className="resultsBox">{JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">{JSON.stringify(this.state.oddArray)}</span>
                <h4>Evens and Odds</h4>
            </div>
        )
    }
}

export default EvenAndOdd;