var bill = document.querySelector("#bill");
var cash = document.querySelector("#cash");
var noofNotes = document.querySelectorAll(".noofNotes");
var changeBtn = document.querySelector("#changeBtn");
var errorMessage = document.querySelector(".errorMessage");
var availableNotes = [2000,500,100,20,10,5,1];

function calculateChange(amountToBeReturned)
{
    for(let i=0;i<availableNotes.length;i++)
    {
        var numberOfNotes = Math.trunc(
            amountToBeReturned/availableNotes[i]
        );
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noofNotes[i].innerText = numberOfNotes;
    }
}

                                                                           

function showmsg(msg)
{
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}

function validateBillAndCashAmount()
{
    errorMessage.style.display = "none";
    if(bill.value>0)
    {
        if(cash.value >= bill.value){
            var amountToBeReturned = cash.value - bill.value;
            calculateChange(amountToBeReturned);
        }else{
            showmsg("The cash provided must be greater than or equal to bill amount!")
        }
    }
    else{//Invalid case
        showmsg("Invalid Bill Amount")
    }
}



function clickHandler(e)
{
    validateBillAndCashAmount()
}

changeBtn.addEventListener("click",clickHandler)


// console.log(Math.trunc(13.37));
// // expected output: 13

// console.log(Math.trunc(42.84));
// // expected output: 42

// console.log(Math.trunc(0.123));
// // expected output: 0

// console.log(Math.trunc(-0.123));
// // expected output: -0
