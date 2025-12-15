const apiUrl = 'https://catfact.ninja/fact';
const factElement = document.getElementById('cat-facts');

async function displayFact(){
    try{
    const response = await fetch(apiUrl);
    const result = await response.json();
    const factText = result.fact;

    factElement.innerText = factText;
    } catch (error){
      console.error('Произошла ошибка при получении факта:', error);
    }
  }


displayFact();
