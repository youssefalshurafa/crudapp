import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { updateAction } from '../redux/toggleSlice';
import { deleteAction } from '../redux/reducer';
import { useParams} from 'react-router-dom'

export default function Table({data,handleDelete}) {
 
  return (
    <table className=" min-w-full table-auto">
      <thead>
        <tr className=" bg-gray-800">
          <th className=" px-16 py-2">
            <span className=" text-gray-200">Code</span>
          </th>
          <th className=" px-16 py-2">
            <span className=" text-gray-200">Category</span>
          </th>
          <th className=" px-16 py-2">
            <span className=" text-gray-200">Cost price</span>
          </th>
          <th className=" px-16 py-2">
            <span className=" text-gray-200">Selling price</span>
          </th>
          <th className=" px-16 py-2">
            <span className=" text-gray-200">Quantity made</span>
          </th>

          <th className=" px-16 py-2">
            <span className=" text-gray-200">Profit margin</span>
          </th>
          <th className=" px-16 py-2">
            <span className=" text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className=" bg-gray-200">
        {data?.map((obj, i) => (
          <Tr handleDelete={handleDelete} {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
}
function Tr({ _id, code, category, price, cost, qmade, handleDelete}) {
  const dispatch = useDispatch()

  return (
    <tr className=" bg-gray-50 text-center">
      <td>
        <span>{code || 'unknown'}</span>
      </td>
      <td>
        <span>{category || 'unknown'}</span>
      </td>
      <td>
        <span>{cost || 'unknown'} ج.م&nbsp;</span>
      </td>
      <td>
        <span>{price || 'unknown'} ج.م&nbsp;</span>
      </td>
      <td>
        <span>{qmade || 'unknown'}</span>
      </td>

      <td>
        <span>210 ج.م&nbsp;</span>
      </td>
      <td>
        <div className="flex px-16 justify-around gap-5 py-2">
          <button onClick={() => dispatch(updateAction())} className=" cursor ">
            <BiEdit size={25} color={'rgb(34,197,94'} />
          </button>
          <button onClick={() => {  dispatch(deleteAction(_id)); handleDelete(); } } className=" cursor ">
            <BiTrashAlt size={25} color={'rgb(244,63,94'} />
          </button>
        </div>
      </td>
    </tr>
  );
}
