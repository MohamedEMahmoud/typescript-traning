import faker from 'faker';
import { Mappable } from "./CustomMap";

export class User implements Mappable {
    username: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = "black";
    constructor() {
        this.username = faker.name.firstName();
        this.location = 
        {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        }
    }
    markerContent() {
        return `
            <div> 
                <h3> User Name: <h3>
                <h2> ${this.username}</h2> 
            </div>
        `
    }
}