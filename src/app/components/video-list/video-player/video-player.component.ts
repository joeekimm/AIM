import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.sass'],
  providers: [ VideoService ]
})
export class VideoPlayerComponent implements OnInit {
  video: any;
  id: number;

  constructor(private videoService: VideoService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.video = this.videoService.getVideo(this.id);
      console.log(this.video, this.id);
    });
  }

}
