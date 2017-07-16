import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import AppLink from './../../Link/AppLink';
import HiraganaTransition from './../Transition/HiraganaTransition';

const HiraganaStyles = require('./HiraganaPage.scss');

class HiraganaPage extends Component {
    constructor(props) {
        super(props);
    }
	
	componentDidMount() {
        this.props.app.setState({
            backURL: "/",
            title: "Hiragana Practice"
        });
	}
	
	componentWillUnmount() {
	}
    
    linkClick() {
        AppUtils.tapVibrate();
    }

    render() {
        return (
            <HiraganaTransition location="/hiragana">
                <div className="hiragana-page menu">
                    <div className="flex-center-box">
                        <div className="options">
                            <div className="kana-option big">
                                <span className="kana">ひらがな</span>
                                <span className="eng">Practice Hiragana</span>
                            </div>
                            
                            <AppLink to="/hiragana/kana" className="kana-option" onClick={this.linkClick}>
                                <span className="kana">
                                    <span className="furigana">か</span>仮
                                    <span className="furigana">な</span>名
                                </span>
                                <span className="eng">Practice Kana</span>
                            </AppLink>
                            
                            <AppLink to="/hiragana/romaji" className="kana-option" onClick={this.linkClick}>
                                <span className="kana">
                                    desu
                                </span>
                                <span className="eng">Practice Romaji</span>
                            </AppLink>
                            
                            <AppLink to="/hiragana/review" className="kana-option" onClick={this.linkClick}>
                                <span className="kana">
                                    <span className="furigana">れん</span>練
                                    <span className="furigana">しゅう</span>習
                                </span>
                                <span className="eng">Review Kana</span>
                            </AppLink>
                        </div>
                    </div>
                </div>
            </HiraganaTransition>
        );
    }
}

export default HiraganaPage;
