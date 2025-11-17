import Element from "./element";

const el = new Element ('div');

el.setId('block');

el.addClasses("border", "flex");
el.removeClasses("flex");
el.removeClasses("flex125"); // такой элемент не находит

el.render(document.body);

/*function summ(...params){
    let result = 0;

    for(let param of params){
        result += param;
    }

    return result;
}

console.log(summ(2,3));
console.log(summ(2,3,6));*/
console.log(el);