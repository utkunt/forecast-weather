import React from "react";
import {useState} from "react";
import {StyledFormContainer, StyledButton, StyledInput} from "./SearchForm.styled.ts";
import {useAppDispatch} from "../../redux/store.ts";
import {fetchWeatherByLocation} from "../../redux/slices/weatherForecast.ts";

export const SearchForm: React.FC = () => {
  const [location, setLocation]  = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit =  () => {
    dispatch(fetchWeatherByLocation(location));
  }
  return (
    <StyledFormContainer>
      <StyledInput type="text" placeholder="location" onChange={(e) => {
        setLocation(e.target.value);
      }} />
      <StyledButton variant="contained" onClick={() => {
        handleSubmit();
      }}>Search</StyledButton>
    </StyledFormContainer>
  );
}