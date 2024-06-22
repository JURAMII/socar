/* eslint-disable */
import './App.css';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer'


function App() {


  return (
    <div className="App">
      <div className='app_back'>
      </div>
      <div className='app_btn'>
       <a href="">
          <img className='app_icon' src="./assets/i-appicon.svg" alt="앱" />
          <p>쏘카 앱 다운로드 <span><img src="./assets/arrow-down.svg" alt="화살표" /></span></p>
        </a>
      </div>
      <Header />
      <Main />
      <Footer />
      <div>

      </div>
    </div>
  
  );
}

export default App;
