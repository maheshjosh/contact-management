import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

  image = '../../../assets/image/phone.jpg';
  filterText;
  contacts: any = [];
  //obj: any = {};

  constructor(public route: ActivatedRoute, private contactService: ApiService) {
  }

  ngOnInit() {
    // this.contactService.getContacts().subscribe((data: {}) => {
    //   this.contacts = data;
    // });
    this.contacts = this.contactService.getContacts();

  }
  deleteRocord(id, index){
    alert("Delete Successfully");
    console.log(index);
    this.contactService.deleteContact(id, index);
    this.contacts.splice(index, 1);
    
  }

}
