import { Component, OnInit} from '@angular/core';
import { AgregarCompetidoresService } from '../../services/agregar-competidores.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
  providers: [AgregarCompetidoresService]
})
export class IniciarSesionComponent implements OnInit {

  public competitor: any;
  public competitorEnvio: any;

  constructor(public _UserService: AgregarCompetidoresService, private router: Router) {
    this.competitor = {
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

    this.competitorEnvio = {
      "address": "",
      "password": ""
      
    };
   }

  ngOnInit() {
  }

  iniciaCompetitor(form){
    this._UserService.iniciaUser(this.competitorEnvio).subscribe(
      response => {
        console.log(response[0]);
        this.competitor = response[0];
        
        form.reset();

        console.log(this.competitor.name + " esto es iniciar sesión");

        this.router.navigate([`/home`], { queryParams: { nombre: this.competitor.name } });
        
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

}
