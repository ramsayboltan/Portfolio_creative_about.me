import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { linkSync } from 'fs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
isWorkExperenceOpen: boolean = false;
isCertificateOpen: boolean = false;
isEducationOpen: boolean = false;
isSkillsOpen: boolean = false;


constructor(private titleService:Title, private renderer: Renderer2) {
  this.titleService.setTitle('Abhilash - Resume')
}
DownloadFile(){
const link = this.renderer.createElement('a')
link.SetAttribute('target', '_blank');
link.SetAttribute('href', '../../assets/Resume.pdf')
link.SetAttribute('download', 'Resume.pdf');
link.click();
link.remove();

}
}
