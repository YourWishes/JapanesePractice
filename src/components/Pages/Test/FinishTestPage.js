import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import HiraganaTransition from './../Transition/HiraganaTransition';
import TestData from './TestData';
import FontAwesome from 'react-fontawesome';

const FinishTestStyles = require('./FinishTestPage.scss');

class FinishTestPage extends Component {
    constructor(props) {
        super(props);
    }
	
	componentDidMount() {
        this.props.app.setState({
            backURL: TestData.retry ? TestData.retry : "/",
            title: "Test Results"
        });
	}
	
	componentWillUnmount() {
	}

    render() {
        let c = TestData.correct ? TestData.correct : 0;
        let i = TestData.incorrect ? TestData.incorrect : 0;
        let p = c/(c+i);
        let quotes = [];
        
        if(p == 1) {
            quotes = [
                "Great job!",
                "Perfect!",
                "Astonishing!"
            ];
        } else if(p >= 0.8) {
            quotes = [
                "Keep it up!",
                "Good work!",
                "Not too shabby!",
                "Soo close!"
            ];
        } else if(p >= 0.6) {
            quotes = [
                "Getting there!",
                "Almost! Keep going!",
                "You've been working!"
            ];
        } else if(p >= 0.3) {
            quotes = [
                "Each step counts!",
                "You're getting it!",
                "Don't forget to review!",
                "Great start!"
            ];
        } else {
            quotes = [
                "Try practicing!",
                "Hard Work pays off!",
                "You'll get there in no time!"
            ];
        }
        
        let quote = quotes.randomElement();
        let r = TestData.retry ? TestData.retry : "/";
        
        return (
            <HiraganaTransition location="/result">
                <div className="finish-test-page">
                    <div className="flex-center-box">
                        <div className="options">
                            <div className="kana-option title">
                                Test Complete.<br />
                                &quot;{quote}&quot;
                            </div>
                            <div className="kana-option correct">
                                <FontAwesome name="check" />
                                <span className="eng">{c} Correct.</span>
                            </div>
                            <div className="kana-option incorrect">
                                <FontAwesome name="close" />
                                <span className="eng">{i} Incorrect.</span>
                            </div>
                            <Link to={r} className="kana-option kana-button">
                                <FontAwesome name="repeat" />
                                <span className="eng">Retry</span>
                            </Link>
                            <Link to="/" className="kana-option kana-button">
                                <FontAwesome name="home" />
                                <span className="eng">Home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </HiraganaTransition>
        );
    }
}

export default FinishTestPage;
