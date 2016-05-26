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
import * as actions from '../actions'

/***
 * Reduces the state of the document
 * @param state:
 *  {
 *      url: null,
 *      status: null,
 *      content: null
 *  } (default): The document is not loaded 
 *  {
 *      url: Url of a publicly available document (e.g. from Google Drive
 *      status: Loading status of the Document, one of actions.Statuses
 *      content: The loaded content of the document
 *   }
 * }
 * @param action
 * @returns {*}
 */
function document(state = Map({keys: List(), current: null, entities: Map({})}), action) {
    switch (action.type) {
        // If setting state
        case actions.SET_STATE:
            return state.merge(action.state.get('document'));
        
        // Indicates that the load of the document has begun
        case actions.LOAD_DOCUMENT:
            return state.set('url', action.state.get('content'))
                .set('status', actions.Statuses.LOADING);
        // Upon loading indicates the model is ready for interaction
        case actions.RECEIVE_DOCUMENT:
            return state.set('content', action.state.get('content'))
                .set('status', actions.Statuses.READY);
        default:
            return state
    }
}

export default document
