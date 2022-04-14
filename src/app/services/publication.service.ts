import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Publication} from '../models/publication';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  url="/api/publication/GetPublicationToday";
  urldelete="/api/publication/supprimer-publication";
  urlpdf="/api/pdf";
  urladd="/api/publication/add-publication";
  constructor(private http: HttpClient) { }

  getPubToday() : Observable<any>{
    return this.http.get<any>(this.url);

  }

  deletePub(id:number) : any{
    return this.http.delete(`${this.urldelete}/${id}`)
  }

  Pdf(){
    return this.http.get("http://localhost:8081/pdf/pdf");
  }
  addPublication(publication:Publication):Observable<Publication>{
    return this.http.post<Publication>(this.urladd,publication);

  }

}
