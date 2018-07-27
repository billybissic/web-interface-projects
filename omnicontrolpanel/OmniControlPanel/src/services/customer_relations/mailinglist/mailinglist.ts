export class Mailinglist {
    public entry_id: number;
    public first_name: string;
    public last_name: string;
    public email: string;
    public birthday: string;
    constructor(entry_id, first_name, last_name, email, birthday) {
        this.entry_id = entry_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.birthday = birthday;
    }
}