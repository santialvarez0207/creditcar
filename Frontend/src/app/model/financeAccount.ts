
export class DataFinance{
    age: number;
    amount:number; 
    price:number;
    amountfinance:number;
    typeofresidence:string; 
    credit:string;
    typeofcontract:string;
    income:number;  
    zip:string;
    state: string;
    city:string;

    constructor(age:number= 0, amount:number = 0, price:number = 0, amountfinance:number =0,
    typeofresidence:string="", credit:string = "", typeofcontract:string="", income:number = 0,  zip:string = "",
    state: string = "",city:string = ""){
        
        this.age = age; 
        this.amount = amount;
        this.price = price;
        this.amountfinance = amountfinance;
        this.typeofresidence = typeofresidence; 
        this.credit = credit;
        this.typeofcontract = typeofcontract;
        this.income = income;
        this.zip = zip;
        this.state = state;
        this.city = city;
    }
}


export class infoDealer{
    _id: string = ""
    name: string = ""
    percent: number = 0
    state: string = ""
    city: string = ""
}