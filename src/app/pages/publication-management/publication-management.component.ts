import { Component, OnInit } from '@angular/core';
import {Publication} from '../../models/publication';
import {PublicationService} from '../../services/publication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-publication-management',
  templateUrl: './publication-management.component.html',
  styleUrls: ['./publication-management.component.scss']
})
export class PublicationManagementComponent implements OnInit {
  public listPub:Publication[];
  // public pageSlice = this.listPub.slice(0,3);
  publication : Publication =new Publication();
  constructor(private publicationservice: PublicationService,private router: Router) { }

  ngOnInit(): void {
    this.publicationservice.getPubToday().subscribe(
      res=>{
        console.log(res);
        this.listPub=res;
      }
    );


  }


  deletePub(publication:any){
    this.publicationservice.deletePub(publication.idPublication).subscribe(()=>this.publicationservice.getPubToday().subscribe(
        data=>{
          this.listPub=data

        }
      )
    );

  }
  /*
  onPageChange(event: PageEvent){
  const startIndex= +event.pageSize;
  let endIndex = startIndex + event.pageSize;
  if(endIndex>this.listPub.length)
  {
   endIndex= this.listPub.length;

  }
  this.pageSlice= this.listPub.slice(startIndex,endIndex)

  }
  */

  PDF(){
    this.publicationservice.Pdf().subscribe(
      res=>{
        console.log(res);

      }
    );

  }







}

