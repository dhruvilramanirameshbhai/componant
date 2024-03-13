import React,{ useState ,useRef } from 'react'


function Todo(){                                                       
   const [todo, setTodo ] = useState([])
   const [index, setIndex ] = useState(null)
const input = useRef(null)
	const AddData = () => {
    if(index == null){
            setTodo([...todo, input.current.value ])
       input.current.value = ''
    }else{
        let uData =  [...todo]
         uData[index] = input.current.value
          setTodo(uData)
    }
      
      
	}

	


   return <>  
      <input type='text' ref={input} />
      <button onClick={()=>{
      	 AddData()
      }}>
       { index==null? 'Add':''}
      </button>
      {todo.map((result,i)=>{
      	return (
          <>
          <h1>{result}</h1>
         
          </>
      	)
      })}
   
   </>  
}

export default Todo

