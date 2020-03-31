let firstClickOnMainPin = true;
const map = document.querySelector('.map');
const mapPinMain = document.querySelector('.map__pin--main');
const mapPins = document.querySelector('.map__pins');
const pinsoverlay = document.querySelector('.map__pinsoverlay');
const HTML = document.querySelector('html');


const mapClickHandler = function(evt){ 
    evt.preventDefault();
    
    if(firstClickOnMainPin ===true ){
        const templateContentButton = document.querySelectorAll('template')[0].content.children[1];
        
        for(let i = 0; i < adsNearby.length; i++){
            const buttonElementTemplate = templateContentButton.cloneNode(true);    
            buttonElementTemplate.setAttribute('id', 'map_pin' + i);
            buttonElementTemplate.style.cssText = "left: " + adsNearby[i][0].location.x + "px; " + "top: " + adsNearby[i][0].location.y + "px;";
            buttonElementTemplate.children[0].src = adsNearby[i][0].author.avatar;
            buttonElementTemplate.children[0].alt = adsNearby[i][0].offer.title;
            mapPins.appendChild(buttonElementTemplate);
 
        }
       //firstClickOnMainPin = false;
    }   
    map.classList.remove('map--faded');
    
    let startCoords = {
        x: evt.clientX,
        y: evt.clientY
    };
    const onMouseMove = function(moveEvt){
        moveEvt.preventDefault();
        let shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
        };
        startCoords ={
            x: moveEvt.clientX,
            y: moveEvt.clientY
        };
        let widthHTML = HTML.offsetWidth;
        if(moveEvt.clientY <= (pinsoverlay.offsetHeight - 50)  && moveEvt.clientY > 65
         && moveEvt.clientX >= (0 + ((widthHTML - 1200)/2)+10) && moveEvt.clientX <= (widthHTML - ((widthHTML - 1200)/2)- 10)){
            mapPinMain.style.top =(mapPinMain.offsetTop - shift.y) + 'px';
        mapPinMain.style.left =(mapPinMain.offsetLeft - shift.x) + 'px';
        const address = document.getElementById('address');
        address.setAttribute('value', ((mapPinMain.offsetTop - shift.y)+87) + ", " + ((mapPinMain.offsetLeft - shift.x)+35)); 
        }else{};
        
        
    };
    const onMouseUp = function(upEvt){
        upEvt.preventDefault();
        
        const address = document.getElementById('address');
        address.setAttribute('value', (mapPinMain.offsetTop  + 87) + ", " + (mapPinMain.offsetLeft + 35));
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        setFormElementDisabled(false);
        //if(firstClickOnMainPin === true){
            //const mapPin = document.querySelectorAll('.map__pin');
            //for(let g=1; g<mapPin.length; g++){
              //  mapPin[g].addEventListener('click', openPopup(g, firstClickOnMainPin));
           // }
           
            firstClickOnMainPin = false;
        //}
    };
        
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp)
}
mapPinMain.addEventListener('mousedown', mapClickHandler);


//if(firstClickOnMainPin === false){ 
     
//}