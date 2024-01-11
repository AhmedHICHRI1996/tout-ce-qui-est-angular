import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { Apartment } from '../core/models/appartement';

@Component({
  selector: 'app-list-residence',
  templateUrl: './list-residence.component.html',
  styleUrls: ['./list-residence.component.css']
})
export class ListResidenceComponent {
  residences: Residence[]=[
    {id:1,"name":"El fel","address":"Borj Cedria","image":"../../assets/R1.jpeg"},
    {id:2,"name":"El yasmine","address":"Ezzahra","image":"../../assets/R2.jpg"},
    {id:3,"name":"El Arij","address":"Rades","image":"../../assets/R3.jpg"},
    {id:4,"name":"El Anber","address":"Manzah 5","image":"../../assets/R4.jpg"}
  ];

  listApartementFiltred: Apartment[] = []
  listApartments: Apartment[] = [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'AppartementS+1',
      residence: this.residences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'AppartementS+2',
      residence: this.residences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.residences[1],
    },
    {
      id: 4,
      appartNum: 4,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.residences[1],
    },
    ];

    showAppartement(r:Residence) {
      this.listApartementFiltred = this.listApartments.filter((a) => a.residence == r);
    }
}
