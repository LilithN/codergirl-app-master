import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Videos, VideoDataService } from '../../video-data.service';

@Component({
  selector: 'cg-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent  {

 videos: Observable<Videos[]>;
  currentVideo: Videos;

  constructor(svc: VideoDataService) {
    this.videos = svc.loadVideos();
}
setSelected(video: Videos) {
  console.log('we got the video', video);
  this.currentVideo = video;
}

}
