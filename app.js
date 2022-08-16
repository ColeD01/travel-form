var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
// document.getElementById("demo");
var query = document.querySelector;

function formAlert() {
    var firstName = form["first-name"].value
    var lastName = form["last-name"].value;
    var age = form["age"].value;
    var gender = form["gender"].value;
    var location = form ["travel-location"].value;
    var diet = [];
    // this works as well 
    if (form["vegetarian"].checked) {
            diet.vegetarian = document.getElementById('vegetarian').value;
            diet.push('Vegetarian')
    }
    if (form["lactose-free"].checked) {
         diet["lactose-free"] = document.getElementById('lactose-free').value;
         diet.push('Lactose-free')
    }
    if (form.kosher.checked) {
            diet.kosher = document.getElementById('kosher').value;
            diet.push("Kosher")
    }
// console.log(diet)
    alert("First Name: " + firstName + ", Last Name: " + lastName + ", Age: " + age + ", Gender: " + gender + ", Travel Location: " + location + ", Diet: " + diet + ", Lets hope where ever your going is worth the risk..");
}


submit.addEventListener("click", formAlert );