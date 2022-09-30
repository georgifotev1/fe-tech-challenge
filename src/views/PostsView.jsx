import React, { useEffect, useState , useMemo} from "react";
import {useTable} from "react-table"
import {getData} from "../restService.jsx"
import {postColumns} from '../tables/columns.jsx'
import AddPostView from "./addPostView"
import Modal from "react-modal"
import TableTemplate from "../tables/TableTemplate.jsx"



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
      <TableTemplate />
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
