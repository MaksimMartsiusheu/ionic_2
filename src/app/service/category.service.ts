import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) {
    }

    getAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(environment.apiCategoryUrl);
    }

    getCategoryById(id): Observable<Category> {
        return this.http.get<Category>(`${environment.apiCategoryUrl}/${id}`);
    }
}
