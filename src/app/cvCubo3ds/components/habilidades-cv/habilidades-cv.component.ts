import { Component, inject } from '@angular/core';
import { CommonModule  } from '@angular/common';

import { CvServicesService } from '../../services/cv-services.service';

@Component({
  selector: 'site-habilidades-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades-cv.component.html',
  styleUrl: './habilidades-cv.component.css'
})
export class HabilidadesCVComponent {

  cvService = inject(CvServicesService);
  //habilidadesData = this.cvService.habilidadesData();
}
