Steps for using this API

### 1. Download MongoDB

https://docs.mongodb.com/manual/administration/install-community/

### 2. Run These commands in the root of the folder

`npm i` - loads 

`mongod` - starts mongodb

`npm start` - starts the node server


### 3. Download Postman

https://www.getpostman.com/


After installing and opening Postman, requests can be made for the following restful routes

##### Trucks

###### POST
`http://localhost:8080/api/trucks`
Add the following JSON into the body
Select the Raw check box, and make sure to select JSON from the dropdown
```
{
        "model": "International Harvester",
        "year": 2014,
        "licenseNo": "ABC1234",
        "companyName": "Bob's Freight",
        "driverName": "Bob",
        "phoneNumber": "+447577777777",
        "emailAddress": "bob@bobsfreight.com"
}
```

###### GET
`http://localhost:8080/api/trucks`

##### PUT
`http://localhost:8080/api/trucks/:id`
Add the following JSON into the body
Select the Raw check box, and make sure to select JSON from the dropdown
```
{
        "model": "Mercedez",
        "year": 2018,
        "licenseNo": "CBA1234",
        "companyName": "Bob's Freight",
        "driverName": "Bob",
        "phoneNumber": "+447577777777",
        "emailAddress": "bob@bobsfreight.com"
        
}
```

##### DELETE
`http://localhost:8080/api/trucks/:id`

##### Locations
###### POST
`http://localhost:8080/api/trucks/:id/locations`
Add the following JSON into the body
Select the Raw check box, and make sure to select JSON from the dropdown
```
{
        "lat": 50,
        "lng": 1
}
```
