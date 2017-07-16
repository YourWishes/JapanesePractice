import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

import TestPage from './../Test/TestPage';
import Japanese from './../../Data/Japanese';

const KatakanaKanaStyles = require('./KatakanaKanaPage.scss'); 

class KatakanaKanaPage extends TestPage {
    constructor(props) {
        super("/katakana/kana", Japanese.getKatakanaKanaTest(), props);
    }
	
	componentDidMount() {
        this.props.app.setState({
            backURL: "/katakana",
            title: "Katakana Kana Practice"
        });
	}
	
	componentWillUnmount() {
	}
}

export default KatakanaKanaPage;
