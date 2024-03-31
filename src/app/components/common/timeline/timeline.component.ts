import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

  @Input()
  item={
    title: "",
    company:"",
    description:""

  };
}
