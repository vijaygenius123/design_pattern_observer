
class Sensor{
    private temperature: number;

    setTemperature(temp: number){
        console.log("Got Temperature : ", temp);
        this.temperature = temp;
    }
}

let sensor = new Sensor();
sensor.setTemperature(35);
