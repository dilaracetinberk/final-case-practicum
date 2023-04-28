import { Link, useLocation } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

function SingleItemPage() {
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);

  // decided to show items in modal 
  
  return (
    <div className="ship-container bg-gray-900 w-full max-w-7xl mx-auto my-auto flex flex-row flex-wrap mt-20 rounded-2xl shadow-lg shadow-cyan-500/50  hover:shadow-2xl hover:shadow-cyan-500/50">
      <Link to="/">
        <MdOutlineArrowBackIos className="text-cyan-500 text-center text-2xl origin-center hover:rotate-45  font-bold m-2" />
      </Link>
      <div className="text-left text-white p-20">
        <h1 className="detail-h1 text-3xl py-4 underline decoration-yellow-400">
          Name:&nbsp;{propsData.name}
        </h1>
        <p className="detail-model py-2 text-xl">
          Model: <span className="">&nbsp;{propsData.model} </span>
        </p>
        <p className="">
          Hyperdrive Rating:
          <span className="text-yellow-400">
            &nbsp; {propsData.hyperdrive_rating}
          </span>
        </p>
        <p className="">
          Starship Class:{" "}
          <span className="text-yellow-400">
            &nbsp;{propsData.starship_class}
          </span>
        </p>
        <p className="">
          Passengers:{" "}
          <span className="text-yellow-400">&nbsp;{propsData.passengers}</span>
        </p>
        <p className="">
          Length:{" "}
          <span className="text-yellow-400">&nbsp;{propsData.length}</span>
        </p>
        <p className="pb-5">
          Manufacturer:{" "}
          <span className="text-yellow-400">
            &nbsp;{propsData.manufacturer}
          </span>
        </p>
        <hr></hr>
        <div className="flex flex-row flex-wrap gap-6 py-8">
          <p className="">
            Created:{" "}
            <span className="text-yellow-400">&nbsp;{propsData.created}</span>
          </p>
          <p className="">
            Edited:{" "}
            <span className="text-yellow-400">&nbsp;{propsData.edited}</span>
          </p>
          <p className="">
            Cost in Credits:{" "}
            <span className="text-yellow-400">
              &nbsp;{propsData.cost_in_credits}
            </span>
          </p>
        </div>
      </div>
      <div className="">
        <img className="" src={propsData} alt="ship-img" />
      </div>
    </div>
  );
}

export default SingleItemPage;
