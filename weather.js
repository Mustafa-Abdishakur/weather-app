async function test(city){
    try{
        let forecast = await fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28ce1addf74f9faaa95257b4c4d31b9f`);
        let json = await forecast.json();
        console.log(json);
    }catch(err){
        console.log('error: ' + err);
    }
}

//test('دبي');
/*TO DO LATER
*backgrond change
* forecast */

