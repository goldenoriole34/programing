import React, { useState } from "react";

function HordForm() {
  const [clan, setClan] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The Clan name you Entered was ${clan}`)
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label>Enter Your Clans:
        <input
          type="text"
          value={clan}
          onChange={(e) => setClan(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default HordForm;