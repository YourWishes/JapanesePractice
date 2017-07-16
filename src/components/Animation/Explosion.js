import React, { Component } from 'react'
import { render, findDOMNode } from 'react-dom'

const ExplosionStyles = require('./Explosion.scss');

class ExplosionLine extends Component {
    constructor(props) {
        super(props);
        
        this.direction = props.direction;
        this.size = props.size;
    }

    render() {
        let classes = "explosion-line " + this.direction;
        let style = {
            width: this.size + "px",
            height: this.size + "px"
        }
        
        return (
            <div className={classes} style={style}>
                <div className="explosion-inner">
                    <div className="explosion-line-inner">
                    </div>
                </div>
            </div>
        )
    }
}

class Explosion extends Component {
    constructor(props) {
        super(props);
        if(!props.remove) throw "Please include a remove function as a prop!";
        
        this.size = this.props.size ? this.props.size : 128;
        this.x = this.props.x ? this.props.x : 32;
        this.y = this.props.y ? this.props.y : 32;
        this.self = this;
    }


    componentDidMount() {
        this.timeout = setTimeout(function() {
            if(!this) return;
            this.props.remove(this);
        }.bind(this), 1150);
    }

    componentWillUnmount() {
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    render() {
        let style = {
            width: this.size + "px",
            height: this.size + "px",
            left: this.x + "px",
            top: this.y + "px"
        }
        
        return (
            <div className="explosion" style={style}>
                <div className="explosion-inner">
                    <ExplosionLine size={this.size} direction="left" />
                    <ExplosionLine size={this.size} direction="right" />
                    <ExplosionLine size={this.size} direction="up" />
                    <ExplosionLine size={this.size} direction="down" />
                    <ExplosionLine size={this.size} direction="tr" />
                    <ExplosionLine size={this.size} direction="dr" />
                    <ExplosionLine size={this.size} direction="dl" />
                    <ExplosionLine size={this.size} direction="ul" />
                </div>
			</div>
        )
    }
}

export default Explosion;
