import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// import { signOut } from "firebase/auth";
// import { auth } from "../config/config";
// import { AuthContext } from "../context/authContext";
// function Navbars() {
//   const { user, setUser, error } = useContext(AuthContext);
//   const redirectTo = useNavigate();
//   const login = () => {
//     setUser({
//       userName: "Jaspreet",
//     });
//     console.log("IS the user Login : ", user);
//     redirectTo("/");
//   };

//   const logout = () => {
//     console.log("now user is logout:", user);
//     signOut(auth)
//       .then(() => {
//         //sign out scccesful.
//         setUser(null);
//       })
//       .catch(() => {
//         //an error happend
//         console.log("signout error :>>", error);
//       });
//   };
//   return (
//     <>
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand href="/home"></Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/">Home</Nav.Link>
//             </Nav>
//             <Nav className="me-auto">
//               <Nav.Link href="/countrys">Countrys</Nav.Link>
//             </Nav>
//             <Nav className="me-auto">
//               <Nav.Link href="/register">Register</Nav.Link>
//             </Nav>

//             {user && (
//               <Button variant="danger" onClick={logout}>
//                 logout{" "}
//               </Button>
//             )}
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Navbars;
