
export class DataFinance{

    amount:String; 
    price:String;
    amountfinance:String;
    typeofresidence:String; 
    credit:String;
    typeofcontract:String;
    income:String;  
    zip:String;
    address:String;
    city:String;
    cellphone:String;
    email:String;

    constructor(amount:String = "", price:String = "", amountfinance:String ="",
    typeofresidence:String="", credit:String = "", typeofcontract:String="", income:String = "",  zip:String = "",
     address:String = "",city:String = "", cellphone:String = "", email:String = "" ){

        this.amount = amount;
        this.price = price;
        this.amountfinance = amountfinance;
        this.typeofresidence = typeofresidence; 
        this.credit = credit;
        this.typeofcontract = typeofcontract;
        this.income = income;  
        this.zip = zip;
        this.address = address;
        this.city = city;
        this.cellphone = cellphone;
        this.email = email;
    }
}