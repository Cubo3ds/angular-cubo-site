import { Component, inject } from '@angular/core';
import { CvServicesService } from '../../services/cv-services.service';
import { KeyValuePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'site-complements-cv',
  standalone: true,
  imports: [CommonModule, KeyValuePipe],
  templateUrl: './complements-cv.component.html',
  styleUrl: './complements-cv.component.css'
})
export class ComplementsCvComponent {


  cvService = inject(CvServicesService);
  

}
