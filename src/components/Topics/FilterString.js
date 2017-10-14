import React, {Component} from "react"

class FilterString extends Component {
    constructor(){

        super()
        this.state = {
        unfilteredArray: ['James','Jessica','Melody','Tyler','Blake','Jennifer','Mark','Maddy'],
        userInput: "",
        filteredArray: []


        }
    }

    handleState(val){
        this.setState({userInput: val})
    }

    filterMethod(userInput) {
        var unfiltered = this.state.unfilteredArray
        var newArr = [];

        for(var i=0;i<unfiltered.length;i++){
            if (unfiltered[i].toLowerCase().includes(userInput.toLowerCase())){
                newArr.push(unfiltered[i])
            }
        }
        this.setState({filteredArray: newArr})
    }


    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText" > Original: { JSON.stringify(this.state.unfilteredArray) }</span>
                <input className="inputLine" onChange={(e)=> this.handleState(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.filterMethod(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}
export default FilterString