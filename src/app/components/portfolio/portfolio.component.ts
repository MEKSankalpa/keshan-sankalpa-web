import { Component, Input } from '@angular/core';
import { TitleComponent } from '../common/title/title.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TitleComponent,MatTabsModule,MatCardModule,CommonModule,MatButtonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

@Input()
title:string = ""

mobileProjects = [
  { title: 'Project 1', category: 'Mobile', image: 'https://via.placeholder.com/400x300', description: 'You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.' },
  { title: 'Project 2', category: 'Mobile', image: 'https://via.placeholder.com/400x300', description:'You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.' },
 // { title: 'Project 2', category: 'Mobile', image: 'https://via.placeholder.com/400x300', description: 'Description of Project 2' },
  
];
}
