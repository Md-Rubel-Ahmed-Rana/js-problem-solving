// console the value of city
const data = {
    location: [
        {
            latitude: "34.5, 37.8",
            langitude: "98.77, 58.7",
            city: "Hyderrabad",
            country: "India"
        }
    ]
}
const city = data.location[0].city;
console.log( "I have found  the city named : ",  city);





// <======================================>
// 1. Console the value of email
// 2. Console the value of address
// 3. Console the value of  city
// 4. Console the value of lat
// 5. Console the value of company name
const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}
// 1. Console the value of email
const email = user.email;
console.log("Email is: ", email);

// 2. Console the value of address
const address = user.address;
console.log("Address is: ", address);

// 3. Console the value of  city
const getCity = user.address.city;
console.log("User city is: ", getCity);

// 4. Console the value of lat
const latitude = user.address.geo.lat;
console.log("User latitude is: ", latitude);

// 5. Console the value of company name
const companyName = user.company.name;
console.log( "Company name is: " ,companyName);