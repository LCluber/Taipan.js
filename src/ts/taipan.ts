import { Logger, Group } from '@lcluber/mouettejs';

export interface FSM {
  state: string|boolean|number;
  [key: string]: any;
}

export interface IEvent {
  name : string;
  from : string|boolean|number;
  to   : string|boolean|number;
}

export class FSM { // FSM

  public state : string|boolean|number;
  private log : Group;

  constructor (events : IEvent[]) {
    this.state = events[0].from;
    this.log = Logger.addGroup('Taipan');
    for (let event of events) {
      if (!this.hasOwnProperty(event.name)) {
        this[event.name] = (): boolean => { //create event method
          this.log.info('- Event ' + event.name + ' triggered');
          if(this.state === event.from){ //if the state can be modified
            this.state = event.to; // set the state to the event
            this.log.info('from ' + event.from + ' to ' + this.state);
            return true; //GG
          }
          this.log.warn('Cannot transition from ' + this.state + ' to ' + event.to);
          return false; //This state cannot be reached from the current state.
        };
      }
    }
  }

  // public getStatus (): string{
  //   return this.state;
  // }

};
