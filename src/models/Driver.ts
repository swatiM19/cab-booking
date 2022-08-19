import {User} from './User';
import Cab from './Cab';

export default class Driver extends User{
    driverId: number;
    driverLicense: string;
    rating: number;
    isAvailable: boolean = true;

    constructor() {
        super();

    }

}
