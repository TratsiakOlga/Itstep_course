import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Catalog from '../pages/Catalog';
import Menu from '../pages/Menu';
import Portfolio from '../pages/Portfolio';
import Sites from '../pages/Sites';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


  function App() {
    const slideImages = [
      {
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 1'
      },
      {
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        caption: 'Slide 2'
      },
      {
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 3'
      },
    ];

    const divStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '400px'
    }
    
    let urls = [
      {path: "/", element: <Main />, title: "Главная"},
      {path: "/about", element: <About />, title: "О нас"},
      {path: "/catalog", element: <Catalog />, title: "Каталог"},
    ];

    let routes = urls.map(function(url){
      return (<Route path={url.path} element={url.element} />);
    });

    return(
      <>
        <BrowserRouter>
          <Menu links={urls} />
          <Routes>
              {routes}
              <Route path="/portfolio" element={<Portfolio/>}>
                <Route path="sites" element={<Sites />} />
              </Route>
              <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </>
    );
  }

  export default App;