import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NOTICIAS } from '../../db/noticias.db';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {

  noticias: INoticia[] = NOTICIAS
  
  noticia: INoticia = {
    titulo: '',
    imagenUrl: '',
    cuerpo: '',
    fechaPublicacion: ''//Fecha se declara de tipo string o Date en la interfaz, por lo que se puede asignar una cadena vacía inicialmente
                        //Lo he hecho así porque si tenía que inicializar la noticia con una fecha, el input de tipo date si no seleccionaba una fecha, 
                        //se inicializaba con la fecha actual, y me dejaba eviarla lo que no era correcto. 
                        //De esta forma si agrego la noticia sin seleccionar fecha llegara un string vacío y se podrá validar correctamente.
  }

  insertarNoticia(noticia: INoticia): void {
    
    try {
          this.validarNoticia(noticia);

          this.noticias.push({...noticia});
    
          this. noticia = {
            titulo: '',
            imagenUrl: '',
            cuerpo: '',
            fechaPublicacion: ''
          }
        } catch (error) {
            if (error instanceof Error) {
              alert(error.message);
            } else {
              alert('Ha ocurrido un error desconocido.');
            }
        }
  }

  private validarNoticia(noticia: INoticia): void {
    
    if (!noticia.titulo  || !noticia.titulo.trim()) {
      throw new Error('El título de la noticia es obligatorio.');
    }

    if (!noticia.imagenUrl || !noticia.imagenUrl.trim()) {
      throw new Error('La URL de la imagen es obligatoria.');
    }

    if (!noticia.cuerpo || !noticia.cuerpo.trim()) {
      throw new Error('El cuerpo de la noticia es obligatorio.');
    }

    if (!noticia.fechaPublicacion) {
      throw new Error('La fecha de publicación es obligatoria.');
    }
  }
}
