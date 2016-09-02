import { Injectable }    from '@angular/core';

@Injectable()
export class DataService {

    searchData() {
        return { 'title': 'Tytuł', 'publisher': 'Wydawca', 'isbn': 'Isbn', 'category': 'Kategoria', 'author': 'Autor' }
    }
    optionsSelect(){
        return ["Tytułll","Wydawca", "Isbn", "Kategoria", "Autor"]
    }


}


