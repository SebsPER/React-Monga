import React, { useEffect, useState }  from "react";
import { Button, MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import Popup from "../../components/Popup/Popup";
import PopupT from "../../components/PopupTop/PopupT";
import IconButton from '@material-ui/core/IconButton';
import themeMui from "../../themes/theme-mui";
import Dashboard from "../../components/dashboard/dashboard";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { setInterval } from "timers";
import BeachAccessRounded from "@material-ui/icons/BeachAccessRounded";
import CallRounded from "@material-ui/icons/CallRounded";
import LocalBarRounded from "@material-ui/icons/LocalBarRounded";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import SearchRounded from "@material-ui/icons/SearchRounded";
import DateRangeRounded from "@material-ui/icons/DateRangeRounded";
import EmojiEmotionsRounded from "@material-ui/icons/EmojiEmotionsRounded";
import CakeRounded from "@material-ui/icons/CakeRounded";
import Pato from "./video/pato.mp4";
import { red, grey } from '@material-ui/core/colors';

const {Divider} = require("@material-ui/core");
const theme = createMuiTheme({palette: {primary: red, secondary: grey,},});

//https://geekrodion.com/blog/asp-react-blog

function App() {

  const [num, setNum] = useState(1);
  const [contrato, setCon] = useState(false);
  const [btn1, set1] = useState(false);
  const [btn2, set2] = useState(false);
  const [btn3, set3] = useState(false);
  const [btn4, set4] = useState(false);
  const [btn5, set5] = useState(false);
  const [btn6, set6] = useState(false);
  const [btn7, set7] = useState(false);
  const [btn8, set8] = useState(false);

  function getQuote() {
    let randNum = Math.floor(Math.random()*10);
    while (num === randNum) {
      randNum = Math.floor(Math.random()*10);
    }
    //setTimeS(0);
    setNum(randNum);
  }

  useEffect(() => {
    
    const interval = setInterval(() => {
      getQuote();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
    <React.Fragment>
    <div className = "App">
      <video autoPlay loop muted
        style = {{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "90%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)"
        }}
        >
        <source src={Pato} type="video/mp4" />
      </video>
      <div className="box">
        <img className="img" src={require('./images/nutria2.png').default}  />
        <Divider orientation="vertical" flexItem/>

        <div className="bienvenida"> 
          <div className="mensaje">Hola monguitaaa!!! Aca esta nuestra historia, hasta ahora.</div>
        </div>
        
        <Divider orientation="vertical" flexItem/>

        <Button className={"ibtn"} onClick={()=> set1(true)} color="secondary"
          startIcon = {<DateRangeRounded/>}>
          En planes...
        </Button>
          <PopupT trigger={btn1} setTrigger={set1}>
            <img className="mongaT1-2" src={require('./images/planes1.JPG').default}  />
              <div className="overlayT1-2">
                <div className="text">16/07/21 - Todavía no estabamos pero ya te habías metido en mi kbeza como si fuera tu kza.</div>
              </div>
            <img className="mongaT2-2" src={require('./images/planes2.JPG').default}  />
              <div className="overlayT2-2">
                <div className="text">4/08/21 - Tres días antes q te pidiera AAAAAAAAAAAAA</div>
              </div>
          </PopupT> 

        <Button className={"ibtn"} onClick={()=> set2(true)} color="primary"
          startIcon = {<FavoriteTwoToneIcon/>}>
          Empezo! - 07/08/21
        </Button>
          <PopupT trigger={btn2} setTrigger={set2}>
            <img className="mongaT1-2" src={require('./images/ofi1.JPG').default}  />
              <div className="overlayT1-2">
                <div className="text">io todo fachero.</div>
              </div>
            <img className="mongaT2-2" src={require('./images/ofi2.JPG').default}  />
              <div className="overlayT2-2">
                <div className="text">21/09/21 - tu posando con Hachi todo asao.</div>
              </div>
        </PopupT>

        <Button className={"ibtn"} onClick={()=> set3(true)} color="secondary"
          startIcon = {<DateRangeRounded/>} >
          Primeros Días
        </Button>
          <PopupT trigger={btn3} setTrigger={set3}>
            <img className="mongaT1-2" src={require('./images/primeros1.jpg').default}  />
              <div className="overlayT1-2">
                <div className="text">12/08/21 - Nuestra primera sesión de fotitos. Casi cumpliendo una semana.</div>
              </div>
            <img className="mongaT2-2" src={require('./images/primeros2.jpg').default}  />
              <div className="overlayT2-2">
                <div className="text">12/08/21 - Ya empezabamos a hacer nuestras muecas.</div>
              </div>
          </PopupT> 
        
        <Button className={"ibtn"} onClick={()=> set4(true)} color="secondary"
          startIcon = {<EmojiEmotionsRounded/>}>
          Cachetitos
        </Button>
        <PopupT trigger={btn4} setTrigger={set4}>
            <img className="mongaT1-2" src={require('./images/cachetes1.JPG').default}  />
              <div className="overlayT1-2">
                <div className="text">28/12/21 - Tus cachetitos en su maximo esplendor cuando fuiste a cuzco.</div>
              </div>
            <img className="mongaT2-2" src={require('./images/cachetes2.PNG').default}  />
              <div className="overlayT2-2">
                <div className="text">Otro excelente ejemplar de tus cachetitos bellos.</div>
              </div>
        </PopupT> 

        <Button className={"ibtn"} onClick={()=> set5(true)} color="secondary"
          startIcon = {<LocalBarRounded/>}>
          30/10/21
        </Button>
        <PopupT trigger={btn5} setTrigger={set5}>
            <img className="mongaT1-2" src={require('./images/locurion1.JPG').default}  />
              <div className="overlayT1-2">
                <div className="text">Nuestra primera sesion de fotitos en publico. Entre en presion y me puse tieso.</div>
              </div>
            <img className="mongaT2-2" src={require('./images/locurion2.JPG').default}  />
              <div className="overlayT2-2">
                <div className="text">Ese dia mori ja ja ja. Pero mi mongasa me protegio :)</div>
              </div>
        </PopupT> 

        <Button className={"ibtn"} onClick={()=> set6(true)} color="secondary"
          startIcon = {<BeachAccessRounded/>}>
          Playita
        </Button>
        <PopupT trigger={btn6} setTrigger={set6}>
            <img className="mongaT1-2" src={require('./images/playa1.jpeg').default}  />
              <div className="overlayT1-2">
                <div className="text">Me hicieron ir a la playa mas veces que en los ultimos 5 años ft. Sportacus.</div>
              </div>
            <img className="mongaT2-2" src={require('./images/playa2.jpeg').default}  />
              <div className="overlayT2-2">
                <div className="text">Los dos, bajo el sol. Con lentes y sonrientes. (Zoi poetah)</div>
              </div>
        </PopupT> 

        <Button className={"ibtn"} onClick={()=> set7(true)} color="secondary"
          startIcon = {<CallRounded/>}>
          Virtualito
        </Button>
        <PopupT trigger={btn7} setTrigger={set7}>
          <img className="mongaT1-2" src={require('./images/llamada1.jpg').default}  />
            <div className="overlayT1-2">
              <div className="text">Momentos random de llamadas: Sebastian ve a dios.</div>
            </div>
          <img className="mongaT2-2" src={require('./images/llamada2.jpg').default}  />
            <div className="overlayT2-2">
              <div className="text">Momentos random de llamadas: Lucia conoce al cuco.</div>
            </div>
        </PopupT>

        <Button className={"ibtn"} onClick={()=> set8(true)} color="primary"
          startIcon = {<FavoriteTwoToneIcon/>}>
          14/02/22
        </Button>
        <PopupT trigger={btn8} setTrigger={set8}>
            <img className="mongaT1-2" src={require('./images/diosa1.PNG').default}  />
              <div className="overlayT1-2">
                <div className="text">Tu simplemente siendo tan hermosa que literal estas a punto de brillar y volverte un angel.</div>
              </div>
            <img className="mongaT2-2" src={require('./images/diosa2.PNG').default}  />
              <div className="overlayT2-2">
                <div className="text">Exitosamente lograste tu evolucion a una diosa y te tomas unas fotos para despedirte de la plebe.</div>
              </div>
        </PopupT> 

      </div>
      <div className="quote">
        <img src={require('./images/'+num+'.jpg').default} height={300} width={300} />
        <div className="btnContainer">
          <IconButton className={"ibtn"} onClick={()=> getQuote()} color="primary">
            <FavoriteTwoToneIcon/>
          </IconButton>
          <IconButton className={"ibtn"} onClick={()=> setCon(true)} color="secondary">
            <SearchRounded/>
          </IconButton>
          <Popup trigger={contrato} setTrigger={setCon}>
            <img className="monga" src={require('./images/contratito2.jpeg').default} height={150} width={120} />
            <h3>Contrato de Bienestar entre Mongos</h3>
            <br/>
            <ol>
              <li>Meet/facetime diario.</li>
              <li>Habladera por wap.</li>
              <li>Fotos.</li>
              <li>Si se puede un meet full day (<b>dudoso</b>).</li>
              <li>Burlarse de la monga (<b>obligatorio</b>).</li>
              <li>Reporte de taper y de hachi (<b>necesario</b>).</li>
              <li>Reporte alimenticio de la doña.</li>
              <li>Ambas partes deberan informar sobre cualquier acercamiento de amenazas del seczo opuesto.</li>
              <li>Una vez al mes alm/cena juntos.</li>
            </ol>
            <b>nota</b>: renegar sobre la mala alimentación si es necesario.
          </Popup>  
          
        </div>
      </div>
    </div> 
    </React.Fragment>   
    </MuiThemeProvider>  
    /*<Router>
      <MuiThemeProvider theme={themeMui}>
        <Switch>
        <Dashboard>
            <CustomersRouter />
            <DashboardRouter />
            <LoginRouter />
        </Dashboard>
        </Switch>
      </MuiThemeProvider>
    </Router>*/
  );
};

export default App;
