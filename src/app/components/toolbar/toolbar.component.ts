import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  
  public nombre: string;
  private reciboEnvio: any;

  constructor(private activatedRoute: ActivatedRoute) { 
    

    this.getPublicationsByParams();
    console.log("Toolbar: " + this.nombre);
  }

  ngOnInit() {

    if(this.nombre != null){
      console.log(this.nombre + " esto es toolbar");
    }

  }

  public getPublicationsByParams(): void {
    this.activatedRoute.queryParams.subscribe((result) => {
      if (Object.keys(result).length !== 0) {
        this.nombre = result.nombre ? result.nombre : undefined;
       /* let queryParams: IQueryParams;
        queryParams = {
          params: result
        };
        this.queryParams = queryParams;
        this.publicationsArray = [];
        this.getPublications();
        window.scroll(0, 0);*/
      }
    });

  }

}
