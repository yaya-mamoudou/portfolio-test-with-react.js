import React, { Component } from 'react'
import './portfolio.css'
import SideNav from './SideNav'
import MainWindow from './MainWindow'
import NavBar from './NavBar'
class Body extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            width: window.innerWidth 
        }
    }
    check = ()=>{
        this.setState({width: window.innerWidth })
    }
    componentDidMount(){
        window.addEventListener("resize", this.check)
    }
    
    render() {
        return (
            <div className = 'Body'>
                
                <NavBar screen = {this.state.width}/>
                <SideNav screen = {this.state.width}/>
                <MainWindow screen = {this.state.width}/>
            </div>
        )
    }
}

export default Body
