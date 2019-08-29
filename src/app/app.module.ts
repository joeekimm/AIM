import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import { MaterialModule } from '../material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VideoListComponent } from './components/video-list/video-list.component'
import { CreditsComponent } from './components/credits/credits.component';
import { VideoComponent } from './components/video-list/video/video.component';
import { VideoPlayerComponent } from './components/video-list/video-player/video-player.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BioComponent } from './components/bio/bio.component';
import { CreditItemComponent } from './components/credits/credit-item/credit-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    CreditsComponent,
    VideoListComponent,
    VideoComponent,
    VideoPlayerComponent,
    ContactsComponent,
    BioComponent,
    CreditItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatVideoModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
