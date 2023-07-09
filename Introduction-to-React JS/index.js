const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Rahul ", lastName: "Attuluri" };
const className = "greeting";
const element = (
  <div>
    <h1 className={className}> Hello, {fullName(user)}!</h1>
    <h1 className={className}>Hello!</h1>
    <span>Good to see you here.</span>
    <img src="" alt="IMAGE URL" />
  </div>
);
const parentElement = document.getElementById("root");
ReactDOM.render(element, parentElement);
