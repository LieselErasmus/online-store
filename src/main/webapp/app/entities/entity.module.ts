import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: './product/product.module#OnlineProductModule'
      },
      {
        path: 'product-category',
        loadChildren: './product-category/product-category.module#OnlineProductCategoryModule'
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#OnlineCustomerModule'
      },
      {
        path: 'product-order',
        loadChildren: './product-order/product-order.module#OnlineProductOrderModule'
      },
      {
        path: 'order-item',
        loadChildren: './order-item/order-item.module#OnlineOrderItemModule'
      },
      {
        path: 'invoice',
        loadChildren: './invoice/invoice.module#OnlineInvoiceModule'
      },
      {
        path: 'shipment',
        loadChildren: './shipment/shipment.module#OnlineShipmentModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnlineEntityModule {}
