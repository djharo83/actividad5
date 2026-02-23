import { INoticia } from "../interfaces/inoticia.interface";

export const  NOTICIAS: INoticia[] = [

{
    titulo: 'Lanzamiento de la nueva misión espacial',
    imagenUrl: 'https://datos-bo.com/wp-content/uploads/2021/04/sonda.jpg',
    cuerpo: 'La agencia espacial ha anunciado hoy el éxito en el despegue de su nueva sonda con destino a Marte...',
    fechaPublicacion: new Date().toISOString().split('T')[0]
  },
  {
    titulo: 'Avances en Inteligencia Artificial',
    imagenUrl: 'https://www.diarioazafata.com/wp-content/uploads/2025/11/IA-2-1050x591.jpg.webp',
    cuerpo: 'Investigadores han desarrollado un nuevo modelo de lenguaje que promete revolucionar la programación...',
    fechaPublicacion: new Date().toISOString().split('T')[0]
  }
];