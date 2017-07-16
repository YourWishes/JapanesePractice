import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import AppUtils from './../../utils/AppUtils';

const HiraganaAppStyles = require('./Navbar.scss');

class Navbar extends Component {
    constructor(props) { 
        super(props);
        
        this.state ={
           back: null 
        };
    }
    
    setBackButton(url) {
        this.setState({back: url});
    }
    
    backClick() {
        AppUtils.tapVibrate();
    }

    render() {
        let backButton;
        if(this.props.back != null) {
            backButton = <Link to={this.props.back} className="backButton btn" onClick={this.backClick}><FontAwesome name="chevron-left" /></Link>;
        } else {
            backButton = <div></div>;
        }
        
        return (
            <div className="navbar">
                {backButton}
                <div className="app-title">
                    {this.props.title}
                    <title>{this.props.title}</title>
                </div>
            </div>
        );
    }
}

export default Navbar;
