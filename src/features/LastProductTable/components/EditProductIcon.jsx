import React from "react";
import Modal from "../../../components/common/Modal";
import { BiEdit } from "react-icons/bi";

const EditProductIcon = () => {
  const Trigger = () => (
    <button className="cursor-pointer text-lg text-emerald-500">
      <BiEdit className="text-lg"></BiEdit>
    </button>
  );

  return <Modal title="ویرایش محصول" Trigger={<Trigger></Trigger>}></Modal>;
};

export default EditProductIcon;
