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
import BUSOMIcon from '../src/images/BUBCLSLogo.png';
import DDInstructions from "./components/DifficultDecisions/DDInstructions/DDInstructions";
import DDDescriptions from "./components/DifficultDecisions/DDDescription/DDDescriptions";
import DDTable from "./components/DifficultDecisions/DDTable/DDTable";

/**React Router */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
         <div className="NavbarItems">
          <a target="_self" href="/SelectionScreen" rel="noreferrer"><img src={BUSOMIcon} className="BUSOMImageClass" alt=""/></a>
          </div>
        <Login />
      </div>
    ),
  },
  {
    path: "/Signup",
    element: (
      <div>
        <div className="NavbarItems">
          <a target="_self" href="/SelectionScreen" rel="noreferrer"><img src={BUSOMIcon} className="BUSOMImageClass" alt=""/></a>
        </div>
        <Signup />
      </div>
    ),
  },
  {
    path: "/ForgotPassword",
    element: (
      <div>
        <div className="NavbarItems">
          <a target="_self" href="/SelectionScreen" rel="noreferrer"><img src={BUSOMIcon} className="BUSOMImageClass" alt=""/></a>
        </div>
        <ForgotPassword />
      </div>
    ),
  },
  {
    path: "/SelectionScreen",
    element: (
      <div>
        <Navbar />
        <SelectionScreens />
      </div>
    ),
  },
  {
    path: "/PBInforamtion",
    element: (
      <div>
        <Navbar />
        <PBQuizInstruction />
      </div>
    ),
  },
  {
    path: "/PBInstructions",
    element: (
      <div>
        <Navbar />
        <PBQuesInstruction />
      </div>
    ),
  },
  {
    path: "/PBQuiz",
    element: (
      <div className="App">
        <Navbar />
        {
          //<Quesbar/>
        }
        <Ques />
      </div>
    ),
  },
  {
    path: "/DDInstructions",
    element: (
      <div>
        <Navbar />
        <DDInstructions />
      </div>
    ),
  },
  {
    path: "/DDDescriptions",
    element: (
      <div>
        <Navbar />
        <DDDescriptions/>
      </div>
    ),
  },
  {
    path: "/DDTable",
    element: (
      <div>
        <Navbar />
        <DDTable/>
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
