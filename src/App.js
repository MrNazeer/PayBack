import "./App.css";
import Conprofile from "./Components/ConsumerSignin/Conprofile.js";
import SellerSign from "./Components/SellerSignin/SellerSign.js";
import Login from "./Components/Login/Login.js";
import UserSelection from "./Components/UserSelectionpage/UserSelection.js";
import SellerLogin from "./Components/SellerLogin/SellerLogin.js";
import SellerDashBoard from "./Components/SellerDashBoard/SellerDashboard";
import { SellerIT } from "./Components/SellerDashBoard/IndividualTranscation/SellerIT";
import { SellerOT } from "./Components/SellerDashBoard/OverAllTranscation/SellerOT";
import { Sdashboard  } from "./Components/SellerDashBoard/Sdashboard/Sdashboard";
import { Consumer  } from "./Components/SellerDashBoard/Consumer/Consumer";
import { Routes, Route } from "react-router-dom";
import { ConsumerDashboard } from "./Components/ConsumerDashBoard/ConsumerDashboard";
import { CDashboard  } from "./Components/ConsumerDashBoard/C_dashboard/CDashboard";
import { CindividualTrans  } from "./Components/ConsumerDashBoard/C_individual_trans/CindividualTrans";
import { CoverallTrans  } from "./Components/ConsumerDashBoard/C_Overall_Trans/CoverallTrans";
import { Shops  } from "./Components/ConsumerDashBoard/Shops/Shops";
import { Qrreader } from "./Components/QRCode/Qrscanner/Qrreader"
import { QrShow } from "./Components/QRCode/Qrshow/QrShow"
function App() {
  return (
    <Routes>
      <Route path="/" element={<UserSelection />} />
      <Route path="/sellersign" element={<SellerSign />} />
      <Route path="/conprofile" element={<Conprofile />} />
      <Route path="/sellersign/sellerlogin" element={<SellerLogin />} />
      <Route path="/conprofile/userLogin" element={<Login />} />
      <Route path="/Qrreader" element={<Qrreader />} />
      <Route path="/Qrshow" element={<QrShow />} />
      <Route path="/Sellerdashboard" element={<SellerDashBoard />}>
        <Route path="SellerIT" element={<SellerIT />} />
        <Route path="SellerOT" element={<SellerOT />} />
        <Route path="Sdashboard" element={<Sdashboard />} />
        <Route path="consumer" element={<Consumer />} />        
      </Route>
      <Route path="/Consumerdashboard" element={<ConsumerDashboard />}>
        <Route path="ConsumerIT" element={<CindividualTrans />} />
        <Route path="ConsumerOT" element={<CoverallTrans />} />
        <Route path="CDashboard" element={<CDashboard />} />
        <Route path="Shops" element={<Shops />} />
      </Route>
      

    </Routes>
  );
}

export default App;

