
export class DataFinance{
    age: number;
    amount:number; 
    price:number;
    amountfinance:number;
    typeofresidence:string; 
    credit:string;
    typeofcontract:string;
    income:string;  
    zip:string;
    country: string
    city:string;

    constructor(age:number= 0, amount:number = 0, price:number = 0, amountfinance:number =0,
    typeofresidence:string="", credit:string = "", typeofcontract:string="", income:string = "",  zip:string = "",
    country: string = "",city:string = ""){
        
        this.age = age; 
        this.amount = amount;
        this.price = price;
        this.amountfinance = amountfinance;
        this.typeofresidence = typeofresidence; 
        this.credit = credit;
        this.typeofcontract = typeofcontract;
        this.income = income;
        this.zip = zip;
        this.country = country;
        this.city = city;
    }
}


export class infoDealer{
    _id: string = ""
    name: string = ""
    percent: number = 0
    country: string = ""
    city: string = ""
}