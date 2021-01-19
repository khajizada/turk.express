const hero = document.getElementById("hero");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const input6 = document.getElementById("input6");
const input7 = document.getElementById("input7");

const clearBtn = document.getElementById("mainClearBtn");
const searchBtn = document.getElementById("mainSearchBtn");
const mainResult = document.getElementById("mainResult");
const bookingLink = document.getElementById("bookingLink");









// #########################################################################################################
// ##############################################  DATABASE  ###############################################
// #########################################################################################################

var database = [
    ["055 200 80 27", "80AZN", "Bakcell"],
    ["050 300 82 74", "70AZN", "Bakcell"],
    ["055 400 83 46", "65AZN", "Bakcell"],
    ["050 500 84 95", "55AZN", "Bakcell"],
    ["055 600 85 46", "65AZN", "Bakcell"],
    ["050 700 86 82", "60AZN", "Bakcell"],
    ["055 800 87 46", "65AZN", "Bakcell"],
    ["055 900 89 46", "65AZN", "Bakcell"],
    ["050 300 87 95", "55AZN", "Bakcell"],
    ["055 400 27 46", "65AZN", "Bakcell"],
    ["050 500 45 80", "65AZN", "Bakcell"],
    ["055 600 88 27", "85AZN", "Bakcell"],
    ["050 700 69 74", "75AZN", "Bakcell"],
    ["050 800 40 20", "65AZN", "Bakcell"],
    ["055 900 97 46", "65AZN", "Bakcell"],
    ["055 200 80 27", "85AZN", "Bakcell"],
    ["050 300 82 74", "75AZN", "Bakcell"],
    ["055 400 83 46", "65AZN", "Bakcell"],
    ["050 500 84 95", "55AZN", "Bakcell"],
    ["055 600 85 46", "65AZN", "Bakcell"],
    ["050 700 86 82", "60AZN", "Bakcell"],
    ["055 800 87 46", "65AZN", "Bakcell"],
    ["055 900 89 46", "65AZN", "Bakcell"],
    ["050 300 87 95", "55AZN", "Bakcell"],
    ["055 400 27 46", "65AZN", "Bakcell"],
    ["050 500 45 80", "65AZN", "Bakcell"],
    ["055 600 88 27", "85AZN", "Bakcell"],
    ["050 700 69 74", "75AZN", "Bakcell"],
    ["050 800 40 10", "65AZN", "Bakcell"],
    ["055 300 97 46", "65AZN", "Bakcell"]
];


searchBtn.addEventListener("click", () => {
    filteringProcess7();
    filteringProcess6();
    filteringProcess5();
});





function filteringProcess7() {
    for (let i = 0; i < database.length; i++) {
        let numArr = Array.from(number);
        let letter = numArr[i].innerHTML;
        letter = letter.split('');
        if (input7.value === letter[12]) {
            numArr[i].parentElement.style.display = 'inherit';
        } else if (input7.value === "") {
            numArr[i].parentElement.style.display = 'inherit';
        } else {
            numArr[i].parentElement.style.display = 'none';
        }
    }
}


function filteringProcess6() {
    for (let i = 0; i < database.length; i++) {
        let numArr = Array.from(number);
        let letter = numArr[i].innerHTML;
        letter = letter.split('');
        if (input6.value === letter[11]) {
            numArr[i].parentElement.style.display = 'inherit';
        } else if (input6.value === "") {
            numArr[i].parentElement.style.display = 'inherit';
        } else {
            numArr[i].parentElement.style.display = 'none';
        }
    }
}

function filteringProcess5() {
    for (let i = 0; i < database.length; i++) {
        let numArr = Array.from(number);
        let letter = numArr[i].innerHTML;
        letter = letter.split('');
        if (input5.value === letter[9]) {
            numArr[i].parentElement.style.display = 'inherit';
        } else if (input5.value === "") {
            numArr[i].parentElement.style.display = 'inherit';
        } else {
            numArr[i].parentElement.style.display = 'none';
        }
    }
}










// BASE
// #########################################################################################################
// ##########################################  CREATE NUMBERLINE ###########################################
// #########################################################################################################
function resultDB() {

    for (let i = 0; i < resultNumbers.length; i++) {

        // Number Line
        var numberLine = document.createElement("div")
        numberLine.className = "number-line numberLine" + [i];
        numberLine.id = "numberLine";
        mainResult.appendChild(numberLine);

        // Number
        var number = document.createElement("div")
        number.className = "number";
        number.id = "number";
        number.innerHTML = resultNumbers[i][0];
        numberLine.appendChild(number);

        // Price
        const price = document.createElement("div")
        price.className = "price";
        price.id = "price";
        price.innerHTML = resultNumbers[i][1];
        numberLine.appendChild(price);

        // Seller
        const seller = document.createElement("div")
        seller.className = "seller";
        seller.id = "seller";
        seller.innerHTML = resultNumbers[i][2];
        numberLine.appendChild(seller);

        // Booking Div
        const booking = document.createElement("div")
        booking.className = "booking";
        booking.id = "booking";
        booking.innerHTML = '<button type="button" class="btn btn-outline-primary booking-btn" id="button" data-toggle="modal" data-target="#exampleModal">Sifariş ver</button>';
        numberLine.appendChild(booking);

    };
}






// NUMBERS
// #########################################################################################################
// ##########################################  CREATE NUMBERLINE ###########################################
// #########################################################################################################

function callDatabase() {
    for (let i = 0; i < database.length; i++) {

        // Number Line
        var numberLine = document.createElement("div")
        numberLine.className = "number-line numberLine" + [i];
        numberLine.id = "numberLine";
        mainResult.appendChild(numberLine);

        // Number
        var number = document.createElement("div")
        number.className = "number";
        number.id = "number";
        number.innerHTML = database[i][0];
        numberLine.appendChild(number);

        // Price
        const price = document.createElement("div")
        price.className = "price";
        price.id = "price";
        price.innerHTML = database[i][1];
        numberLine.appendChild(price);

        // Seller
        const seller = document.createElement("div")
        seller.className = "seller";
        seller.id = "seller";
        seller.innerHTML = database[i][2];
        numberLine.appendChild(seller);

        // Booking Div
        const booking = document.createElement("div")
        booking.className = "booking";
        booking.id = "booking";
        booking.innerHTML = '<button type="button" class="btn btn-outline-primary booking-btn" id="button" data-toggle="modal" data-target="#exampleModal">Sifariş ver</button>';
        numberLine.appendChild(booking);

    };


}
callDatabase();


// #########################################################################################################
// ##########################################  SEND MAIL MESSAGE ###########################################
// #########################################################################################################

const customName = document.getElementById("exampleInputName");
const customNumber = document.getElementById("exampleInputNumber");
const customPhone = document.getElementById("exampleInputPhone");
const customRegion = document.getElementById("exampleInputRegion");

function sendMessage(message) {
    if (customName.value === "") {
        alert("Zəhmət olmasa, adınızı daxil edin !")
    } else if (customPhone.value === "") {
        alert("Zəhmət olmasa, əlaqə nömrəsi daxil edin !")
    } else if (customNumber.value === "") {
        alert("Zəhmət olmasa, sifariş etdiyiniz nömrəni daxil edin !")
    } else {
        emailjs.send(" user_zImCTf1DHSSR8vsSPC", "template_mvbsinc", {
            name: "Müştəri: " + customName.value,
            number: "Sifariş: " + customNumber.value,
            phone: "Əlaqə: " + customPhone.value,
            region: "Şəhər: " + customRegion.value
        });
    }
}


// #########################################################################################################
// #######################################  CLICK EVENT FOR INPUT  #########################################
// #########################################################################################################

clearBtn.addEventListener("click", clearingProcess)

function clearingProcess() {
    location.reload();
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    input5.value = "";
    input6.value = "";
    input7.value = "";

}




input1.addEventListener("keyup", (e) => {
    // e.preventDefault();

    if (e.key === '0') {
        input2.focus()
    } else if (e.key === '1') {
        input2.focus()
    } else if (e.key === '2') {
        input2.focus()
    } else if (e.key === '3') {
        input2.focus()
    } else if (e.key === '4') {
        input2.focus()
    } else if (e.key === '5') {
        input2.focus()
    } else if (e.key === '6') {
        input2.focus()
    } else if (e.key === '7') {
        input2.focus()
    } else if (e.key === '8') {
        input2.focus()
    } else if (e.key === '9') {
        input2.focus()
    } else if (e.key === 'Backspace') {
        input1.focus();
    } else {
        input1.value = "";
    }


});




input2.addEventListener("keyup", (e) => {
    // e.preventDefault();

    if (e.key === '0') {
        input3.focus()
    } else if (e.key === '1') {
        input3.focus()
    } else if (e.key === '2') {
        input3.focus()
    } else if (e.key === '3') {
        input3.focus()
    } else if (e.key === '4') {
        input3.focus()
    } else if (e.key === '5') {
        input3.focus()
    } else if (e.key === '6') {
        input3.focus()
    } else if (e.key === '7') {
        input3.focus()
    } else if (e.key === '8') {
        input3.focus()
    } else if (e.key === '9') {
        input3.focus()
    } else if (e.key === 'Backspace') {
        input1.focus();
    } else {
        input2.value = "";
    }
});

input3.addEventListener("keyup", (e) => {
    // e.preventDefault();

    if (e.key === '0') {
        input4.focus()
    } else if (e.key === '1') {
        input4.focus()
    } else if (e.key === '2') {
        input4.focus()
    } else if (e.key === '3') {
        input4.focus()
    } else if (e.key === '4') {
        input4.focus()
    } else if (e.key === '5') {
        input4.focus()
    } else if (e.key === '6') {
        input4.focus()
    } else if (e.key === '7') {
        input4.focus()
    } else if (e.key === '8') {
        input4.focus()
    } else if (e.key === '9') {
        input4.focus()
    } else if (e.key === 'Backspace') {
        input2.focus();
    } else {
        input3.value = "";
    }
});



input4.addEventListener("keyup", (e) => {
    // e.preventDefault();

    if (e.key === '0') {
        input5.focus()
    } else if (e.key === '1') {
        input5.focus()
    } else if (e.key === '2') {
        input5.focus()
    } else if (e.key === '3') {
        input5.focus()
    } else if (e.key === '4') {
        input5.focus()
    } else if (e.key === '5') {
        input5.focus()
    } else if (e.key === '6') {
        input5.focus()
    } else if (e.key === '7') {
        input5.focus()
    } else if (e.key === '8') {
        input5.focus()
    } else if (e.key === '9') {
        input5.focus()
    } else if (e.key === 'Backspace') {
        input3.focus();
    } else {
        input4.value = "";
    }
});

input5.addEventListener("keyup", (e) => {
    // e.preventDefault();

    if (e.key === '0') {
        input6.focus()
    } else if (e.key === '1') {
        input6.focus()
    } else if (e.key === '2') {
        input6.focus()
    } else if (e.key === '3') {
        input6.focus()
    } else if (e.key === '4') {
        input6.focus()
    } else if (e.key === '5') {
        input6.focus()
    } else if (e.key === '6') {
        input6.focus()
    } else if (e.key === '7') {
        input6.focus()
    } else if (e.key === '8') {
        input6.focus()
    } else if (e.key === '9') {
        input6.focus()
    } else if (e.key === 'Backspace') {
        input4.focus();
    } else {
        input5.value = "";
    }

});

input6.addEventListener("keyup", (e) => {
    // e.preventDefault();

    if (e.key === '0') {
        input7.focus()
    } else if (e.key === '1') {
        input7.focus()
    } else if (e.key === '2') {
        input7.focus()
    } else if (e.key === '3') {
        input7.focus()
    } else if (e.key === '4') {
        input7.focus()
    } else if (e.key === '5') {
        input7.focus()
    } else if (e.key === '6') {
        input7.focus()
    } else if (e.key === '7') {
        input7.focus()
    } else if (e.key === '8') {
        input7.focus()
    } else if (e.key === '9') {
        input7.focus()
    } else if (e.key === 'Backspace') {
        input5.focus()
    } else {
        input6.value = "";
    }

});


input7.addEventListener("keyup", (e) => {
    // e.preventDefault();

    if (e.key === '0') {
        input7.focus()
    } else if (e.key === '1') {
        input7.focus()
    } else if (e.key === '2') {
        input7.focus()
    } else if (e.key === '3') {
        input7.focus()
    } else if (e.key === '4') {
        input7.focus()
    } else if (e.key === '5') {
        input7.focus()
    } else if (e.key === '6') {
        input7.focus()
    } else if (e.key === '7') {
        input7.focus()
    } else if (e.key === '8') {
        input7.focus()
    } else if (e.key === '9') {
        input7.focus()
    } else if (e.key === 'Backspace') {
        input6.focus()
    } else {
        input7.value = "";
    }

});