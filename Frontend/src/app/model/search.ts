export class PerfilCar {
    _id:String;
    information:{
        id_dealer:String;
        name: String;
        price: String;
        way:{state: String, city: String};
        urls:String[];
    }
    constructor(_id:String = "",information:{id_dealer:String;
    name: String;
    price: String;
    way:{state: String, city: String};
    urls:String[];}={id_dealer: "", name: "", price: "", way:{state: "", city: ""},urls: ["default.png"]}){

            this.information = information;
            this._id = _id;
        }
    

}