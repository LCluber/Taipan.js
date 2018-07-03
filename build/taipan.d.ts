export interface IEvent {
    name: string;
    from: string;
    to: string;
}
export default class Taipan {
    state: string;
    constructor(events: IEvent[]);
}
