import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
    
    constructor(private http: Http) { }
    
      post(action, data={}) {
          
        let headers = new Headers({
          'Content-Type': 'application/json'
          })
          
        return this.http.post('http://localhost:3001/api/'+action,data,{headers: headers})
                   .toPromise()
                   .then(response => {console.log(response.json().result); return response.json().result;})
  }
    
}