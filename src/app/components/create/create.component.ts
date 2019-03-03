import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/model/Consumer';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  email: string;
  userName: string;
  phoneNumber: string;

  constructor(private consumerServcie: ConsumerService) { }

  ngOnInit() {
  }

  saveConsumer(){

    if(this.validFields()){
      this.consumerServcie.createConsumer(this.email,this.phoneNumber,this.userName);
    }
  }

  private validFields(): boolean{
    return (this.email.length > 0 && this.phoneNumber.length > 0 && this.userName.length > 0);
  }

}
