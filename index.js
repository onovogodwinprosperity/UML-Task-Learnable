class RealEstate {
    constructor(propertyId, propertyName, location, price) {
      this.propertyId = propertyId;
      this.propertyName = propertyName;
      this.location = location;
      this.price = price;
    }
  
    // Instance method: Display property details
    displayDetails() {
      return `Property: ${this.propertyName}, Location: ${this.location}, Price: $N{this.price}`;
    }
  
    // Static method: Compare two properties by price
    static compareByPrice(propertyA, propertyB) {
      return propertyA.price - propertyB.price;
    }
  
    // Static method: Filter properties by location
    static filterByLocation(properties, location) {
      return properties.filter((property) => property.location === location);
    }
  }
  
  // Example usage:
  const property1 = new RealEstate(1, "Emene-Nike", "Enugu", 750000);
  const property2 = new RealEstate(2, "Owoh", "Enugu", 500000);
  const property3 = new RealEstate(3, "Nkanu-East", "Enugu", 850000);
  
  console.log(property1.displayDetails());
  console.log(property2.displayDetails());
  
  // Compare prices
  console.log("Price Difference:", RealEstate.compareByPrice(property1, property2));
  
  // Filter properties by location
  const enuguProperties = RealEstate.filterByLocation(
    [property1, property2, property3],
    "Enugu"
  );
  console.log("Enugu Properties:", enuguProperties);
  
