import { Fragment } from "react";
import { createPortal } from "react-dom";
import "./Model.css"

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalComponant = (props) => {
  return (
    <div className="modal">
      <div>{props.children}</div>
    </div>
  );
};

const elemantPortal =document.getElementById("modal-Form")
const ModelOverlay = (props) => {
  // console.log("--------------->",props);
  return (
    <Fragment>
      {createPortal(<Backdrop />,elemantPortal) }
      {createPortal(<ModalComponant>{props.children}</ModalComponant>,elemantPortal)}
    </Fragment>
  );
};

export default ModelOverlay;