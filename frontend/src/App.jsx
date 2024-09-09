// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// // import Header from './components/Header'; 
// // import Cart from './components/Cart';
// // import Home from './components/Home'; 
// import Pizza from './components/Pizza'; 
// // import RegisterPage from './components/RegisterPage';
// // import LoginPage from './components/LoginPage';

// function App() {
//   const [currentPage, setCurrentPage] = useState('home'); 

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <Home />;
//       case 'pizza':
//         return <Pizza />;
//       default:
//         return <div>Page not found</div>;
//     }
//   };

//   return (
//     <div>
//       <Navbar setCurrentPage={setCurrentPage} />
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Pizza from './components/Pizza'; 

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Pizza />
      <Footer />
    </div>
  );
}

export default App;
