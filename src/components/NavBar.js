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
            <div onClick = {this.toggle} className = 'nav_bar' style = {{display: this.props.screen <= 770 ? 'block': 'none'}}>
                <span >Mamoudou</span>
                <ul className="nav_bar_items">
                    <li  ><i className="fas fa-bars"></i></li>
                    <li style = {style} className = 'toggle'>ABOUT</li>
                    <li style = {style} className = 'toggle'>EXPERIENCE</li>
                    <li style = {style} className = 'toggle'>EDUCATION</li>
                    <li style = {style} className = 'toggle'>SKILLS</li>
                </ul>
            </div>
        )
    }
}

export default NavBar
