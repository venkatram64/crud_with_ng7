import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/model/Consumer';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  deletingConsumer: Consumer;
  toSearchConsumerEmail:string;

  constructor(private consumerService: ConsumerService) { }

  ngOnInit() {
  }

  deleteConsumer(){
    this.consumerService.deleteConsumer(this.deletingConsumer);
    this.deletingConsumer = null;
  }

  searchConsumer(){
    if(this.toSearchConsumerEmail.length > 0){
      this.deletingConsumer = this.consumerService.getConsumer(this.toSearchConsumerEmail);
    }
  }

}
