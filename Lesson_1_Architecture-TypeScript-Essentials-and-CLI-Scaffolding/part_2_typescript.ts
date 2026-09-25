interface CustomerInterface {

    id: number;

    firstName: string;

    lastName: string;

    addCustomer(firstName: string, lastName: string);

    getCustomer(id: number): Customer;

}

class Customer implements CustomerInterface {

    id: number;

    firstName: string;

    lastName: string;

    constructor() { }

    addCustomer(firstName: string, lastName: string) {

        // code to add customer

    }

    getCustomer(id: number): Customer {

        return this;

    }

}
