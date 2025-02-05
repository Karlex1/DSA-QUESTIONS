
async function fetchuser() {
  try {
    let users = await fetch("https://randomuser.me/api/");
    let data = await users.json();

    document.getElementById("name").innerHTML = "Name - " + data.results[0].name.first;
    let DOBdate = new Date(data.results[0].dob.date).toLocaleDateString();
    document.getElementById("dob").innerHTML = "DOB - " + DOBdate;

    console.log(data.results[0].dob.date);

  }
  catch (err) { console.log(err) }
  finally { console.log("runned"); }
}
fetchuser();
