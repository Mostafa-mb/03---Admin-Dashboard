import React from "react";
import Modal from "../../../components/common/Modal";
import { HiOutlineEye } from "react-icons/hi";

const ChangeVisibilityIcon = () => {
  const Trigger = () => (
    <button className="cursor-pointer text-lg text-sky-500">
      <HiOutlineEye className="text-lg"></HiOutlineEye>
    </button>
  );

  return (
    <Modal title="تغییر وضعیت انتشار" Trigger={<Trigger></Trigger>}></Modal>
  );
};

export default ChangeVisibilityIcon;
