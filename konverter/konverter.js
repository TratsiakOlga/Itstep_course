let myHeaders = new Headers();  //вместе var лучше использовать let.
myHeaders.append("apikey", "uKVCKpTwTWx8AJtXe1Y63EhiLBrVlo4L");

const requestOptions = {   //вместо var здесь лучше сделать const
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

fetch("https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR,RUB,BYN", requestOptions)

let courses = await response.json();

let calculatorCourses = function(inputs){
    let usdValue = document.querySelector('input[name="USD"]').value;
}

    for (let input of inputs){
        if(input.name !==)
    }

    .then(response => response.json())
    .then(result => console.log(result));


    
