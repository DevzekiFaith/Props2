import PropTypes from "prop-types";
import React from "react";
// import PlayerSpot from "../PlayerSpot";

const handleClick = ({func}) => (
  alert("Player Order Confirmed")
)

const Players = ({ name, team, nationality, jerseyNumber, Age, imageUrl, func }) => {
  return (
    <>
      <div className="mt-[2rem] cursor-pointer" onClick={handleClick}>
        <div class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark w-[360px]">
          <div class="p-6 text-surface dark:text-white text-center">
            <img
              className="h-[12.5rem] mb-[1rem] shadow-lg"
              src={imageUrl}
              placeholder="blur"
              alt="football player"
            />
            <div className="bg-gray-400 p-3 rounded-lg shadow-lg">
              <h5 class="mb-2 text-xl font-medium leading-tight text-white">
                Player's Card
              </h5>
              <div className="text-white">
                <p class="mb-4 text-base">Name: {name  || "lionel Merci"}</p>
                <p class="mb-4 text-base">Team: {team}</p>
                <p class="mb-4 text-base">Nationality: {nationality || "Nigeria"}</p>
                <p class="mb-4 text-base">JerseyNumber: {jerseyNumber || "21"}</p>
                <p class="mb-4 text-base border bg-orange-500 rounded-xl w-full">Age: {Age || "Add age"}</p>
              </div>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong w-[18rem]"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              onClick={handleClick}>
                <p>Confirm Player</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Players.propTypes = {
  Age: PropTypes.number,
  ImageURL: PropTypes.any,
  JerseyNumber: PropTypes.number,
  Nationality: PropTypes.string,
  name: PropTypes.string,
};

export default Players;
