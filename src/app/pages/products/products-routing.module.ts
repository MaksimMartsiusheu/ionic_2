import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductsPage} from './products.page';

const routes: Routes = [
    {
        path: '',
        component: ProductsPage
    },
    {
        path: ':id',
        loadChildren: '../product/product.module#ProductPageModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsPageRoutingModule {
}
