var Sensor = /** @class */ (function () {
    function Sensor() {
    }
    Sensor.prototype.setTemperature = function (temp) {
        console.log("Got Temperature : ", temp);
        this.temperature = temp;
    };
    return Sensor;
}());
var sensor = new Sensor();
sensor.setTemperature(35);
