import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import AppLink from './../../Link/AppLink';
import HiraganaTransition from './../Transition/HiraganaTransition';

const KatakanaStyles = require('./KatakanaPage.scss');

class KatakanaPage extends Component {
    constructor(props) {
        super(props);
    }
	
	componentDidMount() {
        this.props.app.setState({
            backURL: "/",
            title: "Katakana Practice"
        });
	}

    render() {
        return (
            <HiraganaTransition location="/katakana">
                <div className="katakana-page menu">
                    <div className="flex-center-box">
                        <div className="options">
                            <div className="kana-option big">
                                <span className="kana">カタカナ</span>
                                <span className="eng">Practice Katakana</span>
                            </div>
                            
                            <AppLink to="/katakana/kana" className="kana-option" onClick={this.linkClick}>
                                <span className="kana">
                                    <span className="furigana">か</span>仮
                                    <span className="furigana">な</span>名
                                </span>
                                <span className="eng">Practice Kana</span>
                            </AppLink>
                            
                            <AppLink to="/katakana/romaji" className="kana-option" onClick={this.linkClick}>
                                <span className="kana">
                                    desu
                                </span>
                                <span className="eng">Practice Romaji</span>
                            </AppLink>
                            
                            <AppLink to="/katakana/review" className="kana-option" onClick={this.linkClick}>
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

export default KatakanaPage;
