import { Injectable }    from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ApiService } from '../services/api';

@Injectable()
export class IsLoggedService {
    constructor(private apiService: ApiService) { console.log('IS LOGGED')}
    
    token = Cookie.get('cookie.s')
    
    isLogged(){
        let logged = Cookie.get('cookie.is');
        if(logged == null){
            logged = '0';
        }
        return logged;
    }
    
//    checkToken(){
//        this.apiService.post('isLog', {token: this.token})
//            .then(log => {
//                console.log(log.result);
//                
//            });
//    }
}

