import React, { useEffect, useState } from "react";
import { getData } from "../restService.jsx";
import { userColumns } from "../tables/columns.jsx";
import AddUserView from "./addUserView";
import Modal from "react-modal";
import Table from "../tables/table.jsx";

function UsersView() {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getData("/users", setUsers);
  }, [openModal]);

  const props = {
    tableData: users,
    tableColumns: userColumns,
  };

  return (
    <div>
      <h2>All users:</h2>
      <div>
        <Table {...props} />
        <button
          className='addUser'
          onClick={() => {
            setOpenModal((state) => !state);
          }}
        >
          Add user
        </button>
        <Modal isOpen={openModal}>
          {openModal && <AddUserView closeModal={setOpenModal} />}
        </Modal>
      </div>
    </div>
  );
}

export default UsersView;
