class Element{
    constructor(elementName){
        this.name = elementName;
        this.id = '';
        this.classes = [];
        this.childrens = [];
        this.css = [];
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
    
    render(parantElement){
        let el = document.createElement(this.name);
        el.id = this.id;

        for (let c of this.classes){
            el.classList.add(c);
        }
        
        parantElement.append(el); 
    }
        //console.dir(el) - проверяем установился ли метод добавления свойства id;

        
        //Можно написать и одной строчкой: parantElement.append(document.createElement(this.name))

}


export default Element;
