import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoPlayerComponent } from './components/video-list/video-player/video-player.component';
import { BioComponent } from './components/bio/bio.component';
import { CreditsComponent } from './components/credits/credits.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'video-list', component: VideoListComponent},
  { path: 'video-player/:id', component: VideoPlayerComponent },
  { path: 'bio', component: BioComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
