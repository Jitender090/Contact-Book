document.getElementById("submit").addEventListener("click", () => {
  var uname = document.getElementById("username").value.toLowerCase();
  var mnumber = document.getElementById("mobilenumber").value;
  var display_1 = document.getElementById("display-1");

  if (uname == "" && mnumber == "") {
    display_1.innerText = "Please Enter Name & Mobile Number";
    display_1.style.color = "blue";
  } else {
    if (mnumber.length != 10) {
      display_1.innerText = "Please Enter 10- Digit Mobile Number";
      display_1.style.color = "blue";
    } else {
      display_1.innerText = " Successfully Contact Saved";
      display_1.style.color = "orange";
      localStorage.setItem(uname, mnumber);
      // objects = {
      //   namee: uname,
      //   number: mnumber,
      // };
      // console.log(objects);
    }
  }
  setInterval(() => {
    display_1.innerHTML = "";
  }, 6000);
});

document.getElementById("getdetail").addEventListener("click", () => {
  var getname = document.getElementById("getname").value;
  var getresult = document.getElementById("getresult");
  var output = localStorage.getItem(getname);

  if (output == null) {
    getresult.innerText = "Contact Not Found";
    getresult.style.color = "yellow";
  } else {
    getresult.innerText = `${getname.toUpperCase()} : ${output}`;
    getresult.style.color = "yellow";
  }
});
