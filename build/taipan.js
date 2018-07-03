import { Logger } from '../bower_components/Mouettejs/dist/mouette';
export default class Taipan {
    constructor(events) {
        this.state = events[0].from;
        for (let event of events) {
            if (!this.hasOwnProperty(event.name)) {
                this[event.name] = () => {
                    Logger.info('- Event ' + event.name + ' triggered');
                    if (this.state == event.from) {
                        this.state = event.to;
                        Logger.info('from ' + event.from + ' to ' + this.state);
                        return true;
                    }
                    Logger.warn('Cannot transition from ' + this.state + ' to ' + event.to);
                    return false;
                };
            }
        }
    }
}
;
//# sourceMappingURL=taipan.js.map