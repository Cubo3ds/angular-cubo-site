import { Component } from '@angular/core';

import { ComplementsCvComponent } from '../components/complements-cv/complements-cv.component';
import { EducationCvComponent } from '../components/education-cv/education-cv.component';
import { ExperienciaCvComponent } from '../components/experiencia-cv/experiencia-cv.component';
import { FooterCvComponent } from '../components/footer-cv/footer-cv.component';
import { HabilidadesCVComponent } from '../components/habilidades-cv/habilidades-cv.component';
import { HeaderCvComponent } from '../components/header-cv/header-cv.component';
import { NavbarCvComponent } from '../components/navbar-cv/navbar-cv.component';
import { PerfilCvComponent } from '../components/perfil-cv/perfil-cv.component';
import { SkillsDeveloperCvComponent } from '../components/skills-developer-cv/skills-developer-cv.component';




@Component({
  selector: 'site-cv',
  standalone: true,
  imports: [
    ComplementsCvComponent,
    EducationCvComponent,
    ExperienciaCvComponent,
    FooterCvComponent,
    HabilidadesCVComponent,
    HeaderCvComponent,
    NavbarCvComponent,
    PerfilCvComponent,
    SkillsDeveloperCvComponent
  ],

  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}
