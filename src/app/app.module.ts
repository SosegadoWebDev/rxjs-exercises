import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppComponent } from './app.component';
import { AngularVideosPlayerComponent } from './observables/angular-videos-player/angular-videos-player.component';
import { ObservablesComponent } from './observables/observables/observables.component';

const routes: Routes = [
  { path: '', component: ObservablesComponent },
  { path: 'angular-videos', component: AngularVideosPlayerComponent },
  { path: '**', redirectTo:'', component: ObservablesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    AngularVideosPlayerComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
