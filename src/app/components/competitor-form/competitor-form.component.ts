import { Component, OnInit } from '@angular/core';
import {AgregarCompetidoresService} from '../../services/agregar-competidores.service';

@Component({
  selector: 'app-competitor-form',
  templateUrl: './competitor-form.component.html',
  styleUrls: ['./competitor-form.component.css'],
  providers: [AgregarCompetidoresService]
})
export class CompetitorFormComponent implements OnInit {

  public competitor: any;

  constructor(private _UserService: AgregarCompetidoresService) {
    this.competitor = {
      "name": "", 
      "surname": "", 
      "address":"",
      "age": 0, 
      "telephone": "", 
      "cellphone": "", 
      "city": "", 
     "country": "",
     "password": ""
    };
   }

   addCompetitor(form){
    this._UserService.addUser(this.competitor).subscribe(
      response => {
        console.log(response);
        form.reset();
      },
      error => {

        console.log(error);
        if(error.status===422)
        {
          alert("Ya hay un usuario registrado con el mismo correo o contraseña");
          form.reset();
        }
        else
        {
          alert("Error, Datos invalidos");
          form.reset();
        }
      }
    ); 
    
   }

   setEnviarCompetidor(){

   }

  ngOnInit() {
  }

}
