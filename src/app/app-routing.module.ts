import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LisuTabsComponent } from './auth/lisu-tabs/lisu-tabs.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';


const routes: Routes = [
  { path: "", component: LisuTabsComponent }, 
  { path: "user-profile", component: UserProfileComponent },
  { path: "dashboard", component: DashboardComponent },
  // { path: "walker", component: WalkerOwnerViewComponent },
    // { path: "owner", component: OwnerViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
