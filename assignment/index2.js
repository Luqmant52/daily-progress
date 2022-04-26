fetch('https://api.covidtracking.com/v1/states/info.json',{Method:'GET'})
.then(res=>res.json())
.then((result)=>{
    console.log(result[0].state)
    result.
})