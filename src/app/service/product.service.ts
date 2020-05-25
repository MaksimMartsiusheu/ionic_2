import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Product} from '../model/product';
import {CacheService} from 'ionic-cache';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient,
                private cache: CacheService) {
    }

    getAllProducts(): Observable<Product[]> {
        return this.cache.loadFromObservable(environment.apiProductUrl,
            this.http.get<Product[]>(environment.apiProductUrl));
    }

    getProductById(id): Observable<Product> {
        return this.cache.loadFromObservable(`product-${id}`,
            this.http.get<Product>(`${environment.apiProductUrl}/${id}`));
    }
}
