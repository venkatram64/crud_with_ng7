import { Injectable } from '@angular/core';
import { Consumer } from '../model/Consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private consumerList: Consumer[] = [
    new Consumer(1, 'venkat@venkat.com','+1234567890', 'venkat')
  ]

  constructor() { }
  getConsumer(consumerEmail: string){
    return this.consumerList.find(consumer => consumer.email === consumerEmail);
  }

  updateConsumer(consumer: Consumer){
    const consumerToUpdate = this.consumerList.find(ci => ci.id === consumer.id);
    if(consumerToUpdate !== null){
      consumerToUpdate.email = consumer.email;
      consumerToUpdate.phoneNumber = consumer.phoneNumber;
      consumerToUpdate.userName = consumer.userName;
    }
  }

  createConsumer(email: string, phoneNumber: string, userName: string){
    this.consumerList.push(new Consumer(this.getConsumer.length + 1, 
        email, phoneNumber, userName));
  }

  deleteConsumer(consumer: Consumer){
    this.consumerList.splice(this.consumerList.indexOf(consumer), 1);
  }
}
