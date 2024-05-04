import { useState } from "react";


export const useForm = (values) => {
    const [inputform, setInputform] = useState(values);

    const onChangeInput = ({target})=>{
        const {name, value} = target; 
        setInputform({
            ...inputform,
            [name]:value
        });
    }
    const onResetForm = ()=>{
        setInputform(values);
    }

  return {
    ...inputform,
    inputform,
    onChangeInput,
    onResetForm
  }
    
}