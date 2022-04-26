fetch('https://api.covidtracking.com/v1/states/info.json')
.then(res => res.json())
.then(res => console.log(res))
.catch(err => console.log(err))