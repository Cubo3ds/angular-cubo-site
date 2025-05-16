import { Injectable, signal } from '@angular/core';
import { HeaderCvInterface } from '../interfaces/headerCv.interface';
import { ExperienciaCvInterface } from '../interfaces/experienciaCv.interface';
import { EducationCvInterface } from '../interfaces/educationCv.interface';
import { HabilidadesCvInterface } from '../interfaces/habilidadesCv.interface';

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
      description:'Realice un proyecto IVR, utilizando la metodología Srcum así como la herramienta Orchestration Designer de Avaya, el lenguaje de programación java (Maven) y Apis como DialogFlow, Whatson entre otras tecnologías.',
      fechaIni:new Date(2018,10,1),
      fechaEnd:new Date(2019,5,1),
    },
    {
      id:2,
      puesto:'Desarrollador de proyectos',
      namEmpresa:'SAT',
      address:'Av. P.º de la Reforma 10, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX',
      description:'Actualmente desarrollo diferentes proyectos webs y nativos utilizando como lenguajes de programación C# y js. También gestiono bases de datos en SqlServer.',
      fechaIni:new Date(2019,5,1,),
      fechaEnd:new Date(),
    }

  ]);

  educationData = signal<EducationCvInterface[]>([
    
    {
      id:1,
      nivel:'Licenciatura',
      escuela:'Instituto tecnológico de Milpa Alta',
      fechaIni:new Date(2014,7,1),
      fechaEnd:new Date(2019,11,1),
      address:'Independencia Sur 36 Milpa Alta, Independencia Sur 36, Milpa Alta, 12300 San Salvador Cuauhtenco, CDMX',
      description:'Estudié ingeniería en sistemas computacionales y entornos web, donde aprendí los conceptos básicos de programación y bases de datos, así como los entornos donde estos conviven, participe en un evento de innovación a nivel local con un proyecto de dispositivos móviles desarrollado en Ionic.'
    }

  ]);

  habilidadesData = signal<HabilidadesCvInterface[]>([
      {
        id:1,
        habilidad:'constancia',
        numeroEstrellas:4
      },
      {
        id:2,
        habilidad:'resolución de problemas',
        numeroEstrellas:4
      },
      {
        id:3,
        habilidad:'compromiso',
        numeroEstrellas:4
      },
      {
        id:4,
        habilidad:'creatividad',
        numeroEstrellas:4
      },
      {
        id:5,
        habilidad:'trabajo en equipo',
        numeroEstrellas:4
      }
    ]);

  constructor() {}

}
