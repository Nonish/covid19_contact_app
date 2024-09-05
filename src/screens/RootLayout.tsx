import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Home = lazy(() => import("../screens/Home"));
const Contact = lazy(() => import("../screens/Contact"));
const EditContact = lazy(() => import("../screens/EditContact"));
const ChartsAndMaps = lazy(() => import("../screens/ChartsAndMaps"));

const RootLayout = () => {
  return (
    <div className="max-width flex min-h-screen  bg-white">
      <Sidebar />
      <div className="hide-scrollbar relative max-h-screen w-full overflow-y-scroll bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-contact" element={<Contact />} />
          <Route path="/edit-contact/:id" element={<EditContact />} />
          <Route path="/charts-and-maps" element={<ChartsAndMaps />} />
        </Routes>
      </div>
    </div>
  );
};

export default RootLayout;
