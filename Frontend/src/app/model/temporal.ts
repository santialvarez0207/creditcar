export class Temporal{

    constructor(
        id: string ="", 
        user: string ="", 
        session: boolean = true,

      ) {
      this.id = id
      this.user = user
      this.session = session
    }
    user: string;
    id: string;
    session: boolean;
  }