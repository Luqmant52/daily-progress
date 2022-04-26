let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'https://api.covidtracking.com/v1/states/info.json');
// xhr.open('GET', 'https://api.covidtracking.com/v1/us/daily.json');
xhr.send();
xhr.addEventListener("load", dataTransfer)




function dataTransfer() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText)
        console.log(data)
        data.forEach(element => {
            document.getElementById('container').innerHTML += `
                <div id="res-table">
                    <div class="row">
                        <div class="col1 width1">                        
                            <a href=https://api.covidtracking.com/v1/states/${element.state.toLowerCase()}/info.json>${element.state}</a>
                        </div>
                        <div class="col1 width1">${element.name}</div>
                        <div class="col2 width1">
                        <button id='btn'>Show Details</button>
                        </div>
                        <div class="col4 width1" id='detail'></div>
                    </div>
                </div>`
                document.getElementById('btn').addEventListener('click',showDetail)
                function showDetail(){
                    const dt =  `https://api.covidtracking.com/v1/states/${element.state.toLowerCase()}/info.json`
                    document.getElementById('detail').innerHTML += "Hello"
                    console.log("hello")
                }
        });   
    }
}
xhr.onerror = function () {
    alert("Request failed");
};