/** MIT License
* 
* Copyright (c) 2015 Ludovic CLUBER 
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* http://taipanjs.lcluber.com
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('../../bower_components/Mouettejs/dist/mouette.js')) :
    typeof define === 'function' && define.amd ? define(['exports', '../../bower_components/Mouettejs/dist/mouette.js'], factory) :
    (factory((global.TAIPAN = {}),global.MOUETTE));
}(this, (function (exports,MOUETTE) { 'use strict';

    var FSM = (function () {
        function FSM(events) {
            var _this = this;
            this.state = events[0].from;
            var _loop_1 = function (event_1) {
                if (!this_1.hasOwnProperty(event_1.name)) {
                    this_1[event_1.name] = function () {
                        MOUETTE.Logger.info('- Event ' + event_1.name + ' triggered');
                        if (_this.state == event_1.from) {
                            _this.state = event_1.to;
                            MOUETTE.Logger.info('from ' + event_1.from + ' to ' + _this.state);
                            return true;
                        }
                        MOUETTE.Logger.warn('Cannot transition from ' + _this.state + ' to ' + event_1.to);
                        return false;
                    };
                }
            };
            var this_1 = this;
            for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                var event_1 = events_1[_i];
                _loop_1(event_1);
            }
        }
        return FSM;
    }());

    exports.FSM = FSM;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
