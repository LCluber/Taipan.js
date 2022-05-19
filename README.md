## Synopsis

  A finite state machine is a very good way to simplify a project when sequential logic is required. It helps your code to stay clean and easy to understand.

  It is an abstract machine that can be in one of a finite number of states. The machine is in only one state at a time; the state it is in at any given time is called the current state. It can change from one state to another when initiated by a triggering event or condition; this is called a transition. A particular FSM is defined by a list of its states, its initial state, and the triggering condition for each transition.

## Motivation

The main purpose of this library is to provide a simple way to handle sequential logics.

## Installation

### npm

```bash
$ npm i @lcluber/taipanjs
```

### yarn

```bash
$ yarn add @lcluber/taipanjs
```

## Usage

### ES6

```javascript
import { FSM } from '@lcluber/taipanjs';

const fsm = new Taipan.FSM([
  { name: 'greenOn',  from: 'red',  to: 'green' },
  { name: 'orangeOn', from: 'green', to: 'orange' },
  { name: 'redOn',    from: 'orange',  to: 'red' }
]);

function changeLight(light){
  const eventName = `${light}On`;
  if (fsm.transitionTo(eventName)) {
    // switchOff(); //switch lights off
    // switchOn(lights[light]); //switch requested light on
  }
}
```

### TypeScript

```javascript
import { FSM } from '@lcluber/taipanjs';

const fsm:FSM = new Taipan.FSM([
  { name: 'greenOn',  from: 'red',  to: 'green' },
  { name: 'orangeOn', from: 'green', to: 'orange' },
  { name: 'redOn',    from: 'orange',  to: 'red' }
]);

function changeLight(light: string){
  const eventName = `${light}On`;
  if (fsm.transitionTo(eventName)) {
    // switchOff(); //switch lights off
    // switchOn(lights[light]); //switch requested light on
  }
}
```

### IIFE

```html
<script src="node-modules/@lcluber/taipanjs/dist/taipan.iife.min.js"></script>
```

```javascript

var fsm = new Taipan.FSM([
  { name: 'greenOn',  from: 'red',  to: 'green' },
  { name: 'orangeOn', from: 'green', to: 'orange' },
  { name: 'redOn',    from: 'orange',  to: 'red' }
]);

function changeLight(light){
  var eventName = `${light}On`;
  if (fsm.transitionTo(eventName)) {
    // switchOff(); //switch lights off
    // switchOn(lights[light]); //switch requested light on
  }
}
```

## API Reference

```javascript

export interface IEvent {
  name : string;
  from : string|boolean|number;
  to   : string|boolean|number;
}

export declare class FSM {
  state: string | boolean | number;
  events: Events;
  constructor(events: IEvent[]);
  transitionTo(eventName: string): boolean;
}

```

## Contributors

Taipan.js is still in early development and I would be glad to get all the help you can provide for this project.
To contribute you can clone the project on **[GitHub](https://github.com/LCluber/Taipan.js)** and see  **NOTICE.md** for detailed installation walkthrough.

## License

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
