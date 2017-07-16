/*
 * Copyright 2017 Dominic Masters <dominic@domsplace.com>.
 */
'use strict';

require('./common/Number');
require('./common/Array');
require('./common/String');
require('./common/HTMLElement');
require('./common/Window');
require('./common/Object');

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

//Import Base Components
import HiraganaApp from './components/HiraganaApp';

render((
    <HiraganaApp />
), document.getElementById("app"));