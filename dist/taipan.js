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

var TAIPAN = (function (mouette_js) {
    'use strict';

    class Taipan {
        constructor(events) {
            this.state = events[0].from;
            for (let event of events) {
                if (!this.hasOwnProperty(event.name)) {
                    this[event.name] = () => {
                        mouette_js.Logger.info('- Event ' + event.name + ' triggered');
                        if (this.state == event.from) {
                            this.state = event.to;
                            mouette_js.Logger.info('from ' + event.from + ' to ' + this.state);
                            return true;
                        }
                        mouette_js.Logger.warn('Cannot transition from ' + this.state + ' to ' + event.to);
                        return false;
                    };
                }
            }
        }
    }

    return Taipan;

}(mouette_js));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9sY2x1YmVyL1Byb2plY3RzL2dpdGh1Yi9UYWlwYW4uanMvYnVpbGQvdGFpcGFuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2Jvd2VyX2NvbXBvbmVudHMvTW91ZXR0ZWpzL2Rpc3QvbW91ZXR0ZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWlwYW4ge1xuICAgIGNvbnN0cnVjdG9yKGV2ZW50cykge1xuICAgICAgICB0aGlzLnN0YXRlID0gZXZlbnRzWzBdLmZyb207XG4gICAgICAgIGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KGV2ZW50Lm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tldmVudC5uYW1lXSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmluZm8oJy0gRXZlbnQgJyArIGV2ZW50Lm5hbWUgKyAnIHRyaWdnZXJlZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBldmVudC5mcm9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gZXZlbnQudG87XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuaW5mbygnZnJvbSAnICsgZXZlbnQuZnJvbSArICcgdG8gJyArIHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLndhcm4oJ0Nhbm5vdCB0cmFuc2l0aW9uIGZyb20gJyArIHRoaXMuc3RhdGUgKyAnIHRvICcgKyBldmVudC50byk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFpcGFuLmpzLm1hcCJdLCJuYW1lcyI6WyJMb2dnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDZSxNQUFNLE1BQU0sQ0FBQztJQUM1QixJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7SUFDeEIsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEMsUUFBUSxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtJQUNsQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNsRCxnQkFBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNO0lBQ3pDLG9CQUFvQkEsaUJBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUM7SUFDeEUsb0JBQW9CLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO0lBQ2xELHdCQUF3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDOUMsd0JBQXdCQSxpQkFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hGLHdCQUF3QixPQUFPLElBQUksQ0FBQztJQUNwQyxxQkFBcUI7SUFDckIsb0JBQW9CQSxpQkFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUYsb0JBQW9CLE9BQU8sS0FBSyxDQUFDO0lBQ2pDLGlCQUFpQixDQUFDO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1QsS0FBSztJQUNMLENBQUM7Ozs7Ozs7OyJ9