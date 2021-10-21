// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-addr2p',
//   templateUrl: './addr2p.component.html',
//   styleUrls: ['./addr2p.component.css']
// })
// export class Addr2pComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';


@Component({
  selector: 'app-addr2p',
  templateUrl: './addr2p.component.html',
  //   styleUrls: ['./addr2p.component.css']
})
export class Addr2pComponent {
  cars: any[] = [
    { id: 1, name: 'Utilities' },
    { id: 2, name: 'Transportation' },
    { id: 3, name: 'Waterway' },
    { id: 4, name: 'Process interconnections' },
  ];
  selectedCars: any[] = [];
  selectedToAdd: any[] = [];
  selectedToRemove: any[] = [];

  chosenCars(cars) {
    this.selectedToAdd = cars;
  }

  chosenCarsToRemove(cars) {
    this.selectedToRemove = cars;
  }

  assigne() {
    this.selectedCars = this.selectedCars.concat(this.selectedToAdd);
    this.cars = this.cars.filter((car) => {
      return this.selectedCars.indexOf(car) < 0;
    });

    this.selectedToAdd = [];
  }

  unassigne() {
    this.cars = this.cars.concat(this.selectedToRemove);
    this.selectedCars = this.selectedCars.filter((selectedCar) => {
      return this.cars.indexOf(selectedCar) < 0;
    });
    this.selectedToRemove = [];
  }
}
