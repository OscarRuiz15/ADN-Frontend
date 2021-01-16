import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {LoaderService} from './loader.service';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  private request: HttpRequest<any>[] = [];

  constructor(public loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.request.push(req);
    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.removeRequests(req);
        if (this.request.length === 0) {
          this.loaderService.hide();
        }
      })
    );
  }

  private removeRequests(peticion: HttpRequest<any>): void {
    const indexRequest = this.request.indexOf(peticion);
    if (indexRequest >= 0) {
      this.request.splice(indexRequest, 1);
    }
  }
}
