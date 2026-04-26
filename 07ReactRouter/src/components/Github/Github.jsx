import React from "react";
// import { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/vikashgoswamii")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white text-3xl">
      Github Followers :-{data.followers}
      <h2 className="text-center">My bio is:- {data.bio}</h2>
      <h2 className="text-center">My username is:- {data.login}</h2>
      <img src={data.avatar_url} alt="githubimage" />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/vikashgoswamii");

  return response;
};
