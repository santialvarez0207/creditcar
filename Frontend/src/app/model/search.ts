export class PerfilCar {
    _id:String;
    information:{
        id_dealer:String;
        name: String;
        price: String;
        way:{state: String, city: String};
        url:String;
    }
    constructor(_id:String = "",information:{id_dealer:String;
    name: String;
    price: String;
    way:{state: String, city: String};
    url:String;}={id_dealer: "", name: "", price: "", way:{state: "", city: ""},url: ""}){

            this.information = information;
            this._id = _id;
        }
    

}