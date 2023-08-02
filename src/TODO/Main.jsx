import { useContext, useDebugValue } from "react";
import Context from "./Context";
import './style.css'
 const Main = () => {

     const {input,LIST,todo,List,ALL,click,PAL,PAL1,DELETE,wrong,correct} = useContext(Context);

  return (

     
     <>
        
{ click === "Parent" &&
        <div className="Parent">
            <div className="Child">

                <h1 style={{color:"white"}}>Todo</h1>
          <div>
            {wrong ? <p style={{color:"red"}}>{wrong}</p> : <h5 style={{color:"green"}}>{correct}</h5>}
          </div>
                <div className="mb-3">
                    <form onSubmit={LIST}>
                        <div>
                        <input type="text" placeholder="input" className="form-control" id="hi" value={List} ref={todo} onChange={input}/>
                        </div>
                   <div className="KOKO">
                    <button  className="btn btn-primary" type="submit">ADD</button>
                   </div>
                   <div className="SEE">
                    <button className="btn btn-warning" onClick={PAL}>SEE TODO</button>
                   </div>

                    </form>
                  
                </div>

            </div>

        </div>



 }

{ click === "Parent1" &&


        <div className="Parent1">
    
     <div className="Child1">
        <h1 style={{color:"white"}}>DATA</h1>

   <div>

   <ul>
          {ALL.map((inso,indexs) => {
        
      return( <div key={indexs}>
<h5 style={{color:"white"}}>{inso}</h5>
          <div ><button  className="btn btn-danger" onClick={()=>DELETE(indexs)}>Delete</button></div>
       </div>


)})}
        </ul>

   </div>

   <div className="b">
    <button className="btn btn-success" onClick={PAL1}>Back</button>
   </div>
        
     </div>


        </div>
     
     
}
     
     
     
     </>
     
     
      
     
  )
}

export default Main;
