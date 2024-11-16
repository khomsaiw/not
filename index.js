const sendLineNotify = async () => {
  const token_notify = urlParams.get("token_notify"); // Replace with your LINE Notify token

  const message = `ชื่อ: ${new URLSearchParams(window.location.search).get(
    "firstname"
  )} 
                     วันที่: ${new URLSearchParams(window.location.search).get(
                       "date"
                     )} 
                     เวลา: ${new URLSearchParams(window.location.search).get(
                       "time"
                     )} 
                     สถานะ: ${new URLSearchParams(window.location.search).get(
                       "checkwork"
                     )} 
                     บริษัท: ${new URLSearchParams(window.location.search).get(
                       "company"
                     )}`;

  try {
    const response = await fetch("https://notify-api.line.me/api/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token_notify}`,
      },
      body: new URLSearchParams({
        message: message,
      }),
    });

    const data = await response.json();
    console.log(data); // You can log the response to see the result
  } catch (error) {
    console.error("Error:", error);
  }
};

// Call the function
sendLineNotify();
