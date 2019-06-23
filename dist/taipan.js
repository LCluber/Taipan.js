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

import { Logger } from '@lcluber/mouettejs';

class FSM {
    constructor(events) {
        this.state = events[0].from;
        this.log = Logger.getGroup('Taipan') || Logger.addGroup('Taipan');
        Logger.setLevel('error');
        for (let event of events) {
            if (!this.hasOwnProperty(event.name)) {
                this[event.name] = () => {
                    this.log.info('- Event ' + event.name + ' triggered');
                    if (this.state === event.from) {
                        this.state = event.to;
                        this.log.info('from ' + event.from + ' to ' + this.state);
                        return true;
                    }
                    this.log.warn('Cannot transition from ' + this.state + ' to ' + event.to);
                    return false;
                };
            }
        }
    }
}

export { FSM };
