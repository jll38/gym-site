export class Traffic {
    ip_address: string;
    ip_type: string;
    location: Location;
    constructor(ip_address: string, ip_type: string, location: Location){
        this.location = location;
        this.ip_address = ip_address;
        this.ip_type = ip_type;
        
    }
}

export class Coordinate {
    latitude: number;
    longitude: number;

    constructor(longitude: number, latitude: number){
        this.longitude = longitude;
        this.latitude = latitude; 
    }
}

export class Location {
  city: string;
  region_name: string;
  region_code: string;
  country_name: string;
  country_code: string;
  continent_name: string;
  continent_code: string;
  zip_code: string;
  coordinates: Coordinate;

  constructor(
    city: string,
    region_name: string,
    region_code: string,
    country_name: string,
    country_code: string,
    continent_name: string,
    continent_code: string,
    zip_code: string,
    coordinates: Coordinate,
    
  ) {
    this.city = city;
    this.region_name = region_name;
    this.region_code = region_code;
    this.country_name = country_name;
    this.country_code = country_code;
    this.continent_name = continent_name;
    this.continent_code = continent_code;
    this.zip_code = zip_code;
    this.coordinates = coordinates
  }

  getCoordinates(): number[]{
    return [this.coordinates.latitude, this.coordinates.longitude]
  }

  toString(): string{
    return `${this.city}, ${this.region_name}, ${this.region_name}, ${this.country_code}`
  }

}
