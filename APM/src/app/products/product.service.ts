import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private productUrl = 'api/products/products.json'; //in real life this would be an actual url to an api
    constructor(private http: HttpClient){}
    getProducts(): Observable<IProduct[]>{
    
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
        
        //This hard coded data is replaced by the code above.
        // return [
        //     {
        //       "productId": 1,
        //       "productName": "Leaf Rake",
        //       "productCode": "GDN-0011",
        //       "releaseDate": "March 19, 2021",
        //       "description": "Leaf rake with 48-inch wooden handle.",
        //       "price": 19.95,
        //       "starRating": 3.2,
        //       "imageUrl": "assets/images/leaf_rake.png"
        //     },
    //    .
    //    .
    //    .

    }
    private handleError(err:HttpErrorResponse){
        // in a real world app, we might send the server to a remote logging infrastructure
        // instead of just logging it to the console.
        let errorMessage = '';
        
        if(err.error instanceof ErrorEvent){
            //A client-side or netword error occurred. Handle it accordingly.
            errorMessage = `Opps! Something went wrong: ${err.error.message}`;
        }else{
            //The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            errorMessage = `Server returned code: ${err.status},error message is: ${err.message}`;

        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }
}