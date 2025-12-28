import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Quote from "@/pages/Quote";
import PompanoBeach from "@/pages/PompanoBeach";
import TampaBoatRemoval from "@/pages/TampaBay";
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
import IndianShores from "@/pages/SEO/westcoast/IndianShores"
import MadeiraBeach from "@/pages/SEO/westcoast/MadeiraBeach"
import Lutz from "@/pages/SEO/westcoast/Lutz"
import Seminole from "@/pages/SEO/westcoast/Seminole"
import StPeteBeach from "@/pages/SEO/westcoast/StPeteBeach"
import TreasureIsland from "@/pages/SEO/westcoast/TreasureIsland"
import StPetersburg from "@/pages/SEO/westcoast/StPetersburg"
import Tampa from "@/pages/SEO/westcoast/Tampa"
import TownNCountry from "@/pages/SEO/westcoast/TownNCountry"
import PalmRiverClairMel from "@/pages/SEO/westcoast/PalmRiverClairMel"
import AnnaMaria from "@/pages//SEO/westcoast/AnnaMaria"
import Bradenton from "@/pages//SEO/westcoast/Bradenton"
import Sarasota from "@/pages//SEO/westcoast/Sarasota"
import Westchase from "@/pages//SEO/westcoast/Westchase"
import GreaterCarrollwood from "@/pages//SEO/westcoast/GreaterCarrollwood"
import Holiday from "@/pages//SEO/westcoast/Holiday"
import CitrusPark from "@/pages//SEO/westcoast/CitrusPark"
import TempleTerrace from "@/pages//SEO/westcoast/TempleTerrace"
import University from "@/pages//SEO/westcoast/University"
import LandOLakes from "@/pages//SEO/westcoast/LandOLakes"
import Odessa from "@/pages//SEO/westcoast/Odessa"
import NewPortRichey from "@/pages//SEO/westcoast/NewPortRichey"
import BayonetPoint from "@/pages//SEO/westcoast/BayonetPoint"
import Hudson from "@/pages//SEO/westcoast/Hudson"
import PlantCity from "@/pages//SEO/westcoast/PlantCity"
import Dover from "@/pages//SEO/westcoast/Dover"
import Seffner from "@/pages//SEO/westcoast/Seffner"
import Brandon from "@/pages//SEO/westcoast/Brandon"
import Thonotosassa from "@/pages//SEO/westcoast/Thonotosassa"
import Gibsonton from "@/pages//SEO/westcoast/Gibsonton"
import Riverview from "@/pages//SEO/westcoast/Riverview"
import Bloomingdale from "@/pages//SEO/westcoast/Bloomingdale"
import ApolloBeach from "@/pages//SEO/westcoast/ApolloBeach"
import Ruskin from "@/pages//SEO/westcoast/Ruskin"
import SunCityCenter from "@/pages//SEO/westcoast/SunCityCenter"
import Wimauma from "@/pages//SEO/westcoast/Wimauma"
import Parrish from "@/pages//SEO/westcoast/Parrish"
import Ellenton from "@/pages//SEO/westcoast/Ellenton"
import Palmetto from "@/pages//SEO/westcoast/Palmetto"
import LakewoodRanch from "@/pages//SEO/westcoast/LakewoodRanch"
import BayshoreGardens from "@/pages//SEO/westcoast/BayshoreGardens"
import Tallevast from "@/pages//SEO/westcoast/Tallevast"
import HolmesBeach from "@/pages//SEO/westcoast/HolmesBeach"
import BradentonBeach from "@/pages//SEO/westcoast/BradentonBeach"
import LongboatKey from "@/pages//SEO/westcoast/LongboatKey"
import SiestaKey from "@/pages//SEO/westcoast/SiestaKey"
import Fruitville from "@/pages//SEO/westcoast/Fruitville"
import PalmerRanch from "@/pages//SEO/westcoast/PalmerRanch"
import Osprey from "@/pages//SEO/westcoast/Osprey"
import Nokomis from "@/pages//SEO/westcoast/Nokomis"
import Venice from "@/pages//SEO/westcoast/Venice"
import VeniceGardens from "@/pages//SEO/westcoast/VeniceGardens"
import SouthVenice from "@/pages//SEO/westcoast/SouthVenice"
import WarmMineralSprings from "@/pages//SEO/westcoast/WarmMineralSprings"
import NorthPort from "@/pages//SEO/westcoast/NorthPort"
import PortCharlotte from "@/pages//SEO/westcoast/PortCharlotte"
import CharlotteHarbor from "@/pages//SEO/westcoast/CharlotteHarbor"
import LakeSuzy from "@/pages//SEO/westcoast/LakeSuzy"
import HarborHeights from "@/pages//SEO/westcoast/HarborHeights"
import PuntaGorda from "@/pages//SEO/westcoast/PuntaGorda"
import Acline from "@/pages//SEO/westcoast/Acline"
import BurntStoreMarina from "@/pages//SEO/westcoast/BurntStoreMarina"
import Oldsmar from "@/pages/SEO/westcoast/Oldsmar";
import ElJobean from "@/pages//SEO/westcoast/ElJobean";
import Englewood from "@/pages//SEO/westcoast/Englewood";
import ManasotaKey from "@/pages//SEO/westcoast/ManasotaKey";
import RotondaWest from "@/pages//SEO/westcoast/RotondaWest";
import CapeHaze from "@/pages//SEO/westcoast/CapeHaze";
import Placida from "@/pages//SEO/westcoast/Placida";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/pompano-beach-boat-removal" component={PompanoBeach} />
      <Route path="/tampa-boat-removal" component={TampaBoatRemoval} />
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
      <Route path="/boat-removal-fl-indian-shores" component={IndianShores} />
      <Route path="/boat-removal-fl-madeira-beach" component={MadeiraBeach} />
      <Route path="/boat-removal-fl-lutz" component={Lutz} />
      <Route path="/boat-removal-fl-seminole" component={Seminole} />
      <Route path="/boat-removal-fl-st-pete-beach" component={StPeteBeach} />
      <Route path="/boat-removal-fl-treasure-island" component={TreasureIsland} />
      <Route path="/boat-removal-fl-st-petersburg" component={StPetersburg} />
      <Route path="/boat-removal-fl-tampa" component={Tampa} />
      <Route path="/boat-removal-fl-town-n-country" component={TownNCountry} />
      <Route path="/boat-removal-fl-palm-river-clair-mel" component={PalmRiverClairMel} />
      <Route path="/boat-removal-fl-anna-maria" component={AnnaMaria}/>
      <Route path="/boat-removal-fl-bradenton" component={Bradenton}/>
      <Route path="/boat-removal-fl-sarasota" component={Sarasota}/>
      <Route path="/boat-removal-fl-westchase" component={Westchase}/>
      <Route path="/boat-removal-fl-greater-carrollwood" component={GreaterCarrollwood}/>
      <Route path="/boat-removal-fl-holiday" component={Holiday}/>
      <Route path="/boat-removal-fl-citrus-park" component={CitrusPark}/>
      <Route path="/boat-removal-fl-temple-terrace" component={TempleTerrace}/>
      <Route path="/boat-removal-fl-university" component={University}/>
      <Route path="/boat-removal-fl-land-o-lakes" component={LandOLakes}/>
      <Route path="/boat-removal-fl-odessa" component={Odessa}/>
      <Route path="/boat-removal-fl-new-port-richey" component={NewPortRichey}/>
      <Route path="/boat-removal-fl-bayonet-point" component={BayonetPoint}/>
      <Route path="/boat-removal-fl-hudson" component={Hudson}/>
      <Route path="/boat-removal-fl-plant-city" component={PlantCity}/>
      <Route path="/boat-removal-fl-dover" component={Dover}/>
      <Route path="/boat-removal-fl-seffner" component={Seffner}/>
      <Route path="/boat-removal-fl-brandon" component={Brandon}/>
      <Route path="/boat-removal-fl-thonotosassa" component={Thonotosassa}/>
      <Route path="/boat-removal-fl-gibsonton" component={Gibsonton}/>
      <Route path="/boat-removal-fl-riverview" component={Riverview}/>
      <Route path="/boat-removal-fl-bloomingdale" component={Bloomingdale}/>
      <Route path="/boat-removal-fl-apollo-beach" component={ApolloBeach}/>
      <Route path="/boat-removal-fl-ruskin" component={Ruskin}/>
      <Route path="/boat-removal-fl-sun-city-center" component={SunCityCenter}/>
      <Route path="/boat-removal-fl-wimauma" component={Wimauma}/>
      <Route path="/boat-removal-fl-parrish" component={Parrish}/>
      <Route path="/boat-removal-fl-ellenton" component={Ellenton}/>
      <Route path="/boat-removal-fl-palmetto" component={Palmetto}/>
      <Route path="/boat-removal-fl-lakewood-ranch" component={LakewoodRanch}/>
      <Route path="/boat-removal-fl-bayshore-gardens" component={BayshoreGardens}/>
      <Route path="/boat-removal-fl-tallevast" component={Tallevast}/>
      <Route path="/boat-removal-fl-holmes-beach" component={HolmesBeach}/>
      <Route path="/boat-removal-fl-bradenton-beach" component={BradentonBeach}/>  
      <Route path="/boat-removal-fl-longboat-key" component={LongboatKey}/>
      <Route path="/boat-removal-fl-siesta-key" component={SiestaKey}/>    
      <Route path="/boat-removal-fl-fruitville" component={Fruitville}/>
      <Route path="/boat-removal-fl-palmer-ranch" component={PalmerRanch}/>
      <Route path="/boat-removal-fl-osprey" component={Osprey}/>
      <Route path="/boat-removal-fl-nokomis" component={Nokomis}/>
      <Route path="/boat-removal-fl-venice" component={Venice}/>
      <Route path="/boat-removal-fl-venice-gardens" component={VeniceGardens}/>
      <Route path="/boat-removal-fl-south-venice" component={SouthVenice}/>
      <Route path="/boat-removal-fl-warm-mineral-springs" component={WarmMineralSprings}/>
      <Route path="/boat-removal-fl-north-port" component={NorthPort}/>
      <Route path="/boat-removal-fl-port-charlotte" component={PortCharlotte}/>
      <Route path="/boat-removal-fl-charlotte-harbor" component={CharlotteHarbor}/>
      <Route path="/boat-removal-fl-lake-suzy" component={LakeSuzy}/>
      <Route path="/boat-removal-fl-harbor-heights" component={HarborHeights}/>      
      <Route path="/boat-removal-fl-punta-gorda" component={PuntaGorda}/>
      <Route path="/boat-removal-fl-acline" component={Acline}/>
      <Route path="/boat-removal-fl-burnt-store-marina" component={BurntStoreMarina}/>
      <Route path="/boat-removal-fl-oldsmar" component={Oldsmar} />
      <Route path="/boat-removal-fl-el-jobean" component={ElJobean}/>
      <Route path="/boat-removal-fl-englewood" component={Englewood}/>
      <Route path="/boat-removal-fl-manasota-key" component={ManasotaKey}/>
      <Route path="/boat-removal-fl-rotonda-west" component={RotondaWest}/>
      <Route path="/boat-removal-fl-cape-haze" component={CapeHaze}/>
      <Route path="/boat-removal-placida" component={Placida}/>
      
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
