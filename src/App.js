import './App.css';
import Navbar from './components/NavBar/Navbar';
import Quesbar from './components//PersonalBelifs/quesBar/Quesbar';
import Ques from './components/PersonalBelifs/Questions/Ques';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import PBQuesInstruction from './components/PersonalBelifs/QuestionInstruction/PBQuesInstruction';
import PBQuizInstruction from './components/PersonalBelifs/QuizInstructions/PBQuizInstructions';
import SelectionScreens from './components/SelectionScreen/SelectionScreens';
import Login from './components/UserAuth/Login';
import Signup from './components/UserAuth/Signup';
import ForgotPassword from './components/UserAuth/ForgotPassword';


/**React Router */
const router = createBrowserRouter(
  [
    {
      path :'/',
      element : <div>
        <Navbar/>
        <Login/>
      </div> 
    },
    {
      path :'/Signup',
      element : <div>
        <Navbar/>
        <Signup/>
      </div> 
    },
    {
      path :'/ForgotPassword',
      element : <div>
        <Navbar/>
        <ForgotPassword/>
      </div> 
    },
    {
      path :'/SelectionScreen',
      element : <div>
        <Navbar/>
        <SelectionScreens/>
      </div> 
    },
    {
      path :'/PBInforamtion',
      element : <div>
        <Navbar/>
        <PBQuizInstruction/>
      </div> 
    },
    {
      path :'/PBInstructions',
      element : <div>
        <Navbar/>
        <PBQuesInstruction/>
      </div> 
    },
    {
      path : '/PBQuiz',
      element : 
      <div className="App">
       <Navbar/>
       <Quesbar/>
       <Ques/>
       </div>
    },
    {
      path : '/results',
      element : <div>Homepage components</div>
    },
  ]
  )

function App() {
  return ( 
    // <div className="App">
    // <Navbar/>
    // <Quesbar/>
    // <Ques/>
    // </div>
    <>
    <RouterProvider router={router} />
    </>
    );

}

export default App;
