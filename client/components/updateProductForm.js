import { useReducer } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { BiPlus } from 'react-icons/bi';


export default function UpdateForm({ handleText, handleUpdate, formData, updateHandler }) {
 

  return (
    <div>
      <form className="flex flex-col items-center" onSubmit={handleUpdate}>
        <div className="grid grid-cols-2 gap-4 w-4/6 mx-auto">
          <div className="">
            <input
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              onChange={handleText}
              defaultValue={formData.code}
              type="number"
              name="code"
              placeholder="Product's code"
            />
          </div>
          <div>
            <input
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              defaultValue={formData.category || ''}
              onChange={handleText}
              type="text"
              name="category"
              placeholder="Product's category"
            />
          </div>
          <div>
            <input
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              onChange={handleText}
              defaultValue={formData.cost}
              name="cost"
              placeholder="Product's cost"
              prefix="ج.م&nbsp; "
            />
          </div>
          <div>
            <input
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              onChange={handleText} 
              defaultValue={formData.price}
              name="price"
              placeholder="Product's price"
              prefix="ج.م&nbsp; "
            />
          </div>
          <div>
            <input
              className="border w-full px-5 py-3 focus:outline-none rounded-md"
              onChange={handleText}
              defaultValue={formData.qmade}
              type="number"
              name="qmade"
              placeholder="Quantity made"
            />
          </div>
        </div>
        <div className="flex cursor-pointer bg-yellow-500 w-max rounded-md text-white my-4  hover:bg-gray-50 hover:text-yellow-500 border border-yellow-500 ">
          <button onClick={updateHandler} className="px-5 py-3">Update</button>
          <span className="pr-2 m-auto">
            <BiPlus size={24} />
          </span>
        </div>
      </form>
    </div>
  );
}
