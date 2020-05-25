import React, { Component } from 'react'

class Skills extends Component {
    render() {
        return (
            <div className = 'skills_tab'>
                <h2>SKILLS</h2>
                <div className = 'block'>
                    <div className='text_area'>
                        <h4>PROGRAMMING LANGUAGES & TOOLS</h4>
                        <p className = 'lang_icon_container'>
                        <i className="fab fa-html5 lang_icon"></i>
                        <i className="fab fa-css3-alt lang_icon"></i>
                        <i className="fab fa-react lang_icon"></i>
                        <i className="fab fa-js-square lang_icon"></i>
                        </p>

                        <h4 className = 'Skills_tab_second_h4'>WORKFLOW</h4>
                        <p className = 'skills'><span className = 'check_icon'><i className="fas fa-check"></i></span> Mobile-First, Responsive Design</p>
                        <p className = 'skills'><span className = 'check_icon'><i className="fas fa-check"></i></span> Cross Browser Testing & Debugging</p>
                        <p className = 'skills'><span className = 'check_icon'><i className="fas fa-check"></i></span> Cross Functional Teams</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
