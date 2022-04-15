import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';
//import * as moment from 'moment';



const url = "api/Feedback/";
  const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  

  constructor(private http : HttpClient) { }


  addFeedback(feedback:Feedback){
    // const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm'; 
    // feedback.sendingDate= moment(new Date(),DATE_TIME_FORMAT );
    // feedback.lastModificationDate = moment(new Date(),DATE_TIME_FORMAT );

        return this.http.post<Feedback>(url+"/AddAffectFeedbackUsers"/*+us+"/"+iduser*/,feedback);
      } 



    getAllfeedbacks(): Observable<Feedback[]> {
      return this.http.get<Feedback[]>(url + 'getFeedbackByClient', httpOptions);
    }




    deleteFeedbackById(id:number){
          return this.http.delete(url+"DeleteFeedback/"+id);
        }
      
   
  
}