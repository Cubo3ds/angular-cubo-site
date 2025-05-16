import { Component } from '@angular/core';


import { ExperienciaCvComponent } from '../components/experiencia-cv/experiencia-cv.component';
import { FooterCvComponent } from '../components/footer-cv/footer-cv.component';
import { HeaderCvComponent } from '../components/header-cv/header-cv.component';
import { NavbarCvComponent } from '../components/navbar-cv/navbar-cv.component';




@Component({
  selector: 'site-cv',
  standalone: true,
  imports: [NavbarCvComponent, FooterCvComponent, HeaderCvComponent, ExperienciaCvComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}
