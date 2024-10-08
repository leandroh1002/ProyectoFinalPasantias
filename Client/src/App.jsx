import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import PATHROUTES from "./helpers/PathRoutes.helper.js";
import Details from "./components/Details/Details.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import FormAddCompanies from "./components/FormAddCompanies.jsx";
import FormAddCarrer from "./components/FormAddCarrer.jsx";
import NotFound from "./components/NotFound.jsx";
import FormAddPublish from "./components/FormAddPublish.jsx";
import Signin from "./components/Signin.jsx";
import FormPerfil from "./components/FormPerfil.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/actions/index.js";
import { useEffect } from "react";
import StoreItem from "./helpers/LocalStorage.js";
import Nav from "./components/Nav.jsx";
import DashboardView from "./components/Views/DashboardView.jsx";

const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userLoggedInfo = useSelector(state => state.UserLogued);
  console.log("usuario logueado", userLoggedInfo);

  useEffect(() => {
    if(localStorage.getItem(StoreItem.idPeople)){
      dispatch(getUser(JSON.parse(localStorage.getItem(StoreItem.idPeople))))
    }
    },[dispatch])

    useEffect(() => {
      if (!userLoggedInfo) return;
  
      if (userLoggedInfo.typeAdmin  === true || userLoggedInfo.typeAdmin  === false) {
        if (pathname === PATHROUTES.LOGIN || pathname === PATHROUTES.LANDING) {
          navigate(PATHROUTES.HOME);
        }
      } else if (userLoggedInfo.typeAdmin === false) {
        if (pathname === PATHROUTES.LOGIN || pathname === PATHROUTES.LANDING) {
          navigate(PATHROUTES.HOME);
        }
      } 
    }, [userLoggedInfo]);
    localStorage.setItem(StoreItem.isAdmin, userLoggedInfo.typeAdmin);

  return (
    <div>
      {
        userLoggedInfo.idPeople != null ?
        <div>
            <Nav isAdmin={userLoggedInfo.typeAdmin} imagePerfil={userLoggedInfo.image}></Nav>
            {
              userLoggedInfo.typeAdmin === false &&
              <Routes>
                {/* Alumno */}
                <Route path={PATHROUTES.HOME} element={<Home valueId={userLoggedInfo.idPeople}/>} />
                <Route path={PATHROUTES.PERFIL} element={<FormPerfil />} />
                <Route path={PATHROUTES.DETAIL} element={<Details valueId={userLoggedInfo.idPeople}/>}/>
                <Route path='*' element={<NotFound />}/>
              </Routes>
            }
            {
              userLoggedInfo.typeAdmin === true &&
              <Routes>
                <Route path={PATHROUTES.HOME} element={<Home valueId={userLoggedInfo.idPeople}/>} />
                <Route path={PATHROUTES.FORM_ADD_COMPANIES} element={<FormAddCompanies />} />
                <Route path={PATHROUTES.FORM_ADD_CARRER} element={<FormAddCarrer />} />
                <Route path={PATHROUTES.PUBLISH} element={<FormAddPublish />} />
                <Route path={PATHROUTES.DASHBOARD} element={<DashboardView />} />
                <Route path={PATHROUTES.DETAIL} element={<Details />}/>
                <Route path='*' element={<NotFound />}/>
              </Routes>
            }
            <Footer />
        </div>
          :
          <div>
            <Nav></Nav>
            <Routes>
              <Route path={PATHROUTES.LANDING} element={<Home />}/>
              <Route path={PATHROUTES.LOGIN} element={<Login />} />
              <Route path={PATHROUTES.SIGNIN} element={<Signin />} />
              <Route path={PATHROUTES.DETAIL} element={<Details />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
      }

    </div>
  )
};


export default App
