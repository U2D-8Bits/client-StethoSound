import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    WelcomePageComponent,
    UsersPageComponent,
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule
  ],
  exports: [
    DashboardLayoutComponent,
    WelcomePageComponent,
    UsersPageComponent,
    SettingsPageComponent
  ]
})
export class DashboardModule { }
