import Rider from './Rider';
import Driver from './Driver';
import {TripStatus} from "./TripStatus";

export class Trip {
    id: number;
    driver: Driver;
    rider: Rider;
    tripStatus: TripStatus;

    constructor(rider: Rider,  driver: Driver) {
    }

}
