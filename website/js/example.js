import 'jquery';
import '../../node_modules/jquery-easing/jquery.easing.1.3.js';
import 'bootstrap';
import * as TAIPAN from '../../dist/taipan';
import * as WEE from '../../node_modules/Weejs/dist/wee';
import './grayscale';

var lights = {
  green  : WEE.Dom.findById("green"),
  orange : WEE.Dom.findById("yellow"),
  red    : WEE.Dom.findById("red")
};

var fsm = new TAIPAN.FSM([
            { name: 'greenOn',  from: 'red',  to: 'green' },
            { name: 'orangeOn', from: 'green', to: 'orange' },
            { name: 'redOn',    from: 'orange',  to: 'red' }
          ]);

switchOn(lights[fsm.state]);

//turn requested light on if finite state machine authorizes it
function changeLight(light){
  var eventName = light + 'On';
  if(fsm[eventName]()) {
    transition(); //switch lights off
    switchOn(lights[light]); //switch requested light on
  }
}

//switch lights off
function transition(){
  for (var property in lights) {
    if (lights.hasOwnProperty(property)) {
      switchOff(lights[property]);
    }
  }
}

//switch requested light off
function switchOff(light){
  light.style.opacity = 0.4; //For real browsers;
  light.style.filter = "alpha(opacity=40)"; //For IE;
}

//switch requested light on
function switchOn(light){
  light.style.opacity = 1.0; //For real browsers;
  light.style.filter = "alpha(opacity=100)"; //For IE;
}
