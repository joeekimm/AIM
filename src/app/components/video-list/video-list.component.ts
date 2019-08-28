import { Component, OnInit } from '@angular/core';

import { CardArray } from '../../../assets/card-list';
import { VideoService } from './video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.sass'],
  providers: [ VideoService ]
})
export class VideoListComponent implements OnInit {
  videos = CardArray;
  index: number;

  constructor(private videoService: VideoService) {
    
  }

  ngOnInit() {
    this.videos = this.videoService.getVideos();
    console.log('this is videos: ', this.videos);
    // this.route.paramMap.subscribe((params) => {
    //   this.id = +params['id'];
    // })
  }

}
