import { useReducer } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { BiPlus } from 'react-icons/bi';

const reducerFunction = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
export default function UpdateForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  const [formData, setFormData] = useReducer(reducerFunction, {});
  // if (Object.keys(formData).length > 0) return <div>Error</div>;
  return (
    <div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 w-4/6 mx-auto">
          <div className="">
            <input
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              onChange={setFormData}
              type="number"
              name="code"
              placeholder="Product's code"
            />
          </div>
          <div>
            <input
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              onChange={setFormData}
              type="text"
              name="category"
              placeholder="Product's category"
            />
          </div>
          <div>
            <CurrencyInput
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              onChange={setFormData}
              name="cost"
              placeholder="Product's cost"
              prefix="ج.م&nbsp; "
            />
          </div>
          <div>
            <CurrencyInput
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              onChange={setFormData}
              name="price"
              placeholder="Product's price"
              prefix="ج.م&nbsp; "
            />
          </div>
          <div>
            <input
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              onChange={setFormData}
              type="number"
              name="made"
              placeholder="Quantity made"
            />
          </div>
        </div>
        <div className="flex cursor-pointer bg-yellow-500 w-max rounded-md text-white my-4  hover:bg-gray-50 hover:text-yellow-500 border border-yellow-500 ">
          <button className="px-5 py-3">Update</button>
          <span className="pr-2 m-auto">
            <BiPlus size={24} />
          </span>
        </div>
      </form>
    </div>
  );
}
