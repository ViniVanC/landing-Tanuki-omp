import React from "react";

export const Contacts = () => {
  return (
    <section className="section contacts" id="contacts">
      <div className="container">
        <div className="inner">
          <h2 className="title">Contacts</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <form>
            <input placeholder="Name" type="text"></input>
            <input placeholder="Email" type="email" />
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};
