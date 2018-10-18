import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Videos, VideoDataService } from '../../video-data.service';

@Component({
  selector: 'cg-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent  {


  videoList: Observable<Videos[]>;

  constructor(svc: VideoDataService) {
    this.videoList = svc.loadVideos();



}
}
