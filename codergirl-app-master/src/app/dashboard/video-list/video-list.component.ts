import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.angularbootcamp.com';



@Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  selectedVideoId: string | undefined;
  videos = [];

  constructor(http: HttpClient) {
    http
    .get<any>(API_URL + '/videos')
    .subscribe(videos => this.videos = videos);
   }

  ngOnInit() {
  }
  pickVideo(video: any) {
    this.selectedVideoId = video.id;
  }
}
