import React, { Component } from 'react'

class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            up: 0,
        }
    }
    

    toggle = ()=> {
        this.setState({up: this.state.up === 0 ? 1 : 0})
    }
    render() {
        const style = {display: this.state.up === 1 ? 'block' : 'none'}
        return (
            <div className = 'nav_bar' style = {{display: this.props.screen <= 770 ? 'block': 'none'}}>
                <span >Mamoudou</span>
                <ul className="nav_bar_items">
                    <li  ><i onClick = {this.toggle} className="fas fa-bars menu"></i></li>
                    <li style = {style} className = 'toggle'><a href="#one">ABOUT</a></li>
                    <li style = {style} className = 'toggle'><a href="#two">EXPERIENCE</a></li>
                    <li style = {style} className = 'toggle'><a href="#three">EDUCATION</a></li>
                    <li style = {style} className = 'toggle'><a href="#four">SKILLS</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar
