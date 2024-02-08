import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../_service/projectService';
import { Title } from '@angular/platform-browser';
import { Project } from '../_modal/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuresProject = {} as Project;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Abhilash Thakur - Portfolio');
  }
  ngOnInit(): void {
    this.featuresProject = this.projectService.GetById(0);
  }
}
