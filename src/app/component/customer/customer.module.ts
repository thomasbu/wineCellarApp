import { NgModule } from '@angular/core';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

import { NavBarModule } from '../navbar/navbar.module';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
	declarations: [CustomersComponent, NewcustomerComponent, CustomerDetailComponent],
	imports: [SharedModule, CustomerRoutingModule, NavBarModule],
})
export class CustomerModule {}
