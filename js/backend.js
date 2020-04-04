'use strict'
export default async function getData(callback){
    /*let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://js.dump.academy/keksobooking/data');
    xhr.timeout = 30000;
    xhr.addEventListener('load', function(){
        try{
            console.log(JSON.parse(xhr.responseText));
            callback(JSON.parse(xhr.responseText));
        }catch(err){
            console.log(err.message);
        }
    });*/
    const url = 'https://js.dump.academy/keksobooking/data';

    try{
        const response = await fetch(url);
        console.log(response);
        const json = await response.json();
        console.log(json);
        callback(json);
    }catch(err){
        console.log(err.message);
    }

    
    xhr.send();
}