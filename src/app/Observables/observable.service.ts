import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  
  subject: Subject<string> = new Subject<''>();
  empName: '';
  constructor() { }

  setName(name: string) {
    //return of(name);
    this.subject.next(name);
  }

  getName() {
    return this.subject.asObservable();
  }
}
