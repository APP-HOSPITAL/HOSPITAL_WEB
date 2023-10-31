import axios  from "axios";
// import { useRouter } from "next";
import React from "react";
function LogIn() {
  // const router = useRouter();
  const [state, setState] = React.useState({
    gmail: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();

    const { gmail, password } = state;
try{

  axios.post("https://hospital.somee.com/api/loginemployee", state)
    .then((res) => {
      console.log(res.data.id);
      localStorage.setItem('idemployee0000', res.data.id);
      location.href = "/";
    })
    .catch((err) => {
      console.log(err);
    });


  // const response = await fetch('https://hospital.somee.com/api/loginemployee', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(state),
  // });



  // const data = await response.json();
  // const {id,name}= data
  // localStorage.setItem('idemployee0000', id);
  // console.log(data)
}catch(err){
  console.err(err)
}

    alert(`You are login with email: ${gmail} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="gmail"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default LogIn;
