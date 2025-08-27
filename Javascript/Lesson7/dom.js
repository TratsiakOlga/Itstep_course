class HTMLElement {
    constructor (name){
        this.name = name;
        this.id = null;
        this.style = {};
        this.classList = {
            classes: [],
            add: function(...classNames) {
                for(let className of classNames){
                this.classes.push(className)
            }
        },
            delete: function(...classNames) {
                //console.log(classNames)
                for(let className of classNames){
                    let index = this.classes.indexOf(className);
                    
                    if(index > -1) {
                        this.classes.splice(index,1);
                    }
                }
            }
        }; //class = "sdd class" - нужно предусмотреть коллекцию классов
    }
    
    addStyle(name, value){
        this.style[name] = value;
    }

    getStylesList(){
        let styles = '';

        for(let key of Object.keys(this.style)){
            let styleName = key;
            let styleValue = this.style[key];

            let styleString = `${styleName}:${styleValue};`;

            styles += styleString;
        }

        return styles ? ` style="${styles}"` : '';
    }

    getClassList() {
        return this.classList.classes.length > 0 ? ` class="${this.classList.classes.join(' ')}"` : '';
    }

    renderHTML() {
        /*if(this.classList.classes.length == 0) {
            return `<${this.name}`</${this.name}>`
        } - можно так проверить, но это не так эффективно, как написанный метод в getClassList*/
        return `<${this.name}${this.getClassList()}${this.getStylesList()}></${this.name}>`;
    } 

    drawHTML(){
        document.body.insertAdjacentHTML('afterbegin', this.renderHTML());
    }
}

/* Без наследования пишется так:
class HTMLHRefElement {
    constructor (name){
        this.name = name;
        this.id = null;
        this.style = [];
        this.classList = {};
        this.href = '';  
    }
}*/
//С наследованием:

class HTMLHRefElement extends HTMLElement {
    constructor(href) {
        super('a');
        this.href = href;
    }
}

/* Так тоже можно наследовать:
сразу class HTMLHRefElement extends HTMLElement, потом:
class HTMLHRefElement1 extends HTMLHRefElement{
}*/

/* Если style делаем массивом - понадобиться создавать класс. Но мы сделаем его сейчас объектом, поэтому класс не понадобится.
class Style {
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
}*/


const div = new HTMLElement('div');

div.id = "block";
div.classList.add("container", "main-section", "colored");

console.log(div);
div.classList.delete ("colored")
console.log(div);

//div.classList.delete("class1", "class2", "class3");
//div.classList.delete("superclass");

console.log(div.renderHTML());
//console.log(div);
div.addStyle('height', '100vh');
div.addStyle('background-color', 'red');
console.log(div);

div.drawHTML();

const a = new HTMLHRefElement('https://google.com');

a.id = "external_link"

//console.log(div);
//console.log(a);
//console.log(a.renderHTML());