import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ReturnsPolicy from "./Pages/ReturnsPolicy/ReturnsPolicy";
import PricingPolicy from "./Pages/PricingPolicy/PricingPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ShippingDelivery from "./Pages/ShippingDelivery/ShippingDelivery";
import FAQ from "./Pages/FAQ/FAQ";
import FitGuarantee from "./Pages/FitGuarantee/FitGuarantee";
import FabricSamples from "./Pages/FabricSamples/FabricSamples";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import Contact from "./Pages/Contact/Contact";
import GoogleMaps from "./Components/GoogleMap/GoogleMap";
import Blouse from "./Pages/Blouse/Blouse";
import Dashboard from "./Pages/Dashboard/Dashboard";
import OrderDetails from "./Pages/OrderDetails/OrderDetails";
import Salwar from "./Pages/Salwar/Salwar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/returns-policy" element={<ReturnsPolicy />} />
        <Route path="/pricing-policy" element={<PricingPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-policy" element={<ShippingDelivery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/fit-guarantee" element={<FitGuarantee />} />
        <Route path="/fabric-samples" element={<FabricSamples />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/choose-blouse" element={<Blouse />} />
        <Route path="/choose-salwar" element={<Salwar />} />
        <Route path="/map" element={<GoogleMaps />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orderDetails" element={<OrderDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
