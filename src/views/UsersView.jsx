import React, { useEffect, useState, useMemo } from "react";
import {useTable} from "react-table"
// import { Link } from "react-router-dom";
import {getData} from "../restService.jsx"
import {userColumns} from '../columns.jsx'
import AddUserView from "./addUserView"
import Modal from "react-modal"

function UsersView() {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getData("/users", setUsers)
  }, []);
  
  const columns = useMemo(() => userColumns,[])
  const data = users  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div>
      <h2>All users:</h2>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
      <button onClick={() => {
        setOpenModal(state => !state)
      }}>Add user</button>
      <Modal
      isOpen={openModal}>
      {openModal && <AddUserView closeModal={setOpenModal} />}
      </Modal>
    </div>
  );
}

export default UsersView;
