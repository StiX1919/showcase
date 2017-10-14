import React, {Component} from "react"

class FilterObject extends Component {
    constructor(){

        super()
        this.state = {
        unfilteredArray: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
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
            if(unfiltered[i].hasOwnProperty(userInput)){
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
                <input className="inputLine" onChange={(e)=> this.handleState(e.target.value)} placeholder="What class are you looking for?"></input>
                <button className="confirmationButton" onClick={()=>this.filterMethod(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterObject