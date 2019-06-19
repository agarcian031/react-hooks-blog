// **** all hooks need to begin with the word use when making your own hooks. 
import { useState, } from "react";

// shouldn't be a specific name because we are going to use it for multiple inputs. 
// the value is going to be whatever we pass into the hook/function and we will return an object called value and onChange (which is a function that will set the value)
export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
