import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ali',
  templateUrl: './create-ali.page.html',
  styleUrls: ['./create-ali.page.scss'],

  standalone: false,
})
export class CreateAliPage implements OnInit {

  header="Food";
  list=[
    {
      breakfast:"Oatmeal",
      lunch:"Salad"
    },
    {
      breakfast:"Cereal",
      lunch:"Ciabbatta"
    },
    {
      breakfast:"Omelette",
      lunch:"Soup"
    },
    {
      breakfast:"Cereal",
      lunch:"Ciabbatta"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
