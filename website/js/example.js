var lights = {
  green  : findById("green"),
  orange : findById("yellow"),
  red    : findById("red")
};

var fsm = TAIPAN.create([
            { name: 'greenOn',  from: 'red',  to: 'green' },
            { name: 'orangeOn', from: 'green', to: 'orange' },
            { name: 'redOn',    from: 'orange',  to: 'red' }
          ]);
//console.log(fsm);
console.log(fsm.getStatus());
switchOn(lights[fsm.getStatus()]);

//turn requested light on if finite state machine authorizes it
function changeLight(light){
  var eventName = light + 'On';
  if(fsm[eventName]()) {
    transition(); //switch lights off
    switchOn(lights[light]); //switch requested light on
  }
  console.log(fsm.getStatus());
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

function findById( id ) {
  return document.getElementById(id);
}