export class User{

    constructor(
        email: String= "",
        password: String = "",
        name: String = "",
        cellphone: String ="",
        amount:String = "",
        price:String = "",
        amountfinance:String="",
        typeofresidence:String="",
        credit:String ="",
        typeofcontract:String ="",
        income:String="",
        zip:String="",
        address: String ="",
        city: String="",
        _id: String=""
      ) {
        this.amount = amount;
        this.price= price;
        this.amountfinance = amountfinance
        this.typeofresidence = typeofresidence
        this.credit= credit
        this.typeofcontract= typeofcontract
        this.income = income
        this.zip= zip
        this.address= address
        this.city= city
        this.cellphone = cellphone
        this.email = email
        this.name= name
        this.password= password
        this._id = _id
    }
    amount:String
    price:String
    amountfinance:String
    typeofresidence:String
    credit:String
    typeofcontract:String
    income:String
    zip:String
    address: String
    city: String
    cellphone: String
    email: String
    name: String
    password: String
    _id: String
  }