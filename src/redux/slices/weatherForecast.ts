import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {api} from "../../utils/api.ts";

export interface IWeatherForecastResponse {
  coord:      Coord;
  weather:    Weather[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

export interface Sys {
  type:    number;
  id:      number;
  country: string;
  sunrise: number;
  sunset:  number;
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
}

export interface IForecastState {
  data: IWeatherForecastResponse | null;
  status: 'idle' | 'loading';

}

export const initialState: IForecastState = {
  data: null,
  status: 'idle',
};


export const fetchWeatherByLocation = createAsyncThunk(
  'weatherforecast/getWeatherByLocation',
  async (location: string) => {
    const response = await fetch(`${api.baseURL}weather?q=${location}&units=metric&APPID=${api.key}`)
    return await response.json()
  },
)

export const weatherForecastSlice = createSlice({
  name: 'weatherforecast',
  initialState,
  reducers: {
    resetWeatherForecast: (state) => {
      state.data = null;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByLocation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeatherByLocation.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchWeatherByLocation.rejected, (state) => {
        state.status = 'idle';
      }
    );

  },
});
export const { resetWeatherForecast } = weatherForecastSlice.actions;
