const Navbar = ({ setCurrentPage }) => {
  const total = 25000;
  const token = false;

  return (
    <nav>
      <h2>Pizzería Mamma Mía</h2>
      <button onClick={() => setCurrentPage('home')}>🍕 Home</button>
      {token ? (
        <>
          <button onClick={() => setCurrentPage('profile')}>🔓 Profile</button>
          <button>🔒 Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => setCurrentPage('login')}>🔐 Login</button>
          <button onClick={() => setCurrentPage('register')}>🔐 Register</button>
        </>
      )}
      <button className="navbar-button navbar-total">🛒 Total: ${total.toLocaleString()}</button>
    </nav>
  );
};

export default Navbar;

  