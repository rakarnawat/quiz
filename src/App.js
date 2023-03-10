import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Ques from "./components/PersonalBelifs/Questions/Ques";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PBQuesInstruction from "./components/PersonalBelifs/QuestionInstruction/PBQuesInstruction";
import PBQuizInstruction from "./components/PersonalBelifs/QuizInstructions/PBQuizInstructions";
import SelectionScreens from "./components/SelectionScreen/SelectionScreens";
import Login from "./components/UserAuth/Login";
import Signup from "./components/UserAuth/Signup";
import ForgotPassword from "./components/UserAuth/ForgotPassword";
import EndScreen from "./components/endOfQuiz/EndScreen";
import "../src/components/NavBar/NavbarStyles.css";
import BUSOMIcon from "../src/images/BUBCLSLogo.png";
import { AuthContext } from "./store/auth-context";
import RootLayout from "./RootLayout";
/**React Router */

const MainLogin = () => {
  return (
    <div>
      <div className="NavbarItems">
        <a target="_self" href="/SelectionScreen" rel="noreferrer">
          <img src={BUSOMIcon} className="BUSOMImageClass" alt="" />
        </a>
      </div>
      <Login />
    </div>
  );
};

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Login />
          </div>
        ),
      },
      {
        path: "/Signup",
        element: (
          <div>
            <Signup />
          </div>
        ),
      },
      {
        path: "/ForgotPassword",
        element: (
          <div>
            <ForgotPassword />
          </div>
        ),
      },
      {
        path: "/SelectionScreen",
        element: (
          <div>
            <SelectionScreens />
          </div>
        ),
      },
      {
        path: "/PBInforamtion",
        element: (
          <div>
            <PBQuizInstruction />
          </div>
        ),
      },
      {
        path: "/PBInstructions",
        element: (
          <div>
            <PBQuesInstruction />
          </div>
        ),
      },
      {
        path: "/PBQuiz",
        element: (
          <div className="App">
            <Ques />
          </div>
        ),
      },
      {
        path: "/endScreen",
        element: (
          <div>
            <EndScreen />
            <Navbar />
          </div>
        ),
      },
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <div className="NavbarItems">
//           <a target="_self" href="/SelectionScreen" rel="noreferrer">
//             <img src={BUSOMIcon} className="BUSOMImageClass" alt="" />
//           </a>
//         </div>
//         <Login />
//       </div>
//     ),
//   },
//   {
//     path: "/Signup",
//     element: (
//       <div>
//         <div className="NavbarItems">
//           <a target="_self" href="/SelectionScreen" rel="noreferrer">
//             <img src={BUSOMIcon} className="BUSOMImageClass" alt="" />
//           </a>
//         </div>
//         <Signup />
//       </div>
//     ),
//   },
//   {
//     path: "/ForgotPassword",
//     element: (
//       <div>
//         <div className="NavbarItems">
//           <a target="_self" href="/SelectionScreen" rel="noreferrer">
//             <img src={BUSOMIcon} className="BUSOMImageClass" alt="" />
//           </a>
//         </div>
//         <ForgotPassword />
//       </div>
//     ),
//   },
//   {
//     path: "/SelectionScreen",
//     element: (
//       <div>
//         <Navbar />
//         <SelectionScreens />
//       </div>
//     ),
//   },
//   {
//     path: "/PBInforamtion",
//     element: (
//       <div>
//         <Navbar />
//         <PBQuizInstruction />
//       </div>
//     ),
//   },
//   {
//     path: "/PBInstructions",
//     element: (
//       <div>
//         <Navbar />
//         <PBQuesInstruction />
//       </div>
//     ),
//   },
//   {
//     path: "/PBQuiz",
//     element: (
//       <div className="App">
//         <Navbar />
//         {
//           //<Quesbar/>
//         }
//         <Ques />
//       </div>
//     ),
//   },
//   {
//     path: "/endScreen",
//     element: (
//       <div>
//         <EndScreen />
//         <Navbar />
//       </div>
//     ),
//   },
// ]);

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <main>
        {!ctx.isLoggedIn && <MainLogin /> && (
          <RouterProvider router={router2} />
        )}
        {ctx.isLoggedIn && <SelectionScreens /> && (
          <RouterProvider router={router2} />
        )}
      </main>
      {/* {!ctx.isLoggedIn && <MainLogin />}
      {ctx.isLoggedIn && <RouterProvider router={router2} />} */}
      {/* <RouterProvider router={router2} /> */}
    </React.Fragment>
  );
}

export default App;
