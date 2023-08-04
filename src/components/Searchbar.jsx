import React, { useState, useEffect } from "react";
import axios from "axios";

const Searchbar = () => {
  const [userDetails, setUserDetails] = useState("");
  const [query, setQuery] = useState("");
  console.log(query);

  const fetchData = async () => {
    const data = await axios.get("https://api.github.com/users");
    const details = data.data;
    setUserDetails(details);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center text-white  ">
      <div className="py-6 flex justify-center">
        <input
          className="px-6 py-3 rounded-sm cursor-pointer text-black border border-blue-900 outline-none"
          type="text"
          placeholder="Enter user name..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-blue-900 px-16 py-3 rounded-sm">Get Data</button>
      </div>

      <div className="w-full h-full flex flex-wrap justify-center gap-6 py-10 bg-[#080842]">
        {userDetails &&
          userDetails
            .filter((item) => item.login.toLowerCase().includes(query))
            .map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[500px] flex flex-col items-center justify-center"
                >
                  <img
                    className="w-80 h-80 rounded-md "
                    src={item.avatar_url}
                    alt=""
                  />
                  <div className=" w-full px-4 grid grid-cols-2 gap-2">
                    <h1 className="px-2 py-2 bg-[#3a3a7f] mt-4  rounded-md text-center">
                      Name: {item.login}
                    </h1>
                    <p className="px-2 py-2 bg-[#3a3a7f] mt-4  rounded-md text-center">
                      PortFolio: <a href="https://github.com/Zareel">Link</a>
                    </p>
                    <p className="px-2 py-2 bg-[#3a3a7f] mt-4  rounded-md text-center">
                      Location: India
                    </p>
                    <p className="px-2 py-2 bg-[#3a3a7f] mt-4  rounded-md text-center">
                      Public Repos: 7
                    </p>
                    <p className="px-2 py-2 bg-[#3a3a7f] mt-4  rounded-md text-center">
                      Followers: 53
                    </p>
                    <p className="px-2 py-2 bg-[#3a3a7f] mt-4  rounded-md text-center">
                      Bio: I write code
                    </p>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};
export default Searchbar;
