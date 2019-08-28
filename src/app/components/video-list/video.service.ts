import { CardArray } from '../../../assets/card-list';

export class VideoService {
  videos = CardArray;

  getVideos() {
    return this.videos.slice();
  }

  getVideo(id: number) {
    return this.videos[id];
  }
}