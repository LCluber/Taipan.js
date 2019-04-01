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

var Taipan = (function (exports) {
    'use strict';

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    * http://mouettejs.lcluber.com
    */

    var LEVELS = {
        info: { id: 1, name: 'info', color: '#28a745' },
        trace: { id: 2, name: 'trace', color: '#17a2b8' },
        warn: { id: 3, name: 'warn', color: '#ffc107' },
        error: { id: 4, name: 'error', color: '#dc3545' },
        off: { id: 99, name: 'off', color: null }
    };

    var Message = function () {
        function Message(level, content) {
            _classCallCheck(this, Message);

            this.id = level.id;
            this.name = level.name;
            this.color = level.color;
            this.content = content;
        }

        _createClass(Message, [{
            key: 'display',
            value: function display() {
                console[this.name]('%c' + this.content, 'color:' + this.color + ';');
            }
        }]);

        return Message;
    }();

    var Logger = function () {
        function Logger() {
            _classCallCheck(this, Logger);
        }

        _createClass(Logger, [{
            key: 'level',
            set: function set(name) {
                Logger._level = LEVELS.hasOwnProperty(name) ? LEVELS[name] : LEVELS.info;
            },
            get: function get() {
                return Logger._level.name;
            }
        }], [{
            key: 'info',
            value: function info(message) {
                Logger.log(LEVELS.info, message);
            }
        }, {
            key: 'trace',
            value: function trace(message) {
                Logger.log(LEVELS.trace, message);
            }
        }, {
            key: 'warn',
            value: function warn(message) {
                Logger.log(LEVELS.warn, message);
            }
        }, {
            key: 'error',
            value: function error(message) {
                Logger.log(LEVELS.error, message);
            }
        }, {
            key: 'log',
            value: function log(level, messageContent) {
                var message = new Message(level, messageContent);
                this.messages.push(message);
                this.nbMessages++;
                if (this._level.id <= message.id) {
                    message.display();
                }
            }
        }]);

        return Logger;
    }();

    Logger._level = LEVELS.info;
    Logger.messages = [];
    Logger.nbMessages = 0;

    var FSM = function () {
        function FSM(events) {
            var _this = this;
            this.state = events[0].from;
            var _loop_1 = function _loop_1(event_1) {
                if (!this_1.hasOwnProperty(event_1.name)) {
                    this_1[event_1.name] = function () {
                        Logger.info('- Event ' + event_1.name + ' triggered');
                        if (_this.state === event_1.from) {
                            _this.state = event_1.to;
                            Logger.info('from ' + event_1.from + ' to ' + _this.state);
                            return true;
                        }
                        Logger.warn('Cannot transition from ' + _this.state + ' to ' + event_1.to);
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
    }();

    exports.FSM = FSM;

    return exports;

}({}));
