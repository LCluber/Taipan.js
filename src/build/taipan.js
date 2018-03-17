import * as MOUETTE from '../../bower_components/Mouettejs/dist/mouette';
var FSM = (function () {
    function FSM(events) {
        var _this = this;
        this.state = events[0].from;
        var _loop_1 = function (event_1) {
            if (!this_1.hasOwnProperty(event_1.name)) {
                this_1[event_1.name] = function () {
                    MOUETTE.Logger.info('- Event ' + event_1.name + ' triggered');
                    if (_this.state == event_1.from) {
                        _this.state = event_1.to;
                        MOUETTE.Logger.info('from ' + event_1.from + ' to ' + _this.state);
                        return true;
                    }
                    MOUETTE.Logger.warn('Cannot transition from ' + _this.state + ' to ' + event_1.to);
                    return false;
                };
            }
        };
        var this_1 = this;
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            _loop_1(event_1);
        }
    }
    return FSM;
}());
export { FSM };
;
//# sourceMappingURL=taipan.js.map