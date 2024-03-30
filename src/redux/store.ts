import {configureStore} from "@reduxjs/toolkit";
import {weatherForecastSlice} from "./slices/weatherForecast";
import {useDispatch, useSelector} from "react-redux";
import {TypedUseSelectorHook} from "react-redux";

export const store = configureStore({
  reducer: {
    weatherForecast: weatherForecastSlice.reducer
  }
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;