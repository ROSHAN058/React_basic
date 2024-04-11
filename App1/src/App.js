import './App.css';
import { useState } from 'react';

const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ddd',
  borderRadius: '4px',
  width: 'calc(100% - 22px)', // Adjust for padding and border
};
const buttonStyle = {
  padding: '10px 20px',
  margin: '10px 0',
  backgroundColor: 'transparent', // Set background to transparent
  color: '#007bff', // Adjust text color as needed
  border: '2px solid #007bff', // Add border with desired color
  borderRadius: '20px', // Increase for more rounded corners
  cursor: 'pointer',
  outline: 'none', // Remove focus outline
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: 'auto',
};


function AboutPage() {
  return (
    <>

    </>
  );
}

const headerStyle = {
  backgroundColor: '#fff',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #ddd',
};

const logoStyle = {
  fontWeight: 'bold',
  fontSize: '24px',
  color: '#007bff',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
};

const navItemStyle = {
  margin: '0 10px',
  cursor: 'pointer',
};



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement login logic here
    console.log('Login with:', email, password);
  };

  return (
    <form onSubmit={handleLogin} style={formStyle}>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      required
      style={inputStyle}
    />
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
      required
      style={inputStyle}
    />
    <button type="submit" style={buttonStyle}>Login</button>
  </form>
);
};

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }
    // Implement signup logic here
    console.log('Signup with:', email, password);
  };

  return (
    <form onSubmit={handleSignup} style={formStyle}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        style={inputStyle}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
        style={inputStyle}
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Signup</button>
    </form>
  );
};




export default function App() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
     
      <AboutPage/> 
      <header style={headerStyle}>
      <div style={logoStyle}> </div>
      <nav style={navStyle}>
               <div>
                <a style={navItemStyle} href="#jobs">Jobs</a>
                <a style={navItemStyle} href="#companies">Companies</a>
                <a style={navItemStyle} href="#services">Services</a>
            <button onClick={() => setShowLogin(true)} style={buttonStyle}>Login</button>
      <button onClick={() => setShowLogin(false)} style={buttonStyle}>Signup</button>
      </div>
      </nav>
    </header>
      <div>
      
      {showLogin ? <LoginPage /> : <SignupPage />}
    </div>
    </div>
    
  );
}