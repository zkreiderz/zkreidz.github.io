import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InAppComponent } from './in-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { KrakenStandUpComponent } from './kraken-stand-up/kraken-stand-up.component';
import { KrakenStandUp2Component } from './kraken-stand-up2/kraken-stand-up2.component';
import { FriendsComponent } from './friends/friends.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ScreenTimeComponent } from './screen-time/screen-time.component';
import { AppTrackerComponent } from './app-tracker/app-tracker.component';
import { ProfileComponent } from './profile/profile.component';
import { PreferencesComponent } from './preferences/preferences.component';

const routes: Routes = [{ path: '', component: InAppComponent, children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }, { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } }, { path: 'search', component: SearchComponent, data: { text: 'Search' } }, { path: 'kraken-stand-up', component: KrakenStandUpComponent, data: { text: 'Kraken Stand-Up' } }, { path: 'kraken-stand-up2', component: KrakenStandUp2Component, data: { text: 'Kraken Stand-Up 2' } }, { path: 'friends', component: FriendsComponent, data: { text: 'Friends' } }, { path: 'add-friend', component: AddFriendComponent, data: { text: 'Add Friend' } }, { path: 'screen-time', component: ScreenTimeComponent, data: { text: 'Screen Time' } }, { path: 'app-tracker', component: AppTrackerComponent, data: { text: 'App Tracker' } }, { path: 'profile', component: ProfileComponent, data: { text: 'Profile' } }, { path: 'preferences', component: PreferencesComponent, data: { text: 'Preferences' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InAppRoutingModule {
}
