import React from "react";
import Modal from "../../../components/common/Modal";
import { HiOutlineEye } from "react-icons/hi";
import clsx from "clsx";

const ChangeVisibilityIcon = ({ product, handler }) => {
  const Trigger = () => (
    <button className="cursor-pointer text-lg text-sky-500">
      <HiOutlineEye className="text-lg"></HiOutlineEye>
    </button>
  );

  return (
    <Modal title="تغییر وضعیت انتشار" Trigger={<Trigger></Trigger>} onSubmit={() => handler(product.id)}>
      <div className="flex items-center justify-center">
        <p>آیا از
          <span className={clsx(product.isPublished ? "text-sky-500" : "text-emerald-500")}>
            <strong>
              {product.isPublished ? " خصوصی " : " عمومی "}
            </strong>
          </span>
         کردن این محصول اطمینان دارید؟
        </p>
      </div>
    </Modal>
  );
};

export default ChangeVisibilityIcon;
