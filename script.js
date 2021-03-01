    const education = document.getElementById("education");
    const family = document.getElementById("family");
    const skills = document.getElementsByClassName('skills');
    const result = document.getElementById('result');

    const firstName = document.getElementById("firstname");
    const startingBid = document.getElementById("startingbid");
    const love_letter = document.getElementById("love_letter");
    const btnShow = document.querySelector("button");

    function calculator() {

            let name = firstName.value; // name of the groom/bride
            let price = Number(startingBid.value); // turns your starting bid string into number
                for (i = 0; i <= 3; i++) {
                if (skills[i].checked === true) {
                x = x + parseInt(skills[i].value);
                }
            let letter = love_letter.value;
            if (name != "") { 
                price = getNewPrice(price, education);
            let result = (price === education)

            for (i = 0; i <= 2; i++) {
                let rep = 'rep' + i;
                let reps = document.getElementById(rep);
                if (reps.checked === true) {
                    if (reps.value != 200) {
                        price = price * Number(reps.value);
                    } else {
                        price = price - Number(reps.value);
                    }

            const getCheckboxValuesForLoop = (html_collection, price) => { // Check this one, it should work for values with coefficients and with integers
                for (let i=0; i < html_collection.length; i++) {  
                    if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
                    price = price + Number(html_collection[i].value)
            }
                    else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
                     price = price * Number(html_collection[i].value)
                            }
                        }
                        return price;
                    }

                    const getCheckboxValuesFilterReduce = (html_collection, price) => { // create a function that accepts your HTMLCollection of elements and the current price
                        let list = Array.from(html_collection).filter(filteration) // this method turn your HTMLCollection into array
                        let result = list.reduce(reducer, price)
                        return result;
                    }

                    const reducer = (accumulator, item) => {
                        return accumulator + Number(item.value);
                    }
                    const filteration = (item) => {
                        return item.checked;
                    }

                let person = {
                    fullName: name,
                    finalPrice: price,
                    loveLetter: letter
                }
                document.getElementById("result").innerHTML = `The price for ${person.fullName} is ${person.finalPrice}. Your love letter is ${person.loveLetter}`;
            }
            else {
                alert("Name and starting bid cannot be empty");

                const getRadioValue = (node_list, price) => {  
                    node_list.forEach(item => {
                        if (item.checked) {
                            price = price * Number(item.value)
                        }
                    })
                    return price;
                }
                
                button.addEventListener("click", calculate)
                
            }
         }
        
        }
    }
} 