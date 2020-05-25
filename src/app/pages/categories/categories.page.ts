import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Observable} from 'rxjs';
import {Category} from '../../model/category';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.page.html',
    styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

    private categories: Observable<Category[]>;

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.categories = this.categoryService.getAllCategories();
    }
}
