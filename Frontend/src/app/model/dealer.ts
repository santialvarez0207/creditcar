export class Dealer {
      _id:String = "";
      user:  String = ""
      password: String = ""
      email: String = ""
      phone_number:  String = ""
      nit: String = "";
      
      location : location = new location

      contact_ids: string[] = []
      registration_date: Date = new Date
  
      credit_requirements:credit_requirements = new credit_requirements
      percent: Number = 0

      
    }
   
    class credit_requirements {
        age: Number = 0
        amount:Number = 0 
        price:Number = 0
        amountfinance:Number = 0
        typeofresidence:String ="" 
        credit:String=""
        typeofcontract:String=""
        income:number= 0 
        zip:String=""
    }
    class location  {
        address:  String=""
        state: String=""
        city: String=""
    }