import { Component, Input } from '@angular/core';
import { Videos } from '../../video-data.service';



@Component({
  selector: 'cg-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  @Input() video: Videos;


}
