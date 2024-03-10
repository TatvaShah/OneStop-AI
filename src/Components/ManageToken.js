import React, { useState } from "react";
import "../Styles/ManageToken.css";
import { Modal, Label, Input, ModalBody, ModalHeader } from "reactstrap";
const ManageToken = () => {
  const [showModel, setShowModel] = useState(false);
  const [selectedTokenDetails, setSelectedTokenDetails] = useState({});
  return (
    <div>
      <ol class="list list-view-filter">
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 1",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 1
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 2",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 2
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 3",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 3
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 4",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 4
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 5",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 5
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 6",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 6
        </li>
      </ol>

      <h4 className="text-white mt-2 mb-3 ">Token History</h4>
      <ol class="list grid-view-filter">
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 1",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 1
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 2",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 2
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 3",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 3
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 4",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 4
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 5",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 5
        </li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowModel(true);
            setSelectedTokenDetails({
              tokenName: "Token 6",
              tokenCreatedDate: "10/03/2023",
              tokenIssueDate: "10/03/2024",
            });
          }}
        >
          Token 6
        </li>
      </ol>

      {showModel && (
        <Modal
          id="showModal"
          size="md"
          isOpen={showModel}
          // toggle={() => props.onCloseModal()}
          centered
        >
          <ModalHeader
            className="p-3 bg-soft-success"
            toggle={() => setShowModel(false)}
          >
            Token Details
          </ModalHeader>
          <ModalBody className="p-3">
            <div className="d-flex justify-content-center align-items-center">
              <p className="w-50">Token Name : </p>
              <p className="mx-2">{selectedTokenDetails?.tokenName}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <p className="w-50">Token Created Date : </p>
              <p className="mx-2">{selectedTokenDetails?.tokenCreatedDate}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <p className="w-50">Token Issued Date : </p>
              <p className="mx-2">{selectedTokenDetails?.tokenIssueDate}</p>
            </div>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
};

export default ManageToken;
