TAIPAN.States = {
  create : function(config){
    var _this = Object.create(this);
    for ( var i = 0 ; i < config.length ; i++ ){
      var event = config[i];
      if ( !this.hasOwnProperty(event.from) )
        this[event.from] = (i) ? false : true;

      if ( !this.hasOwnProperty(event.to) )
        this[event.to] = false;
    }
    return _this;
  }

};
