Thermostat.prototype.updateUp = function() {
  this.up()
  document.getElementById('temp').innerHTML = thermostat.temp;
};

Thermostat.prototype.updateDown = function() {
  this.down()
  document.getElementById('temp').innerHTML = thermostat.temp;
};

Thermostat.prototype.updateReset = function() {
  this.reset()
  document.getElementById('temp').innerHTML = thermostat.temp;
}


