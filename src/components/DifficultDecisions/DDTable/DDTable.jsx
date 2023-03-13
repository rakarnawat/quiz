import React from "react"
import ddTable from "../../../images/ddtable.png"
import "./DDTable.css"

export default function DDTable() {
    return (
      <div className="ddTableMainContainer">
        <div className="ddTableTitle">
            <p>
            Results and Findings of Experiment
            </p>
        </div>
        <form id='form' className='ddGotoDescriptions' action='/DDDescriptions' >
            <div className='ddDiscBtn'>
                <input className='ddDiscBtnText' type="submit" value="<"></input>
            </div>
        </form>
        <div className="ddImageContainer">
          <img src={ddTable} alt="Table" className="ddDImage" />
        </div>
        <form id='form' className='ddGotoquestions' action='/DDQuestions' >
            <div className='ddQuesBtn'>
                <input className='ddQuesBtnText' type="submit" value=">"></input>
            </div>
        </form>
        <div className="ddTableText">
            <p>
                The scientists concluded that the oil additive significantly reduced engine problems.
                <br/>
                (10 engines were used in each group.  A total of 80 engines were used in the experiment.)
            </p>
        </div>
    </div>
);
} 