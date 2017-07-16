import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';

import Navbar from './Navbar/Navbar';
import HiraganaTransition from './Pages/Transition/HiraganaTransition';

import HomePage from './Pages/Home/HomePage';

import HiraganaPage from './Pages/Hiragana/HiraganaPage'; 
import HiraganaKanaPage from './Pages/Hiragana/HiraganaKanaPage'; 
import HiraganaRomajiPage from './Pages/Hiragana/HiraganaRomajiPage'; 
import HiraganaReviewPage from './Pages/Hiragana/HiraganaReviewPage'; 

import KatakanaPage from './Pages/Katakana/KatakanaPage'; 
import KatakanaKanaPage from './Pages/Katakana/KatakanaKanaPage'; 
import KatakanaRomajiPage from './Pages/Katakana/KatakanaRomajiPage'; 
import KatakanaReviewPage from './Pages/Katakana/KatakanaReviewPage'; 

import FinishTestPage from './Pages/Test/FinishTestPage'; 

const FontAwesome = require('font-awesome/css/font-awesome.css');
const HiraganaAppStyles = require('./HiraganaApp.scss');

class HiraganaApp extends Component {
    constructor(props) {
        super(props);
		
		//Create common elements
        this.state = {
            backURL: null,
            title: "Please wait..."
        };
    }

    render() {
        let navbar = <Navbar back={this.state.backURL} title={this.state.title} />;
        
        return (
            <HashRouter>
                <div>
                    {navbar}
                    <Switch>
                        <Route exact path="/"  render={() => (<HomePage app={this} />)}/>
                        
                        <Route exact path="/hiragana"  render={() => (<HiraganaPage app={this} />)}/>
                        <Route exact path="/hiragana/kana"  render={() => (<HiraganaKanaPage app={this} />)}/>
                        <Route exact path="/hiragana/romaji"  render={() => (<HiraganaRomajiPage app={this} />)}/>
                        <Route exact path="/hiragana/review"  render={() => (<HiraganaReviewPage app={this} />)}/>
                        
                        <Route exact path="/katakana"  render={() => (<KatakanaPage app={this} />)}/>
                        <Route exact path="/katakana/kana"  render={() => (<KatakanaKanaPage app={this} />)}/>
                        <Route exact path="/katakana/romaji"  render={() => (<KatakanaRomajiPage app={this} />)}/>
                        <Route exact path="/katakana/review"  render={() => (<KatakanaReviewPage app={this} />)}/>
                        
                        <Route exact path="/results"  render={() => (<FinishTestPage app={this} />)}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default HiraganaApp;
