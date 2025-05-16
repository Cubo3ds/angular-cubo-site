import { Component, inject } from '@angular/core';
import { CvServicesService } from '../../services/cv-services.service';
import { KeyValuePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'site-skills-developer-cv',
  standalone: true,
  imports: [KeyValuePipe, CommonModule],
  templateUrl: './skills-developer-cv.component.html',
  styleUrl: './skills-developer-cv.component.css'
})
export class SkillsDeveloperCvComponent {
 
  cvServie = inject(CvServicesService);
  
}
