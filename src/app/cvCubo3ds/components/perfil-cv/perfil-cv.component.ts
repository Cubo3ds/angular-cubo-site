import { Component, inject } from '@angular/core';
import { CvServicesService } from '../../services/cv-services.service';

@Component({
  selector: 'site-perfil-cv',
  standalone: true,
  imports: [],
  templateUrl: './perfil-cv.component.html',
  styleUrls: ['./perfil-cv.component.css', '../../cv/cv.component.css'],
})
export class PerfilCvComponent {

  cvService = inject(CvServicesService);
  
}
