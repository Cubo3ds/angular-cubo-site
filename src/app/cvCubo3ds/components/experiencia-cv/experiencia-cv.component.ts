import { Component, inject } from '@angular/core';
import { DatePipe, CommonModule  } from '@angular/common';

import { CvServicesService } from '../../services/cv-services.service';



@Component({
  selector: 'site-experiencia-cv',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './experiencia-cv.component.html',
  styleUrls: ['./experiencia-cv.component.css', '../../cv/cv.component.css']
})
export class ExperienciaCvComponent {

  cvService = inject(CvServicesService);
  dateExperiencia = this.cvService.experienciaCv();


}
