/**
* @namespace
*/
var TAIPAN = {

  /**
  * @author Ludovic Cluber <http://www.lcluber.com/contact>
  * @file Finite State Machine library.
  * @version 0.2.0
  * @copyright (c) 2011 Ludovic Cluber

  * @license
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
  */

  revision: '0.2.0',

  /**
  * Create a new finite state machine.
  * @since 0.2.0
  * @method
  * @param {array} config An array of actions describing the state machine. [{ name: 'action',    from: 'status1',    to: 'status2' }]
  * @returns {fsm}  The new finite state machine
  */
  create : function( config ){
    var _this = Object.create(this);
    _this.config = config;
    _this.status = TAIPAN.States.create(_this.config);
    _this.createEvents();
    return _this;
  },

  createEvents : function(){
    for ( var i = 0 ; i < this.config.length ; i++ ){
      var event = this.config[i];
      if (!this.hasOwnProperty(event.name))
        this[event.name] = this.setStatus(event.from, event.to);
    }
  },

  /**
  * Get finite state machine status
  * @since 0.2.0
  * @method
  * @returns {string}  The status of the finite state machine
  */
  getStatus : function(){
    for ( var property in this.status )
      if ( this.status[property] === true )
        return property;

    return false;
  },

  setStatus : function( from, to ){
    return function(){
      if ( this.status[from] === true ){
        this.status[from] = false;
        this.status[to]   = true;
        return true;
      }else
        return false;
    };
  },

};
