/*
 * Copyright 2017 Dominic Masters.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");  
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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