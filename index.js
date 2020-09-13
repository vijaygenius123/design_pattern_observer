var Sensor = /** @class */ (function () {
    function Sensor() {
    }
    Sensor.prototype.setTemperature = function (temp) {
        console.log("Got Temperature : ", temp);
        this.temperature = temp;
    };
    return Sensor;
}());
var Fan = /** @class */ (function () {
    function Fan() {
    }
    return Fan;
}());
var sensor = new Sensor();
//sensor.setTemperature(35);
var temperature_slider = document.querySelector('#temperature_slider');
temperature_slider.addEventListener('change', function (evt) {
    sensor.setTemperature(evt.target.value);
});
