// Call Back Functions

function messaging(fnSms,fnEmail){
    console.log(`Sending Messages `)
    fnSms() // Functional Call of fnSMS
    fnEmail() // Functional Call of fnEmail
} // Function Definition messaging

messaging(
    function fnSms(){
        console.log("SMS Function") // Function Definition of fnSMS
    },
    function fnEmail(){
        console.log("Email Function") // Function Defintion of fnEmail
    }
)// Functional Call







