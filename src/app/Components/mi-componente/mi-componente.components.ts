import { Component } from '@angular/core';  /*llamamos o importamos la libreria de angular*/

@Component({            /*creamos un componente de nombre mi-componente, y con su informacion o datos, ||esta sera una clase||*/
    selector: 'mi-componente',              /*es un archivo JSON*/
    templateUrl: './mi-componente.componets.html'     //de esta manera se mantienen en archivos separados el html y el codigo           
})
export class MiComponente{              /*con esto haremos el llamado a esta clase, con el nombre MiComponente, para obtener*/
                                        /*los datos del @component, con esto se llama a la clase*/   
    
    //////// Aqui es donde se programa como una clase normal de Java o C# pero obviamente con TS
    public titulo: string;
    public comentario: string;
    public fecha: number;

    constructor(){
        this.titulo = "Hola mundo, esta es la prueba con llaves y variables";
        this.comentario ="Comentario con llaves y variables";
        this.fecha = 2020;
        
        console.log("Componente mi-componente cargado !!");     /*mensaje que aparecera en la consola del navegador creo xd jsjs*/
    }                                   
}                                   /*a esto se le hace el llamado en app.module.ts que esta dentro de la carpeta app*/