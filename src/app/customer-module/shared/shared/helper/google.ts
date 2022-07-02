export class GoogleHelper {

  static getAddrComponent(place:any, componentTemplate:any) {
    let result;

    // if(place.address_components!=undefined)
    // {
    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
  //}
    return;
  }

  static getName(place:any) {
    const COMPONENT_TEMPLATE = { name: 'name' },
      name = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return name;
  }
  
  static getStreetNumber(place:any) {
    const COMPONENT_TEMPLATE = { street_number: 'short_name' },
      streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return streetNumber;
  }

  static getStreet(place:any) {
    const COMPONENT_TEMPLATE = { route: 'long_name' },
      street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return street;
  }

  static getCity(place:any) {
    const COMPONENT_TEMPLATE = { locality: 'long_name' },
      city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return city;
  }

  static getState(place:any) {
    const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }
  static getStateLong(place:any) {
    const COMPONENT_TEMPLATE = { administrative_area_level_1: 'long_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }
  

  static getDistrict(place:any) {
    const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  static getCountryShort(place:any) {
    const COMPONENT_TEMPLATE = { country: 'short_name' },
      countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return countryShort;
  }

  static getCountry(place:any) {
    const COMPONENT_TEMPLATE = { country: 'long_name' },
      country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return country;
  }

  static getPostCode(place:any) {
    const COMPONENT_TEMPLATE = { postal_code: 'long_name' },
      postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return postCode;
  }

  static getPhone(place:any) {
    const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' },
      phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return phone;
  }
  
  static getGeometry(place:any, componentTemplate:any) {
    const COMPONENT_TEMPLATE = 'geometry',
      geo = place.geometry[COMPONENT_TEMPLATE];

    return geo;
  }

  static getLocation(place:any) {
    const COMPONENT_TEMPLATE = 'location',
      location = place.geometry[COMPONENT_TEMPLATE];

    return location;
  }

  static getLocationLat(place:any) {
    const COMPONENT_TEMPLATE = 'lat',
      lat = place.geometry.location[COMPONENT_TEMPLATE];

    return lat;
  }

  static getLocationLng(place:any) {
    const COMPONENT_TEMPLATE = 'lng',
      lng = place.geometry.location[COMPONENT_TEMPLATE];

    return lng;
  }

  static getViewport(place:any) {
    const COMPONENT_TEMPLATE = 'viewport',
      view = place.geometry[COMPONENT_TEMPLATE];

    return view;
  }

  static getNorthEastViewport(place:any) {
    const COMPONENT_TEMPLATE = 'northeast',
      ne = place.geometry[COMPONENT_TEMPLATE];

    return ne;
  }

  static getSouthWestViewport(place:any) {
    const COMPONENT_TEMPLATE = 'southwest',
      sw = place.geometry[COMPONENT_TEMPLATE];

    return sw;
  }
  
}