import React from 'react';
import {Typography} from "@mui/material";
import {useAppSelector} from "../../redux/store";
const  DisplayPage: React.FC = () => {
  const state = useAppSelector((state) => state.weatherForecast);
  return (
    <div>
      {
        state.data ? (
          <>
            <Typography variant="h3">{state.data.name}</Typography>
            <Typography variant="h4">{state.data.weather[0]?.main}</Typography>
            <Typography variant="h4">{state.data.weather[0]?.description}</Typography>
            <Typography variant="h4">{state.data.main.temp}</Typography>
          </>
        ) : (
          <Typography variant="h3">No Data</Typography>
        )
      }

    </div>
  );
}

export default DisplayPage;