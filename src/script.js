const Name = document.querySelector("#name");
const avatar = document.querySelector("#avatar");
const phoneNu = document.querySelector("#phoneNu");
const reloadBtn = document.querySelector("#reloadBtn");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const nationality = document.querySelector("#nationality");
const address = document.querySelector("#address");
const postcode = document.querySelector("#postcode");

function RandomUsers() {
  axios
    .get("https://randomuser.me/api")
    .then((result) => {
      //   console.log(result.status);
      console.log(result.data);
      const dataAddress = result.data.results[0];

      avatar.src = dataAddress.picture.medium;
      Name.innerHTML =
        dataAddress.name.title +
        " " +
        dataAddress.name.first +
        " " +
        dataAddress.name.last;
      phoneNu.innerHTML = dataAddress.cell;

      email.innerHTML = dataAddress.email;
      age.innerHTML = dataAddress.dob.age;
      nationality.innerHTML = dataAddress.location.country;
      address.innerHTML =
        " NO " +
        " " +
        dataAddress.location.street.number +
        ", " +
        dataAddress.location.street.name +
        " , " +
        dataAddress.location.city;
      postcode.innerHTML = dataAddress.location.postcode;
    })

    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("In The End");
    });
}
// RandomUsers();

reloadBtn.addEventListener("click", RandomUsers);
