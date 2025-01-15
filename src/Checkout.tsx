import  { useState } from "react";
import DateAndTravellers from "./CheckoutComponents/DateAndTravellers";
import UserDetails from "./CheckoutComponents/UserDetails";
import CheckoutTripView from "./CheckoutComponents/CheckoutTripView";
function Checkout() {
  const [travellers, setTravellers] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>("");

  return (
    <>
     <DateAndTravellers
        travellers={travellers}
        setTravellers={setTravellers}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <UserDetails />
      <CheckoutTripView travellers={travellers} />

    </>
  );
}
export default Checkout;
