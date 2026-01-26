  import Paragraph from "./Paragraph";
  import Button from "./Button";
  import Title from "./Title";
  import Card from "./Card";
  import Counter from "./Counter";

  const products = [
    {id: 1, name: 'Название товара1', image: 'https://png.pngtree.com/thumb_back/fh260/background/20240717/pngtree-new-nature-beautiful-background-pictures-image_16017682.jpg', text: 'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст'},
    {id: 2, name: 'Название товара2', image: 'https://png.pngtree.com/thumb_back/fh260/background/20240717/pngtree-new-nature-beautiful-background-pictures-image_16017682.jpg', text: 'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст'},
    {id: 3, name: 'Название товара3', image: 'https://png.pngtree.com/thumb_back/fh260/background/20240717/pngtree-new-nature-beautiful-background-pictures-image_16017682.jpg', text: 'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст'}
  ];

  function App() {
    const tovary = products.map((product) => {
      return (
        <Card key={product.id} title={product.name} image={{src: product.image, alt: product.name}}>
          {product.text}
        </Card>
      )
    });

    return (
      <>
        <Paragraph>
        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
        </Paragraph>
        <Counter/>
        <Button label="Текст кнопки" handleClick={() => alert('Кнопка нажата')}></Button>
        <Title level={2} text={'Это заголовок'} />
        {tovary}
      </>
    );
  }

  export default App;