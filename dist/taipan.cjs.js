/*
MIT License

Copyright (c) 2015 Ludovic CLUBER

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

https://github.com/LCluber/Taipan.js
*/

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class FSM {
    constructor(events) {
        this.events = {};
        this.state = events[0].from;
        for (let event of events) {
            if (!this.hasOwnProperty(event.name)) {
                this.events[event.name] = () => {
                    if (this.state === event.from) {
                        this.state = event.to;
                        return true;
                    }
                    return false;
                };
            }
        }
    }
    transitionTo(eventName) {
        return this.events[eventName]();
    }
}

exports.FSM = FSM;
