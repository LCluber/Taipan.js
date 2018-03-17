export interface IEvent {
    name: string;
    from: string;
    to: string;
}
export declare class FSM {
    state: string;
    constructor(events: IEvent[]);
}
