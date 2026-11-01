import React from "react";
import Modal from "../../../components/common/Modal";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveProductIcon = () => {
  const Trigger = () => (
    <button className="cursor-pointer text-lg text-red-500">
      <HiOutlineTrash className="text-lg"></HiOutlineTrash>
    </button>
  );

  return <Modal title="حذف محصول" Trigger={<Trigger></Trigger>}></Modal>;
};

export default RemoveProductIcon;
