import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {CacheService} from 'ionic-cache';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient,
                private cache: CacheService) {
    }

    getAllCategories(): Observable<Category[]> {
        return this.cache.loadFromObservable(environment.apiCategoryUrl,
            this.http.get<Category[]>(environment.apiCategoryUrl));
    }

    getCategoryById(id): Observable<Category> {
        return this.cache.loadFromObservable(`category-${id}`,
            this.http.get<Category>(`${environment.apiCategoryUrl}/${id}`));
    }
}
