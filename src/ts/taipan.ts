import { Logger } from '@lcluber/mouettejs';

export interface FSM {
  [key: string]: Function|string
}

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
          Logger.info('- Event ' + event.name + ' triggered');
          if(this.state == event.from){ //if the state can be modified
            this.state = event.to; // set the state to the event
            Logger.info('from ' + event.from + ' to ' + this.state);
            return true; //GG
          }
          Logger.warn('Cannot transition from ' + this.state + ' to ' + event.to);
          return false; //This state cannot be reached from its current state.
        };
      }
    }
  }

  // public getStatus (): string{
  //   return this.state;
  // }

};
