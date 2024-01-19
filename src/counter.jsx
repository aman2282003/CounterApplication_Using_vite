import { useState } from 'react'

function Counter(){
        let [count,setcount] = useState(1)

        function Increase(){
            setcount(count+1)
        }
        function Decrease(){
            setcount(count-1)
        }
        return(
            <div className='main'>  
                <p className='para'>Count : {count}</p>
                <div className='buttons'>
                <button onClick = {Increase}>Increase count</button>
                <button onClick = {Decrease}>Decrease count</button>
                </div>

            </div>
        );
}


export default Counter