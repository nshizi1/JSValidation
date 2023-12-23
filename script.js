const numberInput = document.getElementById('numberInput');
    
numberInput.addEventListener('input', function() {

    const inputValue = numberInput.value.trim();

    if (inputValue === '') {
        // If the input is empty, revert to default outline color
        numberInput.style.outlineColor = ''; // Sets the outline color to default
        var errorMessage = document.getElementById("errorMessage").innerHTML="";
    } else {
        const numericValue = parseFloat(inputValue);
        
        if (isNaN(numericValue) || numericValue > 100 || numericValue <= 17) {
            numberInput.style.outlineColor = 'red';
            var errorMessage = document.getElementById("errorMessage");
            // errorMessage.innerHTML="Input in invalid";
            // errorMessage.style.color='red';
        } else {
            numberInput.style.outlineColor = 'green';
            var errorMessage = document.getElementById("errorMessage");
            // errorMessage.innerHTML="Input is valid";
            // errorMessage.style.color='green';
        }

    }
});

function submitForm(){
    // console.log("Lorem")
    var number = document.getElementById("numberInput");
    var finalMessage = document.getElementById("finalMessage");
    if (number.value === "") {
        finalMessage.innerHTML = "Please enter something in the input field.";
        finalMessage.style.color = 'red';
    }else if(number.value>100 || number.value<=17){
        var finalMessage = document.getElementById("finalMessage");
        finalMessage.innerHTML="You can not vote if you are "+number.value+" years old";
        finalMessage.style.color='red';
    }else{
        var finalMessage = document.getElementById("finalMessage");
        finalMessage.innerHTML = "";

        var secondForm = document.getElementById("secondForm");
        secondForm.style.display = "block";
        var firstForm = document.getElementById("firstForm");
        firstForm.style.display = "none";
    }
}

function personal(){
    var firstName = document.getElementById("firstName").value;
    var location = document.getElementById("location").value;
    var idNbr = document.getElementById("idNbr").value;
    if(firstName==="" || location==="" || idNbr===""){
        var finalMessage = document.getElementById("finalMessage");
        finalMessage.innerHTML="Please fill in all the fields";
        finalMessage.style.color='red';
    }else{
        var finalMessage = document.getElementById("finalMessage").innerHTML="";
        var secondForm = document.getElementById("secondForm").style.display="none";
        var thirdForm= document.getElementById("thirdForm").style.display="block";
    }
}

function vote(){
    var choice = document.getElementById("choice").value;
    var finalMessage = document.getElementById("finalMessage").innerHTML="";
    var thirdForm = document.getElementById("thirdForm").style.display="none";
    var finalMessage = document.getElementById("finalMessage");
    finalMessage.innerHTML="Your vote for "+choice+" has been saved";
    finalMessage.style.color="#F8FFD2";
}