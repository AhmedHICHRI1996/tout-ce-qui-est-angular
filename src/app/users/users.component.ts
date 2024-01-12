import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title: string = "bonjour"
  person = {name:'Jhon', age: 30}
  array = [1, 2, 3, 4, 5]
  searchText: string = ""
  arrayOfPerson :any= [
    { name: 'Jhon',
     age: 30,
      quantity: 1,
    picture: 'assets/giphy.gif'
    },
    { name: 'Jhon',
     age: 30,
      quantity: 1,
      picture: 'assets/giphy.gif'
    },
    { name: 'ahmed',
     age: 30,
      quantity: 0,
      picture: 'assets/giphy.gif'
    },
  ]
  Buy(person:any){
    person.quantity--;
  }

  search() {
    this.arrayOfPerson = this.arrayOfPerson.filter((p:any) => p.name === this.searchText)
  }

}
