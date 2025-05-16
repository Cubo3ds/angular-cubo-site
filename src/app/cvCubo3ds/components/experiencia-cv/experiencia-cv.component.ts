import { Component, inject } from '@angular/core';
import { CvServicesService } from '../../services/cv-services.service';

@Component({
  selector: 'site-experiencia-cv',
  standalone: true,
  imports: [],
  templateUrl: './experiencia-cv.component.html',
  styleUrl: './experiencia-cv.component.css'
})
export class ExperienciaCvComponent {

  cvService = inject(CvServicesService);
  dateExperiencia = this.cvService.experienciaCv();
  

}
