import React from "react";

const Td = ({item, handleRemove, handleEdit}) => {

    const onRemove = () => {
        handleRemove(item.id)
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
        <tr className="bg-white border-2 border-gray-200">
            <td className="px-4 py-3">{item.id}</td>
            <td className="px-4 py-3">{item.name}</td>
            <td className="px-4 py-3">{item.age}</td>
            <td className="px-4 py-3">{item.sex}</td>
            <td className="px-4 py-3">{item.birth}</td>
            <td className="px-4 py-3">{item.regDate}</td>
            <td className="px-4 py-3">{item.endDate}</td>

            <td onClick={onEdit} className='text-center text-purple-400 cursor-pointer show-modal'>
                <i class="far fa-edit"></i>
            </td>
            <td onClick={onEdit} className='text-center text-purple-400 cursor-pointer show-modal'>
                <i class="far fa-trash-alt"></i>
            </td>
        </tr>
        </>
    )
}

export default Td;