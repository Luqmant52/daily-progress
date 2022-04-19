<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>

    <div id="output"></div>

    <script>
        
        let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'https://api.github.com/users');

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
    console.log(xhr.responseText)
//   if (xhr.status != 200) { // analyze HTTP status of the response
//     alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//   } else { // show the result
//     alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
//   }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  alert("Request failed");
};
        
       </script>


</body>
</html>