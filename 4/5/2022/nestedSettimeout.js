function getData() {
    setTimeout(() => {
        console.log("Connection is created")
        setTimeout(() => {
            console.log("Get Data")
            setTimeout(() => {
                console.log("Formate Data")
                setTimeout(() => {
                    console.log("Display Data")
                }, 5000);
            }, 5000);
        }, 4000);
    }, 3000);
}