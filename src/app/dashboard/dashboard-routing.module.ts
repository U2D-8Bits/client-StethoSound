import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path:'welcome',
        title: 'Inicio',
        component: WelcomePageComponent
      },
      {
        path: 'users',
        title: 'Usuarios',
        component: UsersPageComponent
      },
      {
        path: 'settings',
        title: 'Configuración',
        component: SettingsPageComponent
      },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
