document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("otp-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("email");
    const otp = document.getElementById("otp").value;

    if (!email || !otp) {
      alert("Missing email or OTP.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (data.success) {
        alert("OTP verified. Login successful!");
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html"; // redirect to dashboard
      } else {
        alert(data.message || "OTP verification failed.");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      alert("Server error");
    }
  });
});
