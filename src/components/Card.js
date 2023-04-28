import { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

function Card({ name, model, rate, starship, id, photoLink }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        type="button"
        className="detail-btn"
        onClick={() => setShowModal(true)}
      >
        <div className="card w-96 m-5 flex flex-col bg-gray-900 p-2 rounded-2xl shadow-lg shadow-cyan-500/50  hover:shadow-2xl hover:shadow-cyan-500/50">
          <div className="card-img">
            <img
              className="rounded-2xl  w-full h-64"
              src={photoLink}
              alt="starship-img "
            />
          </div>
          <div className="px-4 py-3">
            <div className="card-name text-slate-50 text-center text-2xl">
              {name}
            </div>

            <div className="card-model text-slate-50 text-lg ">
              <span className="font-bold">Model: </span> {model}
            </div>
            <div className="card-rate text-slate-50 text-lg">
              <span className="font-bold">Hyperdrive Rating: </span> {rate}
            </div>
          </div>
        </div>
      </button>
      {/* show modal for details of starship*/}
      {showModal && (
        <div className="ship-container z-40 fixed top-0 left-0  bg-gray-900 flex flex-row flex-wrap justify-center h-screen items-center w-full mx-auto my-auto rounded-2xl ">
          <button className="close" onClick={() => setShowModal(false)}>
            <MdOutlineArrowBackIos className="text-cyan-500 text-center text-2xl origin-center hover:rotate-45 font-bold m-2 " />
          </button>
          <div className="bg-gray-700 z-50 flex flex-row flex-wrap rounded-sm shadow-lg shadow-cyan-500/50  hover:shadow-2xl hover:shadow-cyan-500/50">
            <div className="text-left text-white p-20">
              <h1 className="detail-h1 text-3xl py-4 underline decoration-yellow-400">
                Name:&nbsp;{starship.name}
              </h1>
              <p className="detail-model py-2 text-xl">
                Model: <span className="">&nbsp;{starship.model} </span>
              </p>
              <p className="">
                Hyperdrive Rating:
                <span className="text-yellow-400">
                  &nbsp; {starship.hyperdrive_rating}
                </span>
              </p>
              <p className="">
                Starship Class:{" "}
                <span className="text-yellow-400">
                  &nbsp;{starship.starship_class}
                </span>
              </p>
              <p className="">
                Passengers:{" "}
                <span className="text-yellow-400">
                  &nbsp;{starship.passengers}
                </span>
              </p>
              <p className="">
                Length:{" "}
                <span className="text-yellow-400">&nbsp;{starship.length}</span>
              </p>
              <p className="pb-5">
                Manufacturer:{" "}
                <span className="text-yellow-400">
                  &nbsp;{starship.manufacturer}
                </span>
              </p>
              <hr></hr>
              <div className="flex flex-row flex-wrap gap-6 py-8">
                <p className="">
                  Created:{" "}
                  <span className="text-yellow-400">
                    &nbsp;{starship.created}
                  </span>
                </p>
                <p className="">
                  Edited:{" "}
                  <span className="text-yellow-400">
                    &nbsp;{starship.edited}
                  </span>
                </p>
                <p className="">
                  Cost in Credits:{" "}
                  <span className="text-yellow-400">
                    &nbsp;{starship.cost_in_credits}
                  </span>
                </p>
              </div>
            </div>

            <div className="ship-img p-20">
              <img
                className="rounded-xl max-h-96"
                src={photoLink}
                alt="ship-img"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
