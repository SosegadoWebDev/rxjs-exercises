import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-videos-player',
  templateUrl: './angular-videos-player.component.html',
  styleUrls: ['./angular-videos-player.component.css']
})
export class AngularVideosPlayerComponent implements OnInit {

  apiLoaded = false;
  videoId: string = 'maI2u6Sxk9M';
  config?: YT.PlayerVars;

  constructor() { }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;

      this.config = {
        controls: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0
      }
    }
  }
}
