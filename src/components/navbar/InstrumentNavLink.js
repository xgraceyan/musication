import React from "react";

var jsonQuery = require("json-query");

const InstrumentNavLink = ({ props }) => {
  // organize instruments into arrays by type
  const woodwindsList = jsonQuery("instruments[*type=woodwind]", {
    data: props,
  }).value;

  const brassList = jsonQuery("instruments[*type=brass]", {
    data: props,
  }).value;

  const stringsList = jsonQuery("instruments[*type=string]", {
    data: props,
  }).value;

  const perucussionList = jsonQuery("instruments[*type=percussion]", {
    data: props,
  }).value;

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="../#instruments"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        Instruments
      </a>
      <ul
        className="dropdown-menu dropdown-menu-main"
        aria-labelledby="navbarDropdown"
      >
        {/* woodwinds */}
        <li className="sub-dropdown dropend">
          <a
            className="dropdown-item dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            href="/#"
          >
            Woodwinds
          </a>
          <ul
            className="dropdown-menu dropdown-menu-sub"
            aria-labelledby="dropdownMenuButtonWoodwinds"
          >
            {woodwindsList &&
              woodwindsList.map((woodwindInstrument) => {
                return (
                  <li key={woodwindInstrument.id}>
                    <a
                      className="dropdown-item"
                      href={"../instrument/" + woodwindInstrument.id}
                    >
                      {woodwindInstrument.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </li>

        {/* brass */}
        <li className="sub-dropdown dropend">
          <a
            className="dropdown-item dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            href="/#"
          >
            Brass
          </a>
          <ul
            className="dropdown-menu dropdown-menu-sub"
            aria-labelledby="dropdownMenuButtonBrass"
          >
            {brassList &&
              brassList.map((brassInstrument) => {
                return (
                  <li key={brassInstrument.id}>
                    <a
                      className="dropdown-item"
                      href={"../instrument/" + brassInstrument.id}
                    >
                      {brassInstrument.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </li>

        {/* strings */}
        <li className="sub-dropdown dropend">
          <a
            className="dropdown-item dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            href="/#"
          >
            Strings
          </a>
          <ul
            className="dropdown-menu dropdown-menu-sub"
            aria-labelledby="dropdownMenuButtonBrass"
          >
            {stringsList &&
              stringsList.map((stringInstrument) => {
                return (
                  <li key={stringInstrument.id}>
                    <a
                      className="dropdown-item"
                      href={"../instrument/" + stringInstrument.id}
                    >
                      {stringInstrument.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </li>

        {/* percussion */}
        <li className="sub-dropdown dropend">
          <a
            className="dropdown-item dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            href="/#"
          >
            Percussion
          </a>
          <ul
            className="dropdown-menu dropdown-menu-sub"
            aria-labelledby="dropdownMenuButtonBrass"
          >
            {perucussionList &&
              perucussionList.map((percussionInstrument) => {
                return (
                  <li key={percussionInstrument.id}>
                    <a
                      className="dropdown-item"
                      href={"../instrument/" + percussionInstrument.id}
                    >
                      {percussionInstrument.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="../#instruments">
            See all
          </a>
        </li>
      </ul>
    </li>
  );
};

export default InstrumentNavLink;
