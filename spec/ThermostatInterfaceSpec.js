describe("Thermostat Interface", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat
  });

  describe("Temp can be changed", function(){

    it("can go up", function(){
      thermostat.up()
      expect(thermostat.temp).toBe(21);
    });

    it("can go down", function(){
      thermostat.down()
      expect(thermostat.temp).toBe(19)
    });
  });

  describe("Temp cannot go above or below min and max", function(){

    it("cannot go below 10", function(){
      thermostat.temp = 10
      thermostat.down()
      expect(thermostat.temp).toBe(10)
    });

    it("cannot go above 25 when power saving is on", function(){
      thermostat.temp = 25
      thermostat.up()
      expect(thermostat.temp).toBe(25)
    });

    it("cannot go above 32 when power saving is off", function(){
      thermostat.temp = 32
      thermostat.up()
      expect(thermostat.temp).toBe(32)
    });
  });
});