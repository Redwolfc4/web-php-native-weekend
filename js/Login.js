document.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Ada yang kosong tuh email / password");
  } else {
    alert("Login berhasil");
  }
});
