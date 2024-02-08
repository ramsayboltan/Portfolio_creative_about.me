import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CollapseModule} from 'ngx-bootstrap/collapse'
import {AccordionModule} from 'ngx-bootstrap/accordion'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    NavComponent,
    ProjectCardComponent,
    ProjectModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule
  ],
  providers: [provideClientHydration(), BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
