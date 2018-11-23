import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.scss']
})
export class DisplayContactComponent implements OnInit {

  image = '../../../assets/image/phone.jpg';
  contact: any = {};
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ApiService) {
    route.params.subscribe(params => {
      if (params.id) {
        // contactService.getContactById(params.id).subscribe((data: any) => {
        //   this.contact = data;
        // });
        this.id = params.id;
        this.contact = contactService.getContactById(params.id);
      }
    });
  }
  
  submitForm(id, contact) {
    // this.contactService.updateContact(id, contact).subscribe((result) => {
    //   console.log(result);
    // }, (err) => {
    //   console.log(err);
    // });
    this.contact = this.contactService.updateContact(id, contact);
    this.router.navigate(['//view-contact']);
  }
  

  ngOnInit() {
  }

  
}
