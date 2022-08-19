import Location from "./Location";

export default class Cab {
    cabId: number;
    isbooked: boolean = false;
    customerPickupLocation: Location;
    customerDropLocation: Location;

    constructor(cabId: number) {
        this.cabId = cabId;
    }

    public bookCab(customerPickupLocation: Location, customerDropLocation: Location){
        this.isbooked = true;
        this.customerPickupLocation = customerPickupLocation;
        this.customerDropLocation = customerDropLocation;
    }
}
