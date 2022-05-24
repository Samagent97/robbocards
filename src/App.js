import React, {Component} from "react";
import { render } from "react-dom";
import CardList from "./CardList";

import Searchbox from './Searchbox';
import scroll from './scroll'


class App extends Component {
    constructor() {
        super()
        this.state = {
        
                robbots: [],
                Searchfield:''
            
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => {
        this.setState({robbots:users}) });         
    }
    
    onSearchChange= (event) => {
        this.setState({Searchfield: event.target.value})
       // console.log(event.target.value);
       
       // console.log(filteredRobbots)
    }
    render () {
        const filteredRobbots = this.state.robbots.filter(robbot =>{
            return robbot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        })
        if (this.state.robbots.length === 0) {
            return <h1>Loading</h1>
        } else {

        
        return(
            <div className="tc ">
            <h1>RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
           <scroll> 
         <CardList robbots= {filteredRobbots }/>
         </scroll>
         </div> 
        );
        } 
    }
   
}

export default App; 