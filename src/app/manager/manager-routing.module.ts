import { RouterModule, Routes } from '@angular/router'

import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { ManagerModule } from './manager.module'
import { NgModule } from '@angular/core'
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'
import { UserManagementComponent } from './user-management/user-management.component'

const routes: Routes = [
  { path: '', redirectTo: '/manager/home', pathMatch: 'full' },
  { path: 'home', component: ManagerHomeComponent },
  { path: 'users', component: UserManagementComponent },
  { path: 'receipts', component: ReceiptLookupComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
