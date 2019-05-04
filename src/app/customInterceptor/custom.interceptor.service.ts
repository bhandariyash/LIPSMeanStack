import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export class CustomInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone({
            headers: new HttpHeaders().set('x-access-token', 'asfsd')
        });
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }), catchError((error: HttpErrorResponse) => {
                if(error.status === 404) {
                    console.log('Invalid API call')
                }
                return throwError(error);
            })
        );
    }

}