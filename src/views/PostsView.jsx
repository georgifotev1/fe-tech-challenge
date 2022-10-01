import React, { useEffect, useState , useMemo} from "react";
import {useTable} from "react-table"
import {getData} from "../restService.jsx"
import {postColumns} from '../tables/columns.jsx'
import AddPostView from "./addPostView"
import Modal from "react-modal"

function PostsView() {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
   getData('/posts' , setPosts)
  }, []);

  const columns = useMemo(() => postColumns,[])
  const data = posts

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div>
      <h2>List of posts:</h2>
      return <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
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
      }}>Add post</button>
      <Modal
      isOpen={openModal}>
      {openModal && <AddPostView closeModal={setOpenModal} />}
      </Modal>
    </div>
  );
}

export default PostsView;
