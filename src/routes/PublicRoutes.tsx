import { Outlet, Route, Routes } from "react-router-dom";
import { Movements } from "../pages/Movements";
import { ItemHistory } from "../pages/History";
// import { Home } from "../pages/Home";
// import { Purchases } from "../pages/Purchases";
// import { PurchaseRequisition } from "../pages/Purchases/PurchaseRequisition";
// import { PurchaseOrder } from "../pages/Purchases/PurchaseOrder";
// import { Formato } from "../pages/formato";
// import { Partners } from "../pages/Partners";
// import { Login } from "../pages/Login";
// import { Signup } from "../pages/Signup";

export const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movements />} />
        <Route path="/history" element={<ItemHistory />} />
      </Routes>
      <Outlet />
    </>
  );
};
