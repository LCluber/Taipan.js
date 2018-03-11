
export interface IEvent {
  name : string;
  from : string;
  to   : string;
}

export class FSM { // FSM

  public state : string;

  constructor (events : IEvent[]) {
    this.state = events[0].from;
    for (let event of events) {
      if (!this.hasOwnProperty(event.name)) {
        this[event.name] = (): boolean => { //create event method
          if(this.state == event.from){ //if the state can be modified
            this.state = event.to; // set the state to the event
            return true; //GG
          }
          return false; //This state cannot be reached from its current state.
        };
      }
    }
  }

  public getStatus (): string{
    return this.state;
  }

};
