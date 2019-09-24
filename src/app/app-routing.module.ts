import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LisuTabsComponent } from "./auth/lisu-tabs/lisu-tabs.component";
import { DashboardComponent } from "./containers/dashboard/dashboard.component";
import { UserProfileComponent } from "./containers/user-profile/user-profile.component";
import { WalkerNewRequestsComponent } from "./walker-new-requests/walker-new-requests.component";
import { WalkerRecentRequestComponent } from "./walker-dashboard/walker-recent-request/walker-recent-request.component";
import { WalkerDashboardComponent } from "./walker-dashboard/walker-dashboard.component";
import { OwnerDashboardComponent } from "./owner-dashboard/owner-dashboard.component";
import { AvailableWalkersComponent } from "./owner-dashboard/available-walkers/available-walkers.component";
import { AuthGuardService as AuthGuard } from "./auth-guard.service";

const routes: Routes = [
  { path: "", component: LisuTabsComponent },
  {
    path: "user-profile",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "newrequest",
    component: WalkerNewRequestsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "walkerrecent",
    component: WalkerRecentRequestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "walkerdash",
    component: WalkerDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "ownerdash",
    component: OwnerDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "availwalker",
    component: AvailableWalkersComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", redirectTo: "" }
  // { path: "walker", component: WalkerOwnerViewComponent, canActivate: [AuthGuard] },
  // { path: "owner", component: OwnerViewComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
