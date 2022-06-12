
// User
export default class User {


    constructor(obj) {
        obj = obj != null ? obj : {};
        this.id = obj.id != null ? obj.id : '';
        this.name = obj.name != null ? obj.name : '';
        this.email = obj.email != null ? obj.email : '';
        this.phone = obj.phone != null ? obj.phone : '';
        this.countryCode = obj.countryCode != null ? obj.counryCode : '';
    }

        
}