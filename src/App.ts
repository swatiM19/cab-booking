import Cab from './models/Cab';
import Rider from "./models/Rider";
import Location from "./models/Location";

export default class App {
    private cabs: Cab[] = [];

    constructor() {
        this.cabs.push(new Cab(1)); // register cab 1
        this.cabs.push(new Cab(2)); // register cab 2
    }

    public startTrip(source:Location, destination: Location, rider: Rider) {
        // check distance
        // Find drivers
    }

    public endTrip() {

    }


}
