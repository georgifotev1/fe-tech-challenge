import React, { useEffect, useState , useMemo} from "react";
import {useTable} from "react-table"
import { Link } from "react-router-dom";
import {getData} from "../restService.jsx"
import {postColumns} from '../columns.jsx'

function PostsView() {
  const [posts, setPosts] = useState([]);

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
      {/* <ul>
        {posts.length
          ? posts.map((post) => (
              <li key={post.id}>
                <div> Title: {post.title} </div>
                <div>Content: {post.body}</div>
              </li>
            ))
          : null}
      </ul> */}
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
      <Link to='/addpost'>Add post</Link>
    </div>
  );
}

export default PostsView;
