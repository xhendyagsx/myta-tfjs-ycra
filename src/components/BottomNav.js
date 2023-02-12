import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";

import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import CasinoIcon from '@mui/icons-material/Casino';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import { useNavigate} from "react-router-dom";

const BottomNav = () => {
  const [bnVal, setBNValue] = useState(0);
  const navigasi = useNavigate(); 
  return (
    <BottomNavigation 
      sx={{ width: "100%", position: "fixed", bottom: 0}} 
      value={bnVal} 
      onChange={(event, value)  =>setBNValue(value)}
    >
      <BottomNavigationAction 
        label="Home" 
        value={bnVal} 
        onClick={()=>navigasi("/")} 
        icon={<ShutterSpeedIcon />} 
      />
      <BottomNavigationAction 
        label="Predict" 
        value={bnVal} 
        onClick={()=>navigasi("/predict")} 
        icon={<ModelTrainingIcon />}
      />
      <BottomNavigationAction 
        label="History" 
        value={bnVal} 
        onClick={()=>navigasi("/history")} 
        icon={<CasinoIcon />}
      />
      <BottomNavigationAction 
        label="About" 
        value={bnVal} 
        onClick={()=>navigasi("/about")} 
        icon={<SettingsAccessibilityIcon />} 
      />
    </BottomNavigation>
  )
}

export default BottomNav;