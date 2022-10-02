import React, { useEffect, useState } from "react";
import {getData} from "../restService.jsx"
import {postColumns} from '../tables/columns.jsx'
import AddPostView from "./addPostView"
import Modal from "react-modal"
import Table from "../tables/table.jsx";

function PostsView() {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    getData('/posts' , setPosts)
  }, [openModal]);
  
  const props = {
    tableData: posts,
    tableColumns: postColumns
  }

  return (
    <div>
      <h2>List of posts:</h2>
      <Table {...props}/>
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
