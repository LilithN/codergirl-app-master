import { Component, Input } from '@angular/core';
import { Videos } from 'src/app/video-data.service';

@Component({
  selector: 'cg-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent  {
  @Input() v: Videos;

  constructor() { }



}
