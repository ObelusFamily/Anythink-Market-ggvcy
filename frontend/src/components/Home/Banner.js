import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const inputHandler = (ev) => {
    ev.preventDefault();
    let title = ev.target.value;

    if (title.length < 3) title = "";

    props.onItemSearch(
      title,
      (page) => agent.Items.byTitle(title, page),
      agent.Items.byTitle(title)
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="d-flex justify-content-center align-items-center">
          <span id="get-part">A place to get</span>
          <div className="input-group col-5 search-bar">
            <input
              id="search-box"
              className="form-control py-2 rounded-lg"
              type="search"
              onChange={inputHandler}
              placeholder="What is it that you truly desire?"
            />
            <div className="input-group-append search-icon">
              <i className="ion-search"></i>
            </div>
          </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
