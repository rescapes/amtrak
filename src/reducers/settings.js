/**
 * Created by Andy Likuski on 2016.05.24
 * Copyright (c) 2016 Andy Likuski
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {List, Map, fromJS} from 'immutable';
import * as actions from '../actions'

/***
 * Reduces the state of the settings
 * @param state:
 *  {} (default): Use default value for each setting
 *  {aSetting: true|false, ...}: Pass desired value of setting
 * @param action: actions.set3d, actions.setRelatedImages, etc
 * @returns {*}
 */
function settings(state = Map({}), action) {
    // If setting state
    switch (action.type) {
        case actions.SET_STATE:
            return state.merge(action.state.get('settings'));
        case actions.SET_3D:
            return state.set(action.type, action.value);
        case actions.SET_RELATED_IMAGES:
            return state.set(action.type, action.value);
        default:
            return state
    }
}

export default settings