import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import Modal from 'react-modal';
import Messages from "../routes/Messages";
import Popup from "./Popup";

export default function FeedCard({ postObject }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }






  return (
    <div onClick={openModal} className="post">
      <div className="post header">
        <img className="" src={postObject.user.image_url} title={postObject.user.username} />

        <p> {postObject.body}  </p>
      </div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        element={<Popup />}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Popup postObject={postObject} />
      </Modal>


    </div>
  )
}