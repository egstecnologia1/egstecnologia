import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import About from './routes/pages/about';
import Contact from './routes/pages/contact';
import Solutions from './routes/pages/solution';
import Client from './routes/pages/clients';
import Suporte from './routes/suporte/suporte.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='suporte' element={<Suporte/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/clients' element={<Client />} />
      </Route>
    </Routes>
  )
};

export default App;
