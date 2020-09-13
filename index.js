var Sensor = /** @class */ (function () {
    function Sensor() {
        this.observers = [];
    }
    Sensor.prototype.setTemperature = function (temp) {
        console.log("Got Temperature : ", temp);
        this.temperature = temp;
        this.notifyObservers();
    };
    Sensor.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    Sensor.prototype.unregisterObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    Sensor.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
        }
    };
    return Sensor;
}());
var Fan = /** @class */ (function () {
    function Fan(sensor) {
        this.subject = sensor;
        var fan_list = document.querySelector('#fan_list');
        var li = document.createElement('li');
        li.innerText = "New Fan";
        this.node = li;
        fan_list.appendChild(li);
        sensor.registerObserver(this);
    }
    Fan.prototype.update = function (temp) {
        console.log("Got Temperature Update ", temp);
        if (temp > 30) {
            this.node.classList.remove('cold');
            this.node.classList.add('hot');
        }
        else if (temp < 20) {
            this.node.classList.remove('hot');
            this.node.classList.add('cold');
        }
        else {
            this.node.classList.remove('hot');
            this.node.classList.remove('cold');
        }
        this.node.innerText = 'Temperature : ' + temp;
    };
    return Fan;
}());
var sensor = new Sensor();
var fan = new Fan(sensor);
var temperature_slider = document.querySelector('#temperature_slider');
temperature_slider.addEventListener('change', function (evt) {
    sensor.setTemperature(evt.target.value);
});
