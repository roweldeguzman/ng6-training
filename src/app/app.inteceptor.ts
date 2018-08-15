import { Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        const authReq = req.clone({
            setHeaders: {
                'content-type': "application/json"
            }
        });
        return next.handle(authReq);
    }
}
