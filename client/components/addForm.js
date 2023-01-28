import axios from 'axios';
import { useReducer } from 'react';
import { BiPlus } from 'react-icons/bi';


export default function AddForm({formData, setFormData, handleSubmit}) {
  const baseURL = 'http://localhost:8080/';

 

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
            <input
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              onChange={setFormData}
              name="cost"
              placeholder="Product's cost"
              prefix="ج.م&nbsp; "
            />
          </div>
          <div>
            <input
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
              name="qmade"
              placeholder="Quantity made"
            />
          </div>
        </div>
        <div className="flex cursor-pointer bg-green-700 w-max rounded-md text-white my-4  hover:bg-gray-50 hover:text-green-500 border border-green-500 ">
          <button className="px-5 py-3">Add</button>
          <span className="pr-2 m-auto">
            <BiPlus size={24} />
          </span>
        </div>
      </form>
    </div>
  );
}
