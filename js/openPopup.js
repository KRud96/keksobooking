import closePopup from "./closePopup";

function openPopup(pinId, adsNearby){
        
    const templateCardPopup = document.querySelectorAll('template')[0].content.children[0];
    const cardElementTemplate = templateCardPopup.cloneNode(true);
    cardElementTemplate.children[2].textContent = adsNearby[pinId][0].offer.title;
    cardElementTemplate.children[3].textContent = adsNearby[pinId][0].offer.address;
            // отрисовка блока стоимости
    cardElementTemplate.children[4].textContent = adsNearby[pinId][0].offer.price + " " + String.fromCharCode(8381) + "/ночь";
    cardElementTemplate.children[4].style.fontFamily = "ALSRubl";
    cardElementTemplate.children[4].style.src = "fonts/rouble.ttf";
    cardElementTemplate.children[4].style.fontSize = "22px";
    cardElementTemplate.children[4].style.fontWeight = "bold";
            
    if(adsNearby[pinId][0].offer.type == "flat"){
        cardElementTemplate.children[5].textContent = "Квартира";
    }else if(adsNearby[pinId][0].offer.type == "bungalo"){
        cardElementTemplate.children[5].textContent = "Бунгало";
    }else if(adsNearby[pinId][0].offer.type == "house"){
        cardElementTemplate.children[5].textContent = "Дом";
    }else{
        cardElementTemplate.children[5].textContent = "Дворец"
    };
    cardElementTemplate.children[6].textContent = adsNearby[pinId][0].offer.rooms + " комнаты для " + adsNearby[pinId][0].offer.guests + " гостей";
    cardElementTemplate.children[7].textContent = "Заезд после " + adsNearby[pinId][0].offer.checkin + ", выезд до " + adsNearby[pinId][0].offer.checkout;
            //cardElementTemplate.children[].textContent = "Заезд после " + adsNearby[0].offer.checkin + ", выезд до " + adsNearby[0].offer.checkout; // блок с выделенными удобствами
    cardElementTemplate.children[9].textContent = adsNearby[pinId][0].offer.description;
    const k = adsNearby[pinId][0].offer.features.length;
    if(k == 6){
        
    }else{
        for(let j = adsNearby[pinId][0].offer.features.length; j < 6; j++){
                // for(var k = adsNearby[0].offer.features.length; k < featuresMassive.length; k++){
                    
                    //continue;
                //}else{
            try{
                    const elemLi = cardElementTemplate.children[8].children[6 - j];  
                elemLi.remove();}catch{
                    const elemLi = cardElementTemplate.children[8].children[0];  
                    elemLi.remove();
                }   
        }
    }
    const popupPictures = cardElementTemplate.children[10];
    const liPopupPictures = popupPictures.children[0];
    for(let m = 0; m < adsNearby[pinId][0].offer.photos.length; m++){
        //liPopupPictures.setAttribute('style', 'border: 5px')
    const elementLi = liPopupPictures.cloneNode(true);
        elementLi.children[0].setAttribute('src', adsNearby[pinId][0].offer.photos[m]); //= adsNearby[0].offer.photos[m];
        elementLi.children[0].setAttribute('style', "width: 40px; height: 40px;");
        popupPictures.appendChild(elementLi);
    }
cardElementTemplate.children[0].textContent = adsNearby[pinId][0].author.avatar;
mapPins.appendChild(cardElementTemplate);
closePopup();
}
export default openPopup;