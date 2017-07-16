import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import HiraganaTransition from './../Transition/HiraganaTransition';

import AppLink from './../../Link/AppLink';
import AppLogo from './../../Logo/AppLogo';

const HomeStyles = require('./HomePage.scss');

class HomePage extends Component {
    constructor(props) {
        super(props);
    }
	
	componentDidMount() {
        this.props.app.setState({
            backURL: null,
            title: "Hiragana App"
        });
	}
	
	componentWillUnmount() {
	}

    render() {
        return (
            <HiraganaTransition location="/">
                <div className="home-page menu">
                    <div className="flex-center-box">
                        <AppLogo />
                        
                        <div className="options">
                            <AppLink to="/hiragana" className="kana-option">
                                <span className="kana">あ</span>
                                <span className="eng">Practice Hiragana</span>
                            </AppLink>
                            
                            <AppLink to="/katakana" className="kana-option">
                                <span className="kana">ア</span>
                                <span className="eng">Practice Katakana</span>
                            </AppLink>
                        </div>
                        
                        <a href="http://artziedesign.com/" className="copyright">
                            &copy; 2017 - ArtzieDesign
                        </a>
                    </div>
                </div>
			</HiraganaTransition>
        );
    }
}

export default HomePage;
