
interface Subject{

    registerObserver(o: Observer);
    unregisterObserver(o: Observer);
    notifyObservers(temp: number);
}

interface Observer{
    update(temp: number);
}

class Sensor implements Subject{
    private temperature: number;
    private observers: Observer[] = [];

    setTemperature(temp: number){
        console.log("Got Temperature : ", temp);
        this.temperature = temp;
        this.notifyObservers();
    }

    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    unregisterObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notifyObservers() {
        for(let observer of this.observers){
            observer.update(this.temperature);
        }
    }
}

class Fan implements Observer{

    subject: Subject;
    node: Node;

    constructor(sensor: Subject) {
        this.subject = sensor;

        const fan_list = document.querySelector('#fan_list')
        const li = document.createElement('li');
        li.innerText = "New Fan"
        this.node = li;
        fan_list.appendChild(li);

        sensor.registerObserver(this);
    }

    update(temp: number) {
        console.log("Got Temperature Update ", temp);
        if(temp > 30){
            this.node.classList.remove('cold');
            this.node.classList.add('hot');
        }else if (temp < 20){
            this.node.classList.remove('hot')
            this.node.classList.add('cold');
        }else{
            this.node.classList.remove('hot')
            this.node.classList.remove('cold')
        }
        this.node.innerText = 'Temperature : ' + temp;
    }


}

let sensor = new Sensor();
let fan = new Fan(sensor);

const temperature_slider = document.querySelector('#temperature_slider')
temperature_slider.addEventListener('change', function (evt){
    sensor.setTemperature(evt.target.value);
})
