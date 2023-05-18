import qustion from "./component/qus";
import{useState} from "react";
import './App.css';

function App() {
  const [qustionindex, setqustionindex]=useState(0);
  const [score, setscore]=useState(1);
  const [dispaly_result,setdispaly_result]=useState(false);
  const presentQus=qustion[qustionindex];

const getchoice=(index)=>{
      if(presentQus.answer===index){
          setscore(score+1);
          // alert(score);
      }

  const next_qus=qustionindex+1;
        if(next_qus<qustion.length){
            setqustionindex(qustionindex+1);
        }else{
          setdispaly_result(true);
        }
}
 const replay=()=>{
  // console.log("working")
      setqustionindex(0);
      setscore(0);
      setdispaly_result(false);
 }

  return (
    <div className="container">
      
             
            {/* ternory operatior using */}
          { dispaly_result ? (<>
            <h3> your score is ={score}</h3>
            <button onClick={replay}>Play again</button>
            </>):
            (
            <div className="qustion">
            <h1>Answer the quiz</h1>
                   <div className="quiz">
                      <h2 className="qustions"> {presentQus.question} </h2>
                            <ul className="option">
                            {
                            presentQus.option.map((option,i)=>{
                              
                              return <li onClick={()=>getchoice(i)}>{option}</li>
                            })
                            }
                            </ul> 
                   </div>
                   </div>
        )}
       
    </div>
  );  
}

export default App;
