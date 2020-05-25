import React, { Component } from 'react'

class About extends Component {

    render() {
        return (
            <div className="About_tab">
                   <h1 >
                        MAMOUDOU <span className="color_name">YAYA</span>
                   </h1>
                   <p className="address">
                   3542 BERRY STREET · CHEYENNE WELLS, CO 80810 · (317) 585-8468 · <span className="color_text">NAME@EMAIL.COM</span>
                   </p>
                   <p>
                   I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                   </p>
                   <div className="icons">
                   <i className="fab fa-linkedin-in Social_icons"></i>
                   <i className="fab fa-github-square Social_icons"></i>
                   <i className="fab fa-twitter-square Social_icons"></i>
                   <i className="fab fa-facebook Social_icons"></i>
                   </div>
                </div>
        )
    }
}

export default About
