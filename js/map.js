const formNotice = document.querySelector('.notice').children[1];

export function setFormElementDisabled (disabled){
    if(disabled == true){
        for (let j = 0; j < formNotice.children.length; j++){
            formNotice.children[j].setAttribute('disabled','');
        }
    }else{
        formNotice.classList.remove('notice__form--disabled');
        for (let j = 0; j < formNotice.children.length; j++){
            formNotice.children[j].removeAttribute('disabled');
        }
    }    
}
 setFormElementDisabled(true);

