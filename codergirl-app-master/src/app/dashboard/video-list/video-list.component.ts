import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Videos } from '../../video-data.service';




@Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent  {
  @Input() videoList: Videos[];
  @Output() chooseVideo = new EventEmitter<Videos>();

  selectedVideoId: string | undefined;

  pickVideo(videos: any) {
    this.selectedVideoId = videos.id;
  }
}
