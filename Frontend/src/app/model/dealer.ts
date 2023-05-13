export class Dealer {
      _id:String = "";
      user:  String = ""
      password: String = ""
      email: String = ""
      phone_number:  String = ""
      nit: String = "";
      location = {
          address:  String,
          state: String,
          city: String
      }

      contact_ids: string[] = []
      registration_date: Date = new Date
  
      credit_requirements = {
          age: Number,
          amount:Number, 
          price:Number,
          amountfinance:Number,
          typeofresidence:String, 
          credit:String,
          typeofcontract:String,
          income:String,  
          zip:String,
      }
      percent: Number = 0
    }
   
