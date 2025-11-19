class Element{
    constructor(elementName){
        this.name = elementName;
        this.id = null;
        this.classes = [];
        this.childrens = [];
        this.css = {};
    }

    setId(id){
        this.id = id;
    }

    addClasses(...classes){
        //при помощи оператора расширения (Способ1):
        this.classes = [...this.classes, ...classes];
        /*c помощью цикла (способ номер 2)
        for(let c of classes){
            this.classes.push(c);
        }*/
    }
    
    removeClasses(...classes){
        for(let c of classes){
            let index = this.classes.indexOf(c);

            if(index != -1){
                this.classes.splice(index, 1);
            }
        }
    }
    
    addStyles(styles){
        Object.assign(this.css, styles);
    }

    deleteStyles(...styles){//deleteStyles('width', 'transform')
        for(let key of styles){
            delete this.css[key];
        }
    }

    /* Для одного:
    appendChild(child) {
        this.childrens.push(child);
    }*/
// Для нескольких:
    appendChilds(...childs) {
        for(let c of childs){
            this.childrens.push(c);    
        }
    }

    createDomElement(){
        let el = document.createElement(this.name);
         if(this.id){
            el.id = this.id;
        }

        for (let c of this.classes){
            el.classList.add(c);
        }
                
        for(let key in this.css){
            /*let styleName = key;
            let styleValue = this.css[key];*/
            el.style[key] = this.css[key];
        }
     
            /*console.log(key);
            console.log(this.css[key]);*/

        /* Пример: как можно записывать составные части css.
         el.style.border = "1px solid black"; - можем и другим способом записать и этот способ будет предпочтительнее
        el.style['border'] = "1px solid black",*/
        //console.dir(el);
        for (let child of this.childrens){
            el.append(child.createDomElement());
        }

        return el;
    }
        //console.dir(el) - проверяем установился ли метод добавления свойства id;     
        //Можно написать и одной строчкой: parantElement.append(document.createElement(this.name))
}


export default Element;
