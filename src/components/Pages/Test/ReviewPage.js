import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import AppUtils from './../../../utils/AppUtils';
import HiraganaTransition from './../Transition/HiraganaTransition';

import TestPage from './../Test/TestPage';
import Japanese from './../../Data/Japanese';

const ReviewStyles = require('./ReviewPage.scss');

class ReviewPage extends Component {
    constructor(loc, reviewData, props) {
        super(props);
        this.loc = loc;
        this.reviewData = reviewData;
    }

    render() {
        let tableData = [];
        for(let i = 0; i < this.reviewData.length; i++) {
            let j = this.reviewData[i];
            tableData.push((
                <div className="kana" key={j.romaji}>
                    {j.kana}
                    <span className="romaji">
                        {j.romaji}
                    </span>
                </div>
            ));
            if(j.romaji == "ya" || j.romaji == "yu" || j.romaji == "wa" || j.romaji == "wo") {
                tableData.push(<div className="kana" key={j.romaji}></div>);
            }
        }
        
        return (
            <HiraganaTransition location={this.loc}>
                <div className="review-page">
                    <div className="kana-list">
                        {tableData}
                    </div>
                </div>
            </HiraganaTransition>
        );
    }
}

export default ReviewPage;