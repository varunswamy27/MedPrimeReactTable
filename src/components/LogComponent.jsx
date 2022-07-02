import React from "react";
import { useState } from "react";
// import chats from './data'
import "./style.css";
import { Link } from "react-router-dom";
import { userdata } from "../data";

const LogComponent = () => {
  const [data, setData] = useState(userdata);
  const [search, setSearch] = useState("");

  const deleteUser = (id) => {
    const newData = [...data];
    const index = data.findIndex((item) => item.id === id);
    newData.splice(index, 1);
    setData(newData);
    alert("Confirm To Delete")
  };

  return (
    <>
      {console.log(data)}

    <div className="container">

      <input
        type="text"
        name="search"
        id="search"
        className="searchBar"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        />
        </div>

      <table>
        <tbody>
          <tr className="row1">
            <td>No</td>
            <td>Name</td>
            <td>Link</td>
            <td>SiteName</td>
            <td>Email</td>
            <td>Date</td>
            <td>Time</td>
            <td>Operation</td>
          </tr>
          {data
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, id) => {
              return (
                <tr key={id} className="row2">
                  <>
                    {/* <Link to={`/info/${item.id}`}> */}
                    <td>{id + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <a href={item.sitelink} target="_blank">
                        {item.sitelink}
                      </a>
                    </td>
                    <td>{item.webname}</td>
                    <td>{item.email}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>
                      <button className="btn1" onClick={() => deleteUser(item.id)}>
                        Delete
                      </button>
                    </td>
                    {/* </Link> */}
                  </>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default LogComponent;

// [
//   data={
//     "name": "Harry Potter",
//     "sitelink": "https://www.google.com/?gws_rd=ssl",
//     "webname":"google",
//     "email":"harry@gmail.com",
//     "date":20/2,
//     "time":8.00,
//   },
//   {
//     "name": "Jon Doe",
//     "sitelink": "https://www.facebook.com/",
//     "webname":"facebook",
//     "email":"Jon@gmail.com",
//     "date":20/3,
//     "time":8.00,
//   },
//   {
//    "name": "Paul Walker",
//     "sitelink": "https://www.instagram.com/?hl=en",
//     "webname":"Instagram",
//     "email":"Paul@gmail.com",
//     "date":212/2,
//     "time":4.00,
//   },
//   {
//    "name": "Tupac Shakur",
//     "sitelink": "https://twitter.com/i/flow/login",
//     "webname":"Twitter",
//     "email":"tupac@gmail.com",
//     "date":5/2,
//     "time":6.00,
//   },
// {
//    "name": "Brad Pit",
//     "sitelink": "https://in.indeed.com/",
//     "webname":"Indeed",
//     "email":"brad@gmail.com",
//     "date":50/2,
//     "time":6.30,
//   },
// {
//    "name": "Brad Pit2",
//     "sitelink": "London",
//     "webname":"Indeed",
//     "email":"brad@gmail.com",
//     "date":20/2,
//     "time":8.00,
//   },
// {
//    "name": "Brad Pit3",
//     "sitelink": "London",
//     "webname":"Indeed",
//     "email":"brad@gmail.com",
//     "date":20/2,
//     "time":8.00,
//   },
// {
//    "name": "Brad Pit4",
//     "sitelink": "London",
//     "webname":"Indeed",
//     "email":"brad@gmail.com",
//     "date":20/2,
//     "time":8.00,
//   },
// {
//    "name": "Brad Pit5",
//     "sitelink": "London",
//     "webname":"Indeed",
//     "email":"brad@gmail.com",
//     "date":20/2,
//     "time":8.00,
//   },
// {
//    "name": "Brad Pit6",
//     "sitelink": "London",
//     "webname":"Indeed",
//     "email":"brad@gmail.com",
//     "date":20/2,
//     "time":8.00,
//   }

// ]
