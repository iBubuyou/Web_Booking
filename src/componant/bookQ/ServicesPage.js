import { useEffect } from "react";
import ServicesForm from "./Services";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";

export default function ServiceIn() {
    function updateTimes(date) {
        return fetchAPI(date);
      }
    
      const output = fetchAPI(new Date());
    
      const [availableTimes, dispatch] = useReducer(updateTimes, output);



      return(
        <>
        <ServicesForm availableTimes={availableTimes} updateTimes={dispatch} />
      </>
      );
}
