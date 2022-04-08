const bioData = {
    firstName: "Saulat",
    lastName: "Abbas",
    Age: 23,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    language: "Eng",
    set lang(value) {
        this.language = value;
    },
};

bioData.lang = "urdu";
// console.log(bioData.fullName());

// const call = (cb) => {
//     setTimeout(() => {
//         console.log(bioData.firstName);
//         setTimeout(() => {
//             console.log(bioData.lastName);
//             setTimeout(() => {
//                 console.log(bioData.language);
//                 cb();
//             }, 2000);
//         }, 2000);
//     }, 2000);
// };

const call1 = () => {
    setTimeout(() => {
        console.log(bioData.fullName());
    }, 2000);
};

// call(call1);

function bioDataRead() {
    return new Promise((resolve, reject) => {
        if (bioData)
            resolve(`${bioData.firstName}`)
        else
            reject(`First Name not Found`)
    })
}
bioDataRead().then((fname) => {
    setTimeout(() => {
        console.log(fname)

        return new Promise((resolve, reject) => {
            if (fname)
                resolve(`${bioData.lastName}`)
            else
                reject(`Last Name not Found`)
        });
    }, 2000);
}).then((lastName) => {
    setTimeout(() => {
        console.log(lastName)

        return new Promise((resolve, reject) => {
            if (lastName)
                resolve(`${bioData.language}`)
            else
                reject(`Language not Found`)
        });
    }, 2000);
}).then((language) => {
    setTimeout(() => {
        console.log(language)
    }, 2000);
}).catch((result) => {
    setTimeout(() => {
        console.log(result)
    }, 2000);
})