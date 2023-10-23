import { useReducer } from 'react'

const Counter = () => {

    const initialState = {
        value: 0,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return { value: state.value + 1 };
            case 'DENCREMENT':
                return {value: state.value - 1};
            case 'RESET':
                return {value: 0};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState); 

    const handleIncrement = () => {
        dispatch({
            type: 'INCREMENT',
        })
      }
    
      const handleDecrement = () => {
        dispatch({
            type: 'DENCREMENT',
        })
      }
    
      const handReset = () => {
        dispatch({
            type: 'RESET',
        })
      } 

  return (
    <div>
      <h1>Counter: {state.value}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handReset}>Reset</button>
    </div>
  )
}

export default Counter