import React, { Component } from "react";
//,{uesState, useEffect } import { Container } from "react-bootstrap";
import "../Questions/QuesStyles.css";
//import { ref, onValue } from 'firebase/database';
//import { Table } from 'react-bootstrap';
//import StartFirebase from "../../firebase";
//import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
const marks = [
  {
    value: 0,
    label: 'Strongly Agree',
  },
  {
    value: 25,
    label: 'Agree',
  },
  {
    value: 50,
    label: 'Neutral',
  },
  {
    value: 75,
    label: 'Disagree',
  },
  {
    value: 100,
    label: 'Strongly Disagree'
  }
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}
// const iOSBoxShadow =
//   '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';


//buttons--------------------
class Ques extends Component{
  render(){
    function  onNext() {
      console.log('on Next Click')
    }
    function  onPrev() {
      console.log('on Prev Click')
    }

      return(
          <nav className="QuestionsDisplay">
              <div className="QuesNumber">
                  Q1.
              </div>
              <div className="QuesDiscription">
                <p>A good supervisor must be very careful not to interfere with the work of his/her subordinates, otherwise s/he can lose their support.</p>
              </div>
              <div id="checkboxes"></div>
              <div class="radiobtnLine">
                <div class="checkboxgroup">
                  <input type="radio" name="radio" id="my_radio_button_id1" />
                  <label for="my_radio_button_id1">Strongly Disagree&emsp;&emsp;&emsp;&emsp;</label>
                </div>
                <div class="checkboxgroup">
                  <input type="radio" name="radio" id="my_radio_button_id2" />
                  <label for="my_radio_button_id2">Disagree&emsp;&emsp;&emsp;&emsp;</label>
                </div>
                <div class="checkboxgroup">
                  <input type="radio" name="radio" id="my_radio_button_id3" />
                  <label for="my_radio_button_id3">Neutral&emsp;&emsp;&emsp;&emsp;</label>
                </div>
                <div class="checkboxgroup">
                  <input type="radio" name="radio" id="my_radio_button_id4" />
                  <label for="my_radio_button_id4">Agree&emsp;&emsp;&emsp;&emsp;</label>
                </div>
                <div class="checkboxgroup">
                  <input type="radio" name="radio" id="my_radio_button_id5" />
                  <label for="my_radio_button_id5">Strongly Agree</label>
                </div>
              </div>
              
              {/*quiz btn*/}
              <div>
                <button className="PrevBtn" onClick={onPrev}>{'< '}Prev</button>
                <button className="NextBtn" onClick={onNext}>Next{' >'}</button>
              </div>
          </nav>
      )
  }
}


/*
const db = StartFirebase();
console.log(db);



const Ques = () => {
 
  const [info , setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener('load', () => {
      Fetchdata();
    });

  // Fetch the required data using the get() method
  const Fetchdata = ()=>{
      db.collection("data").get().then((querySnapshot) => {
          
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach(element => {
              var data = element.data();
              setInfo(arr => [...arr , data]);
               
          });
      })
  }
   
  // Display the result on the page
  return (
      <div>
          <center>
          <h2>Student Details</h2>
          </center>
       
      {
          info.map((data) => (
          <Frame course={data.questionDescription}
                 name={data.questionNumber}
                 age={data.startsWith}/>
          ))
      }
      </div>

  );
}

// Define how each display entry will be structured
const Frame = ({course , name , age}) => {
  console.log(course + " " + name + " " + age);
  return (
      <center>
          <div className="div">
               
<p>NAME : {name}</p>

               
<p>Age : {age}</p>

               
<p>Course : {course}</p>

          </div>
      </center>
  );
}


*/




/*

export class Ques extends React.Component{
  constructor(){
    super();
    this.state = {
      tableData: []
    }
  }

  componenetDidMount(){
    const dbRef = ref(db, 'quiz-ad3e0');
    onValue(dbRef, (snapshot)=>{
      let records = [];
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({"key":keyName, "datd":data});
      });
      this.setState({tableData: records});
    });
  }

  render(){
    return(
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Sr.no.</th>
            <th>Question</th>
            <th>Question Number</th>
            <th>Starts With</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tableData.map((row,index)=>{
            console.log("heloo asdsadsadsad")
            console.log(index)
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{row.key}</td>
                <td>{row.data.questionDescription}</td>
                <td>{row.data.questionNumber}</td>
                <td>{row.data.startsWith}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}
*/






/*
function Ques(){

    const [category, setCategory] = useState([]);

    useEffect(() => {
      const getcategory = async () => {
        const res = await fetch("http://localhost:3000/questions");
        const getdata = await res.json();
        setCategory(getdata);
        console.log(getdata);
      };
  
      getcategory();
    },[]);

    return(
        <React.Fragment>
            <Container>
                <div className="QuesClassItem">
                {category.map((getcate) => (
                  <div className="QuestionsDisplay" key={getcate.questionNumber}>
                    <div className="QuesNumber">{getcate.questionNumber}</div>
                    <div className="quesDivider"></div>
                    <div className="QuesDiscription">{getcate.questionDescription}</div>
                    <div className="ChoiceDisplay">
                    <button className="StronglyAgree">{getcate.startsWith-0}</button>
                    <button className="Agree"></button>
                    <button className="Neutral"></button>
                    <button className="Disagree"></button>
                    <button className="StronglyDisagree"></button>
                    </div>
                  </div>
                ))}

                </div>
            </Container>
        </React.Fragment>
    )
}

export default Ques;
*/


export default Ques;