import { Injectable } from '@angular/core';
import { Project } from '../_modal/project';
import { Tag } from '../_modal/tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Sample Python Project',
      pictures: [
        '../../assets/x4vfnJX.png',
        '../../assets/HJh7AjT.png',
        '../../assets/1bNL0Ft.png',
      ],
      projectLink: '//www.github.com',
      summary: 'Python project that analyzes stock market data.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.PYTHON],
    },
    {
      id: 1,
      name: 'Sample Angular App',
      pictures: [
        '../../assets/x4vfnJX.png',
        '../../assets/HJh7AjT.png',
        '../../assets/1bNL0Ft.png',
      ],
      projectLink: '//www.github.com',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODE],
    },
    {
      id: 2,
      name: 'Sample .Net App',
      pictures: [
        '../../assets/x4vfnJX.png',
        '../../assets/HJh7AjT.png',
        '../../assets/1bNL0Ft.png',
      ],
      projectLink: '//www.github.com',
      summary: 'Fullstack web app developed using React and ASP.NET',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.REACT, Tag.TYPESCRIPT, Tag.NODE],
    },
    {
      id: 3,
      name: 'Web API Project',
      pictures: [
        '../../assets/x4vfnJX.png',
        '../../assets/HJh7AjT.png',
        '../../assets/1bNL0Ft.png',
      ],
      projectLink: '//www.github.com',
      summary: 'Web API Project that was developed for a class project.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.NODE],
    },
    {
      id: 4,
      name: 'Chrome Extension',
      pictures: [
        '../../assets/x4vfnJX.png',
        '../../assets/HJh7AjT.png',
        '../../assets/1bNL0Ft.png',
      ],
      projectLink: '//www.github.com',
      summary:
        'Developed a chrome extension that tracks the prices of furniture.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.JAVASCRIPT],
    },
    {
      id: 5,
      name: 'Mobile App',
      pictures: [
        '../../assets/x4vfnJX.png',
        '../../assets/HJh7AjT.png',
        '../../assets/1bNL0Ft.png',
      ],
      projectLink: '//www.github.com',
      summary:
        'Mobile app developed in java that tracks the departure and arrival of trains.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.JAVASCRIPT],
    },
  ];

  constructor() {}
  GetProject() {
    return this.projects;
  }

  GetById(id: number) {
    let project = this.projects.find((project) => project.id === id);
    if (project === undefined) {
      throw new TypeError('there is no project id' + id);
    }
    return project;
  }

  GetProjectByFilter(filterTag: Tag[]) {
    let filteredProject: Project[] = [];
    this.projects.forEach(function (project) {
      let foundAll = true;
      filterTag.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });
      if (foundAll) {
        filteredProject.push(project);
      }
    });
    return filteredProject;
  }
}
