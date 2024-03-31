import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { TitleComponent } from '../common/title/title.component';
import { TimelineComponent } from '../common/timeline/timeline.component';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../common/grid/grid.component';
@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [MatTabsModule,TitleComponent,TimelineComponent,CommonModule,GridComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
 title = "About Me"

 experiences = [
  { title: 'Associate Software Engineer | Jan 2023 - Sept 2023', company: "AIZENIT,71-75 Shelton Street, London,GreaterLondon,United Kingdom", description: 'You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.' },
  { title: 'Software Engineer Intern | Aug 2022 - Jan 2023', company: "AIZENIT,71-75 Shelton Street, London,GreaterLondon,United Kingdom", description: 'You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.' },
 // { title: 'Project 2', category: 'Mobile', image: 'https://via.placeholder.com/400x300', description: 'Description of Project 2' },
  
];

technologies = [
  { title: 'ASP.NET', value: 80 },
  { title: 'Angular', value: 80 },
  { title: 'Laravel', value: 80 },
  { title: 'ProsgreSQL', value: 80 },
  { title: 'MySQL', value: 80 },
  
];

}
