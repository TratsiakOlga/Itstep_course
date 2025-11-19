import Element from "./element";
import ImageElement from "./img";

const el = new Element ('div');

el.setId('block');
el.addClasses("border", "flex");
//el.removeClasses("flex");
//el.removeClasses("flex125"); // такой элемент не находит
el.addStyles({
    width: "100px",
    height: "100px",
    border: "1px solid black",
    backgroundColor: "purple",
});

/*el.addStyles({
    transform: "rotate(45deg)"
});*/
//el.deleteStyles('transform');

const link = new Element('a');
const img = new ImageElement('img');
img.setSrc('https://dettext.com/wp-content/uploads/2024/04/kartinka-pole-dlia-detei/27642-dettext_com-kartinka-pole-dlia-detei.jpg');
img.setAlt("Это картинка луга");
img.addStyles({
    width: "100%",
    height: "100%",
    objectFit: "cover"
});

link.appendChilds(img);
el.appendChilds(link);

//console.log(el);

document.body.append(el.createDomElement());

/*function summ(...params){
    let result = 0;

    for(let param of params){
        result += param;
    }

    return result;
}

console.log(summ(2,3));
console.log(summ(2,3,6));*/
//console.log(el);