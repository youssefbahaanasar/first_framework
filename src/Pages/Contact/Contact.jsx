import React, { useEffect } from "react";
import Style from "./contact.module.css";
export default function Contact() {
  const arr = [
    { type: "text", id: "userName", plh: "userName" },
    { type: "number", id: "age", plh: "userAge" },
    { type: "email", id: "email", plh: "userEmail" },
    { type: "password", id: "pass", plh: "userPassword" },
  ];
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <>
      <div
        style={{ paddingBlock: `68px`, marginTop: `56px` }}
        className={`row text-center`}
      >
        <div className="col-lg-6 col-sm-10 col-md-8 mx-auto">
          <h1 className="text-uppercase fw-bold">Contact Section</h1>
          <span className={`${Style.staricon} d-inline-block mt-2`}>
            <i className="fa-solid fa-star"></i>
          </span>
          <form className="text-start" style={{ marginTop: `68px` }}>
            {arr.map((input) => (
              <>
              
                <input
                  onInput={(e) => {
                    const label = e.target.nextElementSibling;
                    e.target.value.length>0 ?(
                      label.classList.remove(Style.labelHide),
                      label.classList.add(Style.label)):(
                        label.classList.add(Style.labelHide),
                      label.classList.remove(Style.label))
                      
                    
                  }}
                  type={input.type}
                  id={input.id}
                  className="form-control border-0 border-bottom shadow-none p-3 mt-2"
                  placeholder={input.plh}
                />
                <label
                  className={`text-success position-relative z-n1 ${Style.labelHide}`}
                  htmlFor={input.id}
                >
                  {input.plh} :
                </label>
              </>
            ))}
          </form>
          <div className="text-start">
            <button className="btn btn-success mt-4 opacity-75">
              send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
