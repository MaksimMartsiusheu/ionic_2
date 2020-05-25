import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute} from '@angular/router';
import {flatMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.page.html',
    styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

    private product: Product;
    private productCategory: Category;

    constructor(private productService: ProductService,
                private categoryService: CategoryService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const productId = this.activatedRoute.snapshot.paramMap.get('id');
        this.productService.getProductById(productId)
            .pipe(
                flatMap(product => {
                        this.product = product;
                        return this.categoryService.getCategoryById(product.categoryId);
                    }
                )).subscribe(category => {
            this.productCategory = category;
        });

    }

}
