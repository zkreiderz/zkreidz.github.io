import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InAppRoutingModule } from './in-app-routing.module';
import { InAppComponent } from './in-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IgxCardModule, IgxButtonModule, IgxToggleModule, IgxDropDownModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxInputGroupModule, IgxSwitchModule, IgxButtonGroupModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { KrakenStandUpComponent } from './kraken-stand-up/kraken-stand-up.component';
import { KrakenStandUp2Component } from './kraken-stand-up2/kraken-stand-up2.component';
import { FriendsComponent } from './friends/friends.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ScreenTimeComponent } from './screen-time/screen-time.component';
import { AppTrackerComponent } from './app-tracker/app-tracker.component';
import { ProfileComponent } from './profile/profile.component';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  declarations: [
    InAppComponent,
    DashboardComponent,
    SearchComponent,
    KrakenStandUpComponent,
    KrakenStandUp2Component,
    FriendsComponent,
    AddFriendComponent,
    ScreenTimeComponent,
    AppTrackerComponent,
    ProfileComponent,
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    InAppRoutingModule,
    IgxCardModule,
    IgxButtonModule,
    FormsModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxSwitchModule,
    IgxButtonGroupModule,
    IgxNavigationDrawerModule
  ]
})
export class InAppModule {
}
