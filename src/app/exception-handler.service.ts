import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExceptionHandlerService implements ErrorHandler{

constructor(private http:HttpClient) { }

handleError(error: Error | HttpErrorResponse | TypeError): void {
  const webHook = 'your-webhook-url';
  const moreInfo = {
    author_name : window.location.href,
    color:'#764FA5',
    title: 'Error on Logging Angular APP',
    text: error.message
  }
  const message = {
    channel:'#log',
    text: error.message,
    attachments : moreInfo
  }
  const options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  }

  this.http.post(webHook,message,{...options,responseType:'text'}).subscribe(resp=>{console.warn('Sent error to slack',resp)});
}

}
