import getData from "./backend";

const adsNearby = [];

//window.getData(function(setADS){});

getData(function(requestFromServer){
for(let i=0; i < requestFromServer.length; i++){
    adsNearby.push( [
        {
            "author": {
                "avatar":requestFromServer[i].author.avatar
            },
    
            "offer": {
                "title": requestFromServer[i].offer.title,
                "address": requestFromServer[i].offer.address,
                "price": requestFromServer[i].offer.price,
                "type": requestFromServer[i].offer.type,
                "rooms":  requestFromServer[i].offer.rooms,
                "guests": requestFromServer[i].offer.guests,
                "checkin": requestFromServer[i].offer.checkin,
                "checkout": requestFromServer[i].offer.checkout,
                "features": requestFromServer[i].offer.features,
                "description": requestFromServer[i].offer.description,
                "photos": requestFromServer[i].offer.photos               
            },
            "location": {
                "x": requestFromServer[i].location.x,
                "y": requestFromServer[i].location.y
            }
    
        },
        
    ]);
}
})
//console.log(adsNearby)
