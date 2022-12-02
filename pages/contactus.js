import React, { useState } from "react";
import { notification, Space } from "antd";

const Alert = (name, prenom) => {
  notification["success"]({
    message: "Welcome",
    description: `Mme/M.${name} ${prenom} soyez le bienvenue entre nous 😊 !`,
    className: "custom-class",
  });
};

const Contact = () => {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, prenom, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      prenom: prenom.value,
      email: email.value,
      message: message.value,
    };
    setName(conFom.name);
    setPrenom(conFom.prenom);
    //console.log(conFom)
  };
  return (
    <div
      className="container mt-5"
      style={{ textAlign: "center", marginTop: "10px" }}
    >
      <h2 className="mb-3" style={{ textAlign: "center", paddingTop: "120px" }}>
        {" "}
        Contactez Nous !
      </h2>
      <form onSubmit={onSubmit} style={{ paddingTop: "50px" }}>
        <div style={{ display: "flex" }}>
          <div className="mb-3" style={{ width: "49%", marginRight: "2%" }}>
            <label className="form-label" htmlFor="name">
              Nom
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3" style={{ width: "49%" }}>
            <label className="form-label" htmlFor="prenom">
              Prénom
            </label>
            <input className="form-control" type="text" id="prenom" required />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button
          className="btn btn-success"
          type="submit"
          style={{ width: "30%", marginTop: "4%", marginBottom: "2%" }}
          onClick={() => Alert(name, prenom)}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};
export default Contact;
