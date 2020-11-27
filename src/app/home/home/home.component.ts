import { Component, OnInit } from '@angular/core';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: any[]= [];

  constructor(private peticion: PetitionService) { }

  ngOnInit(): void {
    this.peticion.getUsers().subscribe(data => {
      this.usuarios=data;
      console.log(this.usuarios);
      
    })
  }

}