import Button from "./button";

function List(){
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
      ];

      const listItems = products.map(product =>
        <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
          {product.title}
        </li>
      );
    /*const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
      ];

      const listItems = products.map(product =>
        <li key={product.id}>
          {product.title}
        </li>
      );*/

      return (<ul>{listItems}</ul>);
}

function MainPage(){
    let content = {
        title: "MainPage",
        text: "This is main site page",
        button: "My button"
    }

    return(
        <>
        <h1>{content.title}</h1>
        <p>{content.text}</p>
        <button>{content.button}</button>
        <List/>
        </>
    );
          
}

export default MainPage;