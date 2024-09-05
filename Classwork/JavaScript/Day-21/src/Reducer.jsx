import React from 'react'

function Reducer() {


    function countReducer(state, action) {
        switch(action.type) {
            case "increment": 
                return {count: state.count + 1};
            case "decrement" :
                return {count : state.count -1};
            case "reset" :
                return {count : 0}
            case "loading" :
                return {loading : !state.loading};
            default :
                return new Error("Unknown Type")
        }
    }

    const initialValue = {count : 0, loading : true};

    const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
        <p>
            {state.count}
        </p>

        <button onClick=

        </button>


        
    </div>
  )
}

export default Reducer