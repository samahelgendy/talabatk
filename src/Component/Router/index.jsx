import {Routes , Route} from 'react-router-dom';
import Component_Home from '../Home/Component_Home';
import Component_Login from '../Login/Component_Login';
import Component_Account from '../NewAccount/Componet_Account';
import Component_Forget from '../ForgetPassword/Component_Forget';
import Component_Condition from '../Condition/Component_Condition';
import Componet_About from '../AboutUs/Componet_About';
import Component_Contact from '../Contact/Component_Contact';
import Profile from '../Profile/Component_Profile';
import Order from '../My-Order/Order';
import NewOrder from '../New Order/NewOrder';
import MyWallet from '../MyWallet/MyWallet';
import HelpCenter from '../HelpCenter/HelpCenter';
import PrivacyComponent from '../Privacy-Policy/privacyComponent';
import HowItWork from '../HowItWork/HowItWork';
import Restaurants from '../Aswan restaurants/Restaurants';
import Instraction from '../Instraction/Instraction';

function AppRouter (){
    return(
        <Routes>
          <Route path='/' element={<Component_Home />}/>
          <Route path='login' element={<Component_Login />}/>
          <Route path="newAccount" element={<Component_Account />} />
          <Route path="forgetPassword" element={<Component_Forget />} />
          <Route path="condition" element={<Component_Condition />} />
          <Route path="aboutus" element={<Componet_About />} />
          <Route path="contact" element={<Component_Contact />} />
          <Route path="profile" element={<Profile />} />
          <Route path="order" element={<Order />} />
          <Route path="newOrder" element={<NewOrder />} />
          <Route path="wallet" element={<MyWallet />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path='privacy-policy' element={<PrivacyComponent />}/>
          <Route path='how-work' element={<HowItWork />}/>
          <Route path='aswan-res' element={<Restaurants />}/>
          <Route path='instraction' element={<Instraction />}/>
        </Routes>
    )
}
export default AppRouter;