import React, {Component} from "react"
import EvenAndOdd from '../Topics/EvenAndOdd.js'
import FilterObject from '../Topics/FilterObject.js'
import FilterString from '../Topics/FilterString.js'
import Palindrome from '../Topics/Palindrome.js'
import Sum from '../Topics/Sum.js'
import ReverseAndTen from "../Topics/ReverseAndTen.js"

class TopicBrowser extends Component {
    render(){
        return(
            <div>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
                <ReverseAndTen />
            </div>
        )
    }
}

export default TopicBrowser