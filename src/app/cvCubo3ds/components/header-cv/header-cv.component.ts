import { Component, inject,  } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

import { CvServicesService } from '../../services/cv-services.service';
import { HeaderCvInterface } from '../../interfaces/headerCv.interface';

@Component({
  selector: 'site-header-cv',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './header-cv.component.html',
  styleUrl: './header-cv.component.css'
})
export class HeaderCvComponent {

  //injectamos el servio con iject minuscula
  cvService = inject(CvServicesService);
  dataHeader:HeaderCvInterface = this.cvService.headerInfo();
  
  constructor(){
    
  }


}
