describe ("Thermostat", function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat
  });

  describe ("Temperatures", function() {

    it("starts at 20", function(){
      expect(thermostat.temp).toEqual(20);
    });

    it("has a min temp of 10", function(){
      expect(thermostat.mintemp).toEqual(10);
    });
  });

  describe ("Power saving mode", function() {

    it("has power saving mode on as default", function(){
      expect(thermostat._isPowerSaving).toBe(true);
    });

    it("can be turned off", function() {
      thermostat.powerSaving('off');
      expect(thermostat._isPowerSaving).toBe(false);
    });

    it("has a max temp of 25 when power saving is on", function(){
      thermostat._isPowerSaving = true
      expect(thermostat.maxtemp).toEqual(25);
    });

    it("has a max temp of 32 when power saving is off", function(){
      thermostat.powerSaving("off")
      expect(thermostat.maxtemp).toEqual(32);
    });

    it("when turned on and temp is above 25, temp resets to 25", function(){
      thermostat.powerSaving("off")
      thermostat.temp = 30
      thermostat.powerSaving()
      expect(thermostat.temp).toEqual(25)
    });
  });

  describe ("it can be reset", function(){

    it("when reset, has a temp of 20", function(){
      thermostat.temp = 25
      thermostat.reset()
      expect(thermostat.temp).toEqual(20);
    });

    it("when reset, power saving is on", function(){
      thermostat._isPowerSaving = false
      thermostat.reset()
      expect(thermostat._isPowerSaving).toBe(true);
    });
  });

});