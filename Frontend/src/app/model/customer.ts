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
        state: String ="",
        city: String="",
        age:number = 0,
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
        this.state= state
        this.city= city
        this.cellphone = cellphone
        this.email = email
        this.name= name
        this.password= password
        this._id = _id
        this.age = age
    }
    age:number
    amount:String
    price:String
    amountfinance:String
    typeofresidence:String
    credit:String
    typeofcontract:String
    income:String
    zip:String
    state: String
    city: String
    cellphone: String
    email: String
    name: String
    password: String
    _id: String
  }