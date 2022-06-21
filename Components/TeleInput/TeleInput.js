import React, { useEffect } from "react";
import "./TeleInput.css";
import intlTelInput from "intl-tel-input";
import utils from "intl-tel-input/build/js/utils";

const TeleInput = ({ handleChange, formValues }) => {
  useEffect(() => {
    const input = document.querySelector("#phone");
    intlTelInput(input, {
      autoHideDialCode: true,
      autoPlaceholder: "ON",
      dropdownContainer: document.body,
      formatOnDisplay: true,
      hiddenInput: "full_number",
      initialCountry: "IN",
      nationalMode: true,
      placeholderNumberType: "MOBILE",
      preferredCountries: ["IN"],
      separateDialCode: true,
      utilsScript: { utils },
    });
  }, []);

  return (
    <>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formValues.phone}
        onChange={handleChange}
        required
      />
    </>
  );
};
export default TeleInput;
