let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'https://api.covidtracking.com/v1/us/daily.json');
xhr.send();
xhr.addEventListener("load", dataTransfer)

// 4. This will be called after the response is received
// xhr.onload = function () {
//   console.log(xhr.responseText)
//   //   if (xhr.status != 200) { // analyze HTTP status of the response
//   //     alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//   //   } else { // show the result
//   //     alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
//   //   }
// };

function dataTransfer(e) {
    if (readystate = 4 && xhr.status == 200) {
        const data = JSON.parse(xhr.responseText)
        data.forEach(element => {
            document.getElementById('container').innerHTML += `
            <div id="res-table"> 
              <div class="row" id="row-body">
                  <div class="col1 width">${element.date}</div>
                  <div class="col2 width">${element.positive}</div>
                  <div class="col3 width">${element.negative}</div>
                  <div class="col4 width">${element.death}</div>
              </div>
          </div>`
        });

    }
}

xhr.onerror = function () {
    alert("Request failed");
};