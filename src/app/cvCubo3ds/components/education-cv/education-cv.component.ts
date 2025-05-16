import { Component, inject } from '@angular/core';

import { DatePipe, CommonModule  } from '@angular/common';

import { CvServicesService } from '../../services/cv-services.service';

@Component({
  selector: 'site-education-cv',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './education-cv.component.html',
  styleUrls: ['./education-cv.component.css', '../../cv/cv.component.css']
})

export class EducationCvComponent {

  cvService = inject(CvServicesService);
  dataEducation = this.cvService.educationData;

}
