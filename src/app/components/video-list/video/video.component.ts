import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { VideoService } from '../video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass'],
  providers: [ VideoService ]
})
export class VideoComponent implements OnInit {
  properties: any;

  @Input() set video(video: any) {
    this.properties = video;
  }
  @Input() index: number;

  constructor(private videoService: VideoService, private route: ActivatedRoute) { 
  }
  
  ngOnInit() {
  }
}
