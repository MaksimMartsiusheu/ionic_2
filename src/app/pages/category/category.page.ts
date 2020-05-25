import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute} from '@angular/router';
import {EMPTY} from 'rxjs';
import {Category} from '../../model/category';
import {flatMap} from 'rxjs/operators';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

    private category: Category;
    private parentCategory: Category;

    constructor(private categoryService: CategoryService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const categoryId = this.activatedRoute.snapshot.paramMap.get('id');
        this.categoryService.getCategoryById(categoryId)
            .pipe(
                flatMap(category => {
                        this.category = category;
                        if (category.parentId) {
                            return this.categoryService.getCategoryById(category.parentId);
                        } else {
                            return EMPTY;
                        }
                    }
                )).subscribe(category => {
            this.parentCategory = category;
        });

    }
}
