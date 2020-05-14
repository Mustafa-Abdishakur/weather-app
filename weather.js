async function test(){
    try{
        let forecast = await fetch('https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=AbuDhabi&units=metric&appid=28ce1addf74f9faaa95257b4c4d31b9f');
        let json = await forecast.json();
        console.log(json);
    }catch(err){
        console.log('error: ' + err);
    }
}

test();
