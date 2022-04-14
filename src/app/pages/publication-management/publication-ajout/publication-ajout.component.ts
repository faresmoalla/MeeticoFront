import { Component, OnInit } from '@angular/core';
import {Publication} from '../../../models/publication';
import {PublicationService} from '../../../services/publication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-publication-ajout',
  templateUrl: './publication-ajout.component.html',
  styleUrls: ['./publication-ajout.component.scss']
})
export class PublicationAjoutComponent implements OnInit {

  constructor(private publicationservice: PublicationService,private router: Router) { }

  ngOnInit(): void {
  }

publication : Publication= new Publication();
  addPub(){
this.publicationservice.addPublication(this.publication).subscribe(()=>this.router.navigateByUrl
("publication-management"));
  }







}
