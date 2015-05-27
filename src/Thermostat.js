function Thermostat() {
  this.temp = 20
  this.mintemp = 10
  this._isPowerSaving = true
  this.maxtemp = 25
};

Thermostat.prototype.powerSaving = function(status) {
  if (status === "off") {
    this._isPowerSaving = false
    this.maxtemp = 32
  }
  else if (this.temp >= 25) {
    this.temp = 25
  }
  else {
    this._isPowerSaving = true
    this.maxtemp = 25
  }
};

Thermostat.prototype.reset = function() {
  this.temp = 20
  this._isPowerSaving = true
  this.maxtemp = 25
};

Thermostat.prototype.up = function(){
  if (this.temp < this.maxtemp) {
    this.temp += 1
  }
  else {
    this.temp = this.temp
  }
};

Thermostat.prototype.down = function() {
  if(this.temp > 10){
  this.temp -= 1
  }
  else {
    this.temp = this.temp
  }
};


