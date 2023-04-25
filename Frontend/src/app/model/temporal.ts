export class Temporal{

    constructor(
        id: string ="", 
        name: string ="", 
        session: boolean = true,

      ) {
      this.id = id
      this.name = name
      this.session = session
    }
    name: string;
    id: string;
    session: boolean;
  }