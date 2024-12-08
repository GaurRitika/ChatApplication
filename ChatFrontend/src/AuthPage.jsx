import axios from 'axios';


const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post('http://localhost:3001/authenticate'
,{username : value}
      )
      .then(r=> props.onAuth({username : value , secret:value}))
      props.onAuth({...r.data, secret: value })
      .catch(e=>console.log('error',e));
    };
  
    return (
      // <div className="background">
      //   <form onSubmit={onSubmit} className="form-card">
      //     <div className="form-title">Welcome 👋</div>
  
      //     <div className="form-subtitle">Set a username to get started</div>
  
      //     <div className="auth">
      //       <div className="auth-label">Username</div>
      //       <input className="auth-input" name="username" />
      //       <button className="auth-button" type="submit">
      //         Enter
      //       </button>
      //     </div>
      //   </form>
      // </div>
      <div class="wrapper">
    <div class="form-container">
      <h1 class="title">Welcome Back!</h1>
      <form  onSubmit={onSubmit} >
        <div class="input-group">
          <input type="text" id="username" class="input" placeholder="Enter your username" required/>
        </div>
        <button type="submit" class="submit-btn">Get Started</button>
      </form>
    </div>
  </div>
    );
  };
  
  export default AuthPage;