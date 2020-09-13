
class Sensor{
    private temperature: number;

    setTemperature(temp: number){
        console.log("Got Temperature : ", temp);
        this.temperature = temp;
    }
}

class Fan{
}

let sensor = new Sensor();
//sensor.setTemperature(35);

const temperature_slider = document.querySelector('#temperature_slider')
temperature_slider.addEventListener('change', function (evt){
    sensor.setTemperature(evt.target.value);
})
