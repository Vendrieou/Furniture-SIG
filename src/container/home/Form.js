import React from "react";
import { useForm } from "react-hook-form";

// The following component is an example of your existing Input Component 
const Input = ({ label, register, required }) => ( 
  <>
    <label>{label}</label>
    <input name={label} ref={register({ required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ 
    label,
    list
 }, ref) => ( 
  <>
    <label>{label}</label>
    <select name={label} ref={ref}>
    {list && list.length > 0 ?
        list.map((item, index) => {
            return <option key={index} value={item.value}>{item.name}</option>
        })
    : (
      <option value="">no value</option>
    )}
    </select>
  </>
));

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const listOption = [
      {
          name: 20,
          value: 20
      },
      {
          name: 30,
          value: 40
      }
  ]
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" list={listOption} ref={register} />
      <input type="submit" />
    </form>
  );
}