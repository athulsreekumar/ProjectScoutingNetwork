
import './App.scss';
import Topbar from './components/topbar/topbar';
import Main from './components/mainpage/mainpage';
// import Main01 from './components/mainpage/mainpage02';
import Testimonials from './components/testimonials/testimonials';
import Oursports from './components/oursports/oursports';
import Ourclients from './components/ourclients/ourclients';
import Footer from './components/footer/footer';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    
    <div className="App">
      <SpeedInsights/>
      <Topbar />
      <div className="components">
        <Main />
        {/* <Main01 /> */}
        {/* <Testimonials /> */}
        <Oursports/>
        <Ourclients/>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
