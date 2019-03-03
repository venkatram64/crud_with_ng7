export class Consumer {
    createdAt: Date;
    constructor(public id: number,
        public email: string, 
        public phoneNumber: string,
        public userName: string){
            this.createdAt = new Date();
        }
}