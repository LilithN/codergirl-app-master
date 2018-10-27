import { Component, Input } from '@angular/core';
import { Videos } from '../../video-data.service';
import { Observable } from 'rxjs';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';



@Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent  {
  @Input() videoList: Observable<Videos[]>;

  selectedVideoId: string | undefined;

  pickVideo(videos: any) {
    this.selectedVideoId = videos.id;
  }
}
