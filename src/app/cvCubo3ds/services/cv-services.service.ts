import { Injectable, signal } from '@angular/core';
import { HeaderCvInterface } from '../interfaces/headerCv.interface';
import { ExperienciaCvInterface } from '../interfaces/experienciaCv.interface';

@Injectable({
  providedIn: 'root'
})
export class CvServicesService {

  headerInfo = signal<HeaderCvInterface>({
    img:'imgs/avatar.png',
    nombre:'José Juan García Carrizosa',
    puesto:'Developer Web',
    level:'principiante',
    conctactos:{
      email:'jose.juan.garcia011@gmail.com',
      phone:5547949984,
      other:'https://github.com/Cubo3ds'
    }
  });

  experienciaCv = signal<ExperienciaCvInterface[]>([
    {
      id:1,
      puesto:'Desarrollador de tecnologías',
      namEmpresa:'Ago sistemas y tecnologías',
      address:'Nativitas Xochimilco, 16780 Ciudad de México, CDMX',
      description:'',
      fechaIni:new Date(1,11,2018),
      fechaEnd:new Date(1,6,2019),
    },
    {
      id:2,
      puesto:'Desarrollador de proyectos',
      namEmpresa:'SAT',
      address:'Av. P.º de la Reforma 10, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX',
      description:'',
      fechaIni:new Date(1,6,2019),
      fechaEnd:new Date(),
    }

  ])

  constructor() {}

}
