import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/model/Consumer';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editingConsumer: Consumer;
  toSearchConsumerEmail:string;

  constructor(private consumerService: ConsumerService) { }

  ngOnInit() {
  }

  searchConsumer(){
    if(this.toSearchConsumerEmail.length > 0){
      this.editingConsumer = this.consumerService.getConsumer(this.toSearchConsumerEmail);
    }
  }

  saveConsumer(){
    this.consumerService.updateConsumer(this.editingConsumer);
  }

}
