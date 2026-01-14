import AboutPage from "./AboutPage";
import MainPage from "./MainPage";



/*function App() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <Button />
        <AboutPage />
      </div>
    );
  }*/

  function App() {
    let isMainPage = true;
    let component;

    /*if(isMainPage) {
        component = <MainPage/>;
    }else {
        component = <AboutPage />;
    }*/

    return (
      <div>
          {
              isMainPage ? (<MainPage/>) : (<AboutPage/>)
          }
        
      </div>
    );
  }


  export default App;