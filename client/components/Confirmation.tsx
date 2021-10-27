import React from "react";
import A from "./A";

interface IProps {
  header: any;
  content: any;
  action: any;
  loading: boolean;
  disable: boolean;
  closeModal: any;
  ///

}

const Confirmation: React.FC<IProps> = ({
  header,
  content,
  action,
  closeModal,
  ///

}) => {

    const actionHandler = () => {
        action();
        closeModal();
    }
  return (
    <div className="modal-confirmation">
      <div className="confirmation-header">
        <h2>{header}</h2>
      </div>
      <div className="confirmation-content">
        {content}
      </div>
      <div className="confirmation-button-group">
        <A css={"btn-outline-main"}
          action={actionHandler} 
          loading={ false }
          disable={ false }
          text={"PROCEED"}
          >
        </A>
        <A css={"btn-outline-dark"}
          action={closeModal} 
          loading={ false }
          disable={ false }
          text={"CANCEL"}
          >
        </A>
      </div>
    </div>
  );
};



export default Confirmation;
