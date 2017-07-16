import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import TestPage from './../Test/TestPage';
import Japanese from './../../Data/Japanese';

const HiraganaKanaStyles = require('./HiraganaKanaPage.scss'); 

class HiraganaKanaPage extends TestPage {
    constructor(props) {
        super("/hiragana/kana", Japanese.getHiraganaKanaTest(), props);
    }
	
	componentDidMount() {
        this.props.app.setState({
            backURL: "/hiragana",
            title: "Hiragana Kana Practice"
        });
	}
}

export default HiraganaKanaPage;
