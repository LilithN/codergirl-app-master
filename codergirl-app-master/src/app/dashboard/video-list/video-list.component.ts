import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Videos, VideoDataService } from '../../video-data.service';


@Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {

  selectedVideoId: string | undefined;
  videos: Observable<Videos[]>;

  constructor(svc: VideoDataService) {
    this.videos = svc.loadVideos();
   }

  ngOnInit() {
  }
  pickVideo(video: any) {
    this.selectedVideoId = video.id;
  }
}
