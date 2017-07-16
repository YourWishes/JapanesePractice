import React, { Component } from 'react';
import { render } from 'react-dom';
import FontAwesome from 'react-fontawesome';
import AppUtils from './../../../utils/AppUtils';
import HiraganaTransition from './../Transition/HiraganaTransition';
import TestData from './TestData';

const TestStyles = require('./TestPage.scss');
const OptionCount = 5;

class KanaButton extends Component {
    constructor(props) {
        super(props);
        
        this.btnKana = function() {
            this.props.page.guess(this.props.kana)
            AppUtils.tapVibrate();
        }.bind(this);
    }
    
    componentDidMount() {
        this.refs.btn.addEventListener('click', this.btnKana);
    }
    
    componentWillUnmount() {
        this.refs.btn.removeEventListener('click', this.btnKana);
        clearTimeout(this.tickFadeTask);
    }
    
    showTick() {
        this.refs.correctTick.addClass("half");
        this.tickFadeTask = setTimeout(function() {
            this.refs.correctTick.removeClass("half");
        }.bind(this), 1000);
    }
    
    render() {
        return (
            <div className="kana-option kana-button" ref="btn">
                <div className="kana">
                    {this.props.kana}
                    <div className="correct-tick" ref="correctTick"><FontAwesome name="check" /></div>
                </div>
            </div>
        );
    }
}

class TestPage extends Component {
    constructor(loc, testData, props) {
        super(props);
        this.loc = loc;
        this.testData = testData;
        this.doneKana = [];//Push done kana here
        
        let kana = this.getCharacter();
        this.state = {
            kana: kana,
            correct: 0,
            incorrect: 0,
            options: this.getOptions(kana)
        };
        
        this.checkboxFade = function() {
            this.refs.correctTick.removeClass("show");
        }.bind(this);
        
        this.crossFade = function() {
            if(!this.refs.incorrectCross) return;
            this.refs.incorrectCross.removeClass("show");
            let newKana = this.getCharacter();
            this.setState({
                kana: newKana,
                options: this.getOptions(newKana)
            });
            this.crossFadeTask = null;
        }.bind(this);
    }
	
	componentDidMount() {
	}
	
	componentWillUnmount() {
        clearTimeout(this.checkboxFadeTask);
        clearTimeout(this.crossFadeTask);
        clearTimeout(this.finishTask);
        this.crossFadeTask = null;
	}
    
    goPage(to) {
        const { history } = this.context.router;
        const { replace } = this.props;
        
        if (replace) {
            history.replace(to);
        } else {
            history.push(to);
        }
    }
    
    getCharacter($allowDone) {
        //Gets a random kana
        let kana = null;
        while(kana == null) {//Will probably need to improve this
            let k = Object.keys(this.testData).randomElement();
            if(!($allowDone) && this.doneKana.contains(k)) {
                continue;
            }
            kana = k;
        }
        return kana;
    }
    
    getOptions(kana) {
        let items = [];
        
        if(kana) {
            items.push(kana);
        } else {
            items.push(this.state.kana);
        }
        
        for(let i = 0; i < OptionCount; i++) {
            while(true) {
                let c = this.getCharacter(true);
                if(c == kana) continue;
                if(items.contains(c)) continue;
                items.push(c);
                break;
            }
        }
        return items.shuffle();
    }
    
    finish() {
        TestData.setTestData({
            correct: this.state.correct,
            incorrect: this.state.incorrect,
            retry: this.loc
        });
        this.goPage("/results");
        return;
    }
    
    guess(kana) {
        if(this.crossFadeTask) return;
        if(this.finishTask) return;
        let c = this.state.correct;
        let i = this.state.incorrect;
        let correct = false;
        
        if(kana == this.state.kana) {
            //Correct guess
            c++;
            this.refs.correctTick.addClass("show");
            clearTimeout(this.checkboxFadeTask);
            this.checkboxFadeTask = setTimeout(this.checkboxFade, 150);
            correct = true;
        } else {
            //Incorrect
            i++;
            this.refs.incorrectCross.addClass("show");
            clearTimeout(this.crossFadeTask);
            this.crossFadeTask = setTimeout(this.crossFade, 1200);
        }
        
        this.doneKana.push(this.state.kana);
        
        let finish = false;
        if(this.doneKana.length >= Object.keys(this.testData).length) {
            finish = true;
        }
        
        //Set new Kana
        if(correct) {
            if(!finish) {
                let newKana = this.getCharacter();
                this.setState({
                    kana: newKana,
                    correct: c,
                    incorrect: i,
                    options: this.getOptions(newKana)
                });
            } else {
                this.setState({
                    correct: c,
                    incorrect: i
                });
            }
        } else {
            for(let i = 0; i < this.state.options.length; i++) {
                let f = this.state.options[i];
                if(f != this.state.kana) continue;
                let el = this.refs["btnkana" + i];
                el.showTick();
                break;
            }
            this.setState({
                correct: c,
                incorrect: i
            });
        }
        
        if(finish) {
            this.finishTask = setTimeout(this.finish.bind(this), 1100);
            return;
        }
        
        return correct;
    }

    render() {
        let sym = this.testData[this.state.kana];
        let optionElements = [];
        
        for(let i = 0; i < this.state.options.length; i++) {
            let kanaRef = "btnkana" + i;
            let o = <KanaButton kana={this.state.options[i]} page={this} ref={kanaRef} key={kanaRef} />;
            optionElements.push(o);
        }
        
        return (
            <HiraganaTransition location={this.loc}>
                <div className="test-page menu">
                    <div className="scoreboard">
                        <div className="correct">{this.state.correct}</div>
                        <div className="incorrect">{this.state.incorrect}</div>
                        <div className="clear-fix"></div>
                    </div>
                    <div className="flex-center-box">
                        <div className="options">
                            <div className="kana-option big">
                                <div className="kana">
                                    {sym}
                                    <div className="correct-tick" ref="correctTick"><FontAwesome name="check" /></div>
                                    <div className="incorrect-cross" ref="incorrectCross"><FontAwesome name="times" /></div>
                                </div>
                            </div>
                            
                            {optionElements}
                        </div>
                    </div>
                </div>
            </HiraganaTransition>
        );
    }
}

TestPage.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default TestPage;
