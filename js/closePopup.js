function closePopup() {
        const popup = document.querySelector('.popup');
        const popupClose = popup.querySelector('.popup__close');

        popupClose.addEventListener('click', function(){
            const popup = document.querySelector('.popup');
        popup.remove();
        });
};
export default closePopup;    
