import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Dashboard', icon: 'pi pi-home' },
          { label: 'Transactions', icon: 'pi pi-chart-line' },
          { label: 'Products', icon: 'pi pi-list' },
          { label: 'Messages', icon: 'pi pi-inbox' }
      ]
  }
}
