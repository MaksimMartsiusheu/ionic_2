import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

    private products: Observable<Product[]>;

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.products = this.productService.getAllProducts();
    }

}
