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

    function addZero(value) {
        return value < 10 ? '0' + value : value;
    }
    function formatDate() {
        var now = new Date();
        var date = [addZero(now.getMonth() + 1), addZero(now.getDate()), now.getFullYear().toString().substr(-2)];
        var time = [addZero(now.getHours()), addZero(now.getMinutes()), addZero(now.getSeconds())];
        return date.join("/") + " " + time.join(":");
    }

    var Message = function () {
        function Message(level, content) {
            _classCallCheck(this, Message);

            this.id = level.id;
            this.name = level.name;
            this.color = level.color;
            this.content = content;
            this.date = formatDate();
        }

        _createClass(Message, [{
            key: 'display',
            value: function display(groupName) {
                console[this.name]('%c[' + groupName + '] ' + this.date + ' : ', 'color:' + this.color + ';', this.content);
            }
        }]);

        return Message;
    }();

    var Group = function () {
        function Group(name, level) {
            _classCallCheck(this, Group);

            this.messages = [];
            this.name = name;
            this.messages = [];
            this._level = level;
        }

        _createClass(Group, [{
            key: 'info',
            value: function info(message) {
                this.log(LEVELS.info, message);
            }
        }, {
            key: 'trace',
            value: function trace(message) {
                this.log(LEVELS.trace, message);
            }
        }, {
            key: 'warn',
            value: function warn(message) {
                this.log(LEVELS.warn, message);
            }
        }, {
            key: 'error',
            value: function error(message) {
                this.log(LEVELS.error, message);
            }
        }, {
            key: 'log',
            value: function log(level, messageContent) {
                var message = new Message(level, messageContent);
                this.messages.push(message);
                if (this._level.id <= message.id) {
                    message.display(this.name);
                }
            }
        }, {
            key: 'level',
            set: function set(name) {
                this._level = LEVELS.hasOwnProperty(name) ? LEVELS[name] : this._level;
            },
            get: function get() {
                return this._level.name;
            }
        }]);

        return Group;
    }();

    var Logger = function () {
        function Logger() {
            _classCallCheck(this, Logger);
        }

        _createClass(Logger, null, [{
            key: 'setLevel',
            value: function setLevel(name) {
                Logger.level = LEVELS.hasOwnProperty(name) ? LEVELS[name] : Logger.level;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Logger.groups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var group = _step.value;

                        group.level = Logger.level.name;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }, {
            key: 'getLevel',
            value: function getLevel() {
                return Logger.level.name;
            }
        }, {
            key: 'getGroup',
            value: function getGroup(name) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = Logger.groups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var group = _step2.value;

                        if (group.name === name) {
                            return group;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return null;
            }
        }, {
            key: 'addGroup',
            value: function addGroup(name) {
                return this.getGroup(name) || this.pushGroup(name);
            }
        }, {
            key: 'pushGroup',
            value: function pushGroup(name) {
                var group = new Group(name, Logger.level);
                Logger.groups.push(group);
                return group;
            }
        }]);

        return Logger;
    }();

    Logger.level = LEVELS.error;
    Logger.groups = [];

    var FSM = function () {
        function FSM(events) {
            var _this = this;
            this.state = events[0].from;
            this.log = Logger.getGroup('Taipan') || Logger.addGroup('Taipan');
            var _loop_1 = function _loop_1(event_1) {
                if (!this_1.hasOwnProperty(event_1.name)) {
                    this_1[event_1.name] = function () {
                        _this.log.info('- Event ' + event_1.name + ' triggered');
                        if (_this.state === event_1.from) {
                            _this.state = event_1.to;
                            _this.log.info('from ' + event_1.from + ' to ' + _this.state);
                            return true;
                        }
                        _this.log.warn('Cannot transition from ' + _this.state + ' to ' + event_1.to);
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
