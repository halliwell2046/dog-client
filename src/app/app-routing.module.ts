import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LisuTabsComponent } from './auth/lisu-tabs/lisu-tabs.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { WalkerNewRequestsComponent } from './walker-new-requests/walker-new-requests.component';
import { WalkerRecentRequestComponent } from './walker-dashboard/walker-recent-request/walker-recent-request.component';
import { WalkerDashboardComponent } from './walker-dashboard/walker-dashboard.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { OwnrWalkerviewComponent } from './ownr-walkerview/ownr-walkerview.component';
import { WlkrOwnrviewComponent } from './dog-owner-create/wlkr-ownrview/wlkr-ownrview.component';



const routes: Routes = [
  { path: "", component: LisuTabsComponent }, 
  { path: "user-profile", component: UserProfileComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "newrequest", component: WalkerNewRequestsComponent},
  { path: "walkerrecent", component: WalkerRecentRequestComponent },
  { path: "walkerdash", component: WalkerDashboardComponent },
  { path: "ownerdash", component: OwnerDashboardComponent },
  { path: "owner", component: OwnrWalkerviewComponent },
  { path: "walker", component: WlkrOwnrviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
