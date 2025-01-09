class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  start() {
    console.log(`${this.name} начал движение.`);
    document.getElementById('output').innerHTML += `${this.name} начал движение.<br>`;
  }

  stop() {
    console.log(`${this.name} остановился.`);
    document.getElementById('output').innerHTML += `${this.name} остановился.<br>`;
  }
  
}
class ElectricCar extends Car {
  constructor(name, color, batteryCapacity) {
    super(name, color); // Вызов конструктора родительского класса
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(`${this.name} заряжается.`);
    document.getElementById('output').innerHTML += `${this.name} заряжается.<br>`;
  }

  displayBatteryInfo() {
    console.log(`Батарея ${this.name} имеет емкость ${this.batteryCapacity} кВт*ч.`);
    document.getElementById('output').innerHTML += `Батарея ${this.name} имеет емкость ${this.batteryCapacity} кВт*ч.<br>`;
  }
}

// Создание экземпляров классов
let myCar = new Car('Toyota', 'Красный');
myCar.start(); // Выведет: Toyota начал движение.
myCar.stop(); // Выведет: Toyota остановился.

let myElectricCar = new ElectricCar('Tesla', 'Серебряный', 75);
myElectricCar.start(); // Выведет: Tesla начал движение.
myElectricCar.stop(); // Выведет: Tesla остановился.
myElectricCar.charge(); // Выведет: Tesla заряжается.
myElectricCar.displayBatteryInfo(); // Выведет: Батарея Tesla имеет емкость 75 кВт*ч.
