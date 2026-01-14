import Button from "./Button";

export function List({items}){
      const listItems = items.map(product =>
          <ListItem item={product} key={product.id} />
          );
        /*<li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
          {product.title}
        </li> li - вынесли в отдельный компонет (записан выше)*/ 
     
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

export function ListItem({item}){
    return (
      <li style={{color: item.isFruit ? 'magenta' : 'darkgreen'}}>{item.title}</li>
    )
}

export function MainPage(){
    let content = {
        title: "MainPage",
        text: "This is main site page",
        button: "My button"
    }

    const products = [
      { title: 'Cabbage', isFruit: false, id: 1 },
      { title: 'Garlic', isFruit: false, id: 2 },
      { title: 'Apple', isFruit: true, id: 3 },
    ];


    return(
        <>
        <h1>{content.title}</h1>
        <p>{content.text}</p>
        <Button startCount={5} btnClass="btn-danger" step={1}/>
        <Button startCount={3} btnClass="btn-info" step={3}/>
        <List items={products} />
        </>
    );
          
}

export default MainPage;
