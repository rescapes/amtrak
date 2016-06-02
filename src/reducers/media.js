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

import {List, Map} from 'immutable';
import {SET_STATE} from '../actions/article'
import * as actions from '../actions/medium'
import Statuses from '../statuses'

/***
 * Reduces the state of the media 
 * @param state:
 *  {
 *      keys: [],
 *      selected: null,
 *      entries: {
 *      }
 *  } (default): No Medium is selected and no media has stored state
 *  {
 *   keys: [known medium keys],
 *   current: medium key of the selected medium,
 *   entries: {
 *      medium key: {
 *         status: on of Statuses
 *         url: the medium url
 *      }
 *      ...
 *   }
 * }
 * @param action
 * @returns {*}
 */
function media(state = Map({keys: List(), selected: null, entries: Map({})}), action) {
    switch (action.type) {
        // If setting state
        case SET_STATE:
            return state.merge(action.state.get('media'));
        
 ;
    }
}

export default media
