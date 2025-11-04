import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Quote from "@/pages/Quote";
import PompanoBeach from "@/pages/PompanoBeach";
import Tampa from "@/pages/Tampa";
import Oldsmar from "@/pages/Oldsmar-Fl";
import OldsmarFl from "@/pages/Oldsmar";
import NotFound from "@/pages/not-found";
import Miami from "@/pages/SEO/Miami"
import Hialeah from "@/pages/SEO/Hialeah"
import MiamiBeach from "@/pages/SEO/MiamiBeach"
import CoralGables from "@/pages/SEO/CoralGables"
import Doral from "@/pages/SEO/Doral"
import Homestead from "@/pages/SEO/Homestead"
import Kendall from "@/pages/SEO/Kendall"
import NorthMiami from "@/pages/SEO/NorthMiami"
import MiamiGardens from "@/pages/SEO/MiamiGardens"
import SunnyIslesBeach from "@/pages/SEO/SunnyIslesBeach"
import CutlerBay from "@/pages/SEO/CutlerBay"
import Aventura from "@/pages/SEO/Aventura"
import PalmettoBay from "@/pages/SEO/PalmettoBay"
import Pinecrest from "@/pages/SEO/Pinecrest"
import MiamiLakes from "@/pages/SEO/MiamiLakes"
import CoconutCreek from "@/pages/SEO/CoconutCreek"
import CooperCity from "@/pages/SEO/CooperCity"
import CoralSprings from "@/pages/SEO/CoralSprings"
import DaniaBeach from "@/pages/SEO/DaniaBeach"
import DeerfieldBeach from "@/pages/SEO/DeerfieldBeach"
import FortLauderdale from "@/pages/SEO/FortLauderdale"
import HallandaleBeach from "@/pages/SEO/HallandaleBeach"
import Hollywood from "@/pages/SEO/Hollywood"
import LauderdaleLakes from "@/pages/SEO/LauderdaleLakes"
import Lauderhill from "@/pages/SEO/Lauderhill"
import LighthousePoint from "@/pages/SEO/LighthousePoint"
import Margate from "@/pages/SEO/Margate"
import Miramar from "@/pages/SEO/Miramar"
import NorthLauderdale from "@/pages/SEO/NorthLauderdale"
import OaklandPark from "@/pages/SEO/OaklandPark"
import Parkland from "@/pages/SEO/Parkland"
import PembrokePines from "@/pages/SEO/PembrokePines"
import Plantation from "@/pages/SEO/Plantation"
import PompanoBeachFL from "@/pages/SEO/PompanoBeach"
import Sunrise from "@/pages/SEO/Sunrise"
import Tamarac from "@/pages/SEO/Tamarac"
import Weston from "@/pages/SEO/Weston"
import WiltonManors from "@/pages/SEO/WiltonManors"
import Davie from "@/pages/SEO/Davie"
import HillsboroBeach from "@/pages/SEO/HillsboroBeach"
import LauderdalebytheSea from "@/pages/SEO/LauderdalebytheSea"
import PembrokePark from "@/pages/SEO/PembrokePark"
import SouthwestRanches from "@/pages/SEO/SouthwestRanches"
import LazyLake from "@/pages/SEO/LazyLake"
import SeaRanchLakes from "@/pages/SEO/SeaRanchLakes"
import BroadviewPark from "@/pages/SEO/BroadviewPark"
import Atlantis from "@/pages/SEO/Atlantis"
import BelleGlade from "@/pages/SEO/BelleGlade"
import BocaRaton from "@/pages/SEO/BocaRaton"
import BoyntonBeach from "@/pages/SEO/BoyntonBeach"
import BrinyBreezes from "@/pages/SEO/BrinyBreezes"
import CloudLake from "@/pages/SEO/CloudLake"
import DelrayBeach from "@/pages/SEO/DelrayBeach"
import GlenRidge from "@/pages/SEO/GlenRidge"
import Golf from "@/pages/SEO/Golf"
import Greenacres from "@/pages/SEO/Greenacres"
import GulfStream from "@/pages/SEO/GulfStream"
import Haverhill from "@/pages/SEO/Haverhill"
import HighlandBeach from "@/pages/SEO/HighlandBeach"
import Hypoluxo from "@/pages/SEO/Hypoluxo"
import JunoBeach from "@/pages/SEO/JunoBeach"
import Jupiter from "@/pages/SEO/Jupiter"
import JupiterInletColony from "@/pages/SEO/JupiterInletColony"
import LakeClarkeShores from "@/pages/SEO/LakeClarkeShores"
import LakePark from "@/pages/SEO/LakePark"
import LakeWorthBeach from "@/pages/SEO/LakeWorthBeach"
import Lantana from "@/pages/SEO/Lantana"
import LoxahatcheeGroves from "@/pages/SEO/LoxahatcheeGroves"
import Manalapan from "@/pages/SEO/Manalapan"
import MangoniaPark from "@/pages/SEO/MangoniaPark"
import NorthPalmBeach from "@/pages/SEO/NorthPalmBeach"
import OceanRidge from "@/pages/SEO/OceanRidge"
import Pahokee from "@/pages/SEO/Pahokee"
import PalmBeach from "@/pages/SEO/PalmBeach"
import PalmBeachGardens from "@/pages/SEO/PalmBeachGardens"
import PalmBeachShores from "@/pages/SEO/PalmBeachShores"
import PalmSprings from "@/pages/SEO/PalmSprings"
import RivieraBeach from "@/pages/SEO/RivieraBeach"
import RoyalPalmBeach from "@/pages/SEO/RoyalPalmBeach"
import SouthBay from "@/pages/SEO/SouthBay"
import SouthPalmBeach from "@/pages/SEO/SouthPalmBeach"
import Tequesta from "@/pages/SEO/Tequesta"
import Wellington from "@/pages/SEO/Wellington"
import Westlake from "@/pages/SEO/Westlake"
import WestPalmBeach from "@/pages/SEO/WestPalmBeach"

import EastLake from "@/pages/SEO/westcoast/EastLake"
import TarponSprings from "@/pages/SEO/westcoast/TarponSprings"
import PalmHarbor from "@/pages/SEO/westcoast/PalmHarbor"
import SafetyHarbor from "@/pages/SEO/westcoast/SafetyHarbor"
import Dunedin from "@/pages/SEO/westcoast/Dunedin"
import Clearwater from "@/pages/SEO/westcoast/Clearwater"
import Belleair from "@/pages/SEO/westcoast/Belleair"
import Largo from "@/pages/SEO/westcoast/Largo"
import PinellasPark from "@/pages/SEO/westcoast/PinellasPark"
import IndianRocksBeach from "@/pages/SEO/westcoast/IndianRocksBeach"


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/pompano-beach-boat-removal" component={PompanoBeach} />
      <Route path="/tampa-boat-removal" component={Tampa} />
      <Route path="/oldsmar-boat-removal" component={Oldsmar} />
      <Route path="/oldsmar-fl-boat-removal" component={OldsmarFl} />
      <Route path="/boat-removal-fl-miami" component={Miami} />
      <Route path="/boat-removal-fl-hialeah" component={Hialeah} />
      <Route path="/boat-removal-fl-miami-beach" component={MiamiBeach} />
      <Route path="/boat-removal-fl-coral-gables" component={CoralGables} />
      <Route path="/boat-removal-fl-doral" component={Doral} />
      <Route path="/boat-removal-fl-homestead" component={Homestead} />
      <Route path="/boat-removal-fl-kendall" component={Kendall} />
      <Route path="/boat-removal-fl-north-miami" component={NorthMiami} />
      <Route path="/boat-removal-fl-miami-gardens" component={MiamiGardens} />
      <Route path="/boat-removal-fl-sunny-isles-beach" component={SunnyIslesBeach} />
      <Route path="/boat-removal-fl-cutler-bay" component={CutlerBay} />
      <Route path="/boat-removal-fl-aventura" component={Aventura} />
      <Route path="/boat-removal-fl-palmetto-bay" component={PalmettoBay} />
      <Route path="/boat-removal-fl-pinecrest" component={Pinecrest} />
      <Route path="/boat-removal-fl-miami-lakes" component={MiamiLakes} />
      <Route path="/boat-removal-fl-coconut-creek" component={CoconutCreek} />
      <Route path="/boat-removal-fl-cooper-city" component={CooperCity} />
      <Route path="/boat-removal-fl-coral-springs" component={CoralSprings} />
      <Route path="/boat-removal-fl-dania-beach" component={DaniaBeach} />
      <Route path="/boat-removal-fl-deerfield-beach" component={DeerfieldBeach} />
      <Route path="/boat-removal-fl-fort-lauderdale" component={FortLauderdale} />
      <Route path="/boat-removal-fl-hallandale-beach" component={HallandaleBeach} />
      <Route path="/boat-removal-fl-hollywood" component={Hollywood} />
      <Route path="/boat-removal-fl-lauderdale-lakes" component={LauderdaleLakes} />
      <Route path="/boat-removal-fl-lauderhill" component={Lauderhill} />
      <Route path="/boat-removal-fl-lighthouse-point" component={LighthousePoint} />
      <Route path="/boat-removal-fl-margate" component={Margate} />
      <Route path="/boat-removal-fl-miramar" component={Miramar} />
      <Route path="/boat-removal-fl-north-lauderdale" component={NorthLauderdale} />
      <Route path="/boat-removal-fl-oakland-park" component={OaklandPark} />
      <Route path="/boat-removal-fl-parkland" component={Parkland} />
      <Route path="/boat-removal-fl-pembroke-pines" component={PembrokePines} />
      <Route path="/boat-removal-fl-plantation" component={Plantation} />
      <Route path="/boat-removal-fl-pompano-beach" component={PompanoBeachFL} />
      <Route path="/boat-removal-fl-sunrise" component={Sunrise} />
      <Route path="/boat-removal-fl-tamarac" component={Tamarac} />
      <Route path="/boat-removal-fl-weston" component={Weston} />
      <Route path="/boat-removal-fl-wilton-manors" component={WiltonManors} />
      <Route path="/boat-removal-fl-davie" component={Davie} />
      <Route path="/boat-removal-fl-hillsboro-beach" component={HillsboroBeach} />
      <Route path="/boat-removal-fl-lauderdale-by-the-sea" component={LauderdalebytheSea} />
      <Route path="/boat-removal-fl-pembroke-park" component={PembrokePark} />
      <Route path="/boat-removal-fl-southwest-ranches" component={SouthwestRanches} />
      <Route path="/boat-removal-fl-lazy-lake" component={LazyLake} />
      <Route path="/boat-removal-fl-sea-ranch-lakes" component={SeaRanchLakes} />
      <Route path="/boat-removal-fl-broadview-park" component={BroadviewPark} />
      <Route path="/boat-removal-fl-atlantis" component={Atlantis} />
      <Route path="/boat-removal-fl-belle-glade" component={BelleGlade} />
      <Route path="/boat-removal-fl-boca-raton" component={BocaRaton} />
      <Route path="/boat-removal-fl-boynton-beach" component={BoyntonBeach} />
      <Route path="/boat-removal-fl-briny-breezes" component={BrinyBreezes} />
      <Route path="/boat-removal-fl-cloud-lake" component={CloudLake} />
      <Route path="/boat-removal-fl-delray-beach" component={DelrayBeach} />
      <Route path="/boat-removal-fl-glen-ridge" component={GlenRidge} />
      <Route path="/boat-removal-fl-golf" component={Golf} />
      <Route path="/boat-removal-fl-greenacres" component={Greenacres} />
      <Route path="/boat-removal-fl-gulf-stream" component={GulfStream} />
      <Route path="/boat-removal-fl-haverhill" component={Haverhill} />
      <Route path="/boat-removal-fl-highland-beach" component={HighlandBeach} />
      <Route path="/boat-removal-fl-hypoluxo" component={Hypoluxo} />
      <Route path="/boat-removal-fl-juno-beach" component={JunoBeach} />
      <Route path="/boat-removal-fl-jupiter" component={Jupiter} />
      <Route path="/boat-removal-fl-jupiter-inlet-colony" component={JupiterInletColony} />
      <Route path="/boat-removal-fl-lake-clarke-shores" component={LakeClarkeShores} />
      <Route path="/boat-removal-fl-lake-park" component={LakePark} />
      <Route path="/boat-removal-fl-lake-worth-beach" component={LakeWorthBeach} />
      <Route path="/boat-removal-fl-lantana" component={Lantana} />
      <Route path="/boat-removal-fl-loxahatchee-groves" component={LoxahatcheeGroves} />
      <Route path="/boat-removal-fl-manalapan" component={Manalapan} />
      <Route path="/boat-removal-fl-mangonia-park" component={MangoniaPark} />
      <Route path="/boat-removal-fl-north-palm-beach" component={NorthPalmBeach} />
      <Route path="/boat-removal-fl-ocean-ridge" component={OceanRidge} />
      <Route path="/boat-removal-fl-pahokee" component={Pahokee} />
      <Route path="/boat-removal-fl-palm-beach" component={PalmBeach} />
      <Route path="/boat-removal-fl-palm-beach-gardens" component={PalmBeachGardens} />
      <Route path="/boat-removal-fl-palm-beach-shores" component={PalmBeachShores} />
      <Route path="/boat-removal-fl-palm-springs" component={PalmSprings} />
      <Route path="/boat-removal-fl-riviera-beach" component={RivieraBeach} />
      <Route path="/boat-removal-fl-royal-palm-beach" component={RoyalPalmBeach} />
      <Route path="/boat-removal-fl-south-bay" component={SouthBay} />
      <Route path="/boat-removal-fl-south-palm-beach" component={SouthPalmBeach} />
      <Route path="/boat-removal-fl-tequesta" component={Tequesta} />
      <Route path="/boat-removal-fl-wellington" component={Wellington} />
      <Route path="/boat-removal-fl-westlake" component={Westlake} />
      <Route path="/boat-removal-fl-west-palm-beach" component={WestPalmBeach} />
      <Route path="/boat-removal-fl-east-lake" component={EastLake} />
      <Route path="/boat-removal-fl-tarpon-springs" component={TarponSprings} />
      <Route path="/boat-removal-fl-palm-harbor" component={PalmHarbor} />
      <Route path="/boat-removal-fl-safety-harbor" component={SafetyHarbor} />
      <Route path="/boat-removal-fl-dunedin" component={Dunedin} />
      <Route path="/boat-removal-fl-clearwater" component={Clearwater} />
      <Route path="/boat-removal-fl-belleair" component={Belleair} />
      <Route path="/boat-removal-fl-largo" component={Largo} />
      <Route path="/boat-removal-fl-pinellas-park" component={PinellasPark} />
      <Route path="/boat-removal-fl-indian-rocks-beach" component={IndianRocksBeach} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
