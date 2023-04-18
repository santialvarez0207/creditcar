export class PerfilCar {
    _id:string;
    name:string;
    price:string;
    way:{state:string,city:string};
    url:string;

    constructor(_id:string = "",
        name:string = "",
        price:string = "", 
        way:{state:string,city:string} = {state:"",city:""},
        url:string = ""){

            this._id = _id;
            this.name = name;
            this.price = price;
            this.way = way;
            this.url = url;
        }
    
}