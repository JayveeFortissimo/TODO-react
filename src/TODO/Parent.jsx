import { useRef, useState, useEffect} from "react"
import Creative from "./Context"


const Parent = ({children}) => {

const [click,setClick] = useState("Parent")

const todo = useRef();

const [List,setList] = useState("");
const [ALL,setAll]=useState([]);
const [wrong,setwrong] = useState("");
const [correct,setcorrect] = useState("")
useEffect(()=>{
 console.log("Success")
},[ALL])

let input = () =>{
 
    setList(todo.current.value)

    
}

let LIST = (e)=>{
      e.preventDefault();
  
      if(List){
        setAll([...ALL, List]);
        setList("")
       setcorrect("Success")
      }else{
       setwrong("Need To fill up")
      }
    
}

let PAL = () =>{
  setClick("Parent1");
}



let PAL1 = () =>{
  setClick("Parent");
}

let DELETE = (indexs) =>{
  const deletes = ALL.filter((inb,index1)=> index1 !== indexs);

  setAll(deletes)
}



  return (
<>


<Creative.Provider value={{input,LIST,todo,List,ALL,click,PAL,PAL1,DELETE,wrong,correct}}>
{children}

</Creative.Provider>

</>


  )
}

export default Parent