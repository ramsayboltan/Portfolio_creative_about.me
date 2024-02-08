import { Component } from '@angular/core';
import { Project } from '../_modal/project';
import { ProjectsService } from '../_service/projectService';
import { Title } from '@angular/platform-browser';
import { Tag } from '../_modal/tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  python: boolean = false;
  nodejs: boolean = false;
  reactjs: boolean = false;
  javascript: boolean = false;
filtering: boolean = false;
  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Abhilash Thakur - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProject();
  }

  Filter() {
    let filterTag: Tag[] = [];
    if (this.typescript) {
      filterTag.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTag.push(Tag.PYTHON);
    }
    if (this.python) {
      filterTag.push(Tag.TYPESCRIPT);
    }
    if (this.javascript) {
      filterTag.push(Tag.JAVASCRIPT);
    }
    if (this.reactjs) {
      filterTag.push(Tag.REACT);
    }
    if (this.nodejs) {
      filterTag.push(Tag.NODE);
    }

    if(this.typescript || this.javascript || this.python || this.angular || this.reactjs || this.nodejs){
      this.filtering = true;
    } else {
      this.filtering = false
    }
    this.projects = this.projectService.GetProjectByFilter(filterTag);
  }
  ResetFilter() {
    this.angular = false;
    this.nodejs = false;
    this.reactjs = false;
    this.typescript = false;
    this.javascript = false;
    this.python = false;
    this.filtering = false;

    this.projects = this.projectService.GetProject();
  }
}
