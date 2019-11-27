import { Component, OnInit } from '@angular/core';
import { AgregarCompetidoresService } from '../../services/agregar-competidores.service';



@Component({
  selector: 'app-competitor-info',
  templateUrl: './competitor-info.component.html',
  styleUrls: ['./competitor-info.component.css'],
  providers: [AgregarCompetidoresService]
})
export class CompetitorInfoComponent implements OnInit {

  public competitors: any;

  constructor(private _UserService: AgregarCompetidoresService) {
    this.competitors = {
      "address": "",
      "name": "",
      "id": 0,
      "country": "",
      "password": "",
      "surname": "",
      "cellphone": "",
      "city": "",
      "products": [],
      "telephone": "",
      "age": 0,
      "winner": false
    };
  }


  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this._UserService.getUser().subscribe(
      resultado => {
        console.log(resultado);
        this.competitors = resultado;
      },
      error => {
        console.log(error);
      }

    );
  }

}
