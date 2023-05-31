import React, { useState, useEffect } from "react";
import "../styles/Scores.css";
import { Table } from "flowbite-react";
import axios from "axios";

const ScoresPages = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://35.174.138.142:5000/api/scores").then(
      (response) => {
        console.log("ESTO: ", response.data);
        setUsers(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);



  return (
    <div className="Score-Pages">
      <div className="Score-Table">
      <Table hoverable={true}>
      <Table.Head>
        <Table.HeadCell style={{ fontSize: '25px' }}>Number</Table.HeadCell>
        <Table.HeadCell style={{ fontSize: '25px' }}>Username</Table.HeadCell>
        <Table.HeadCell style={{ fontSize: '25px' }}>Score</Table.HeadCell>

      </Table.Head>
      <Table.Body className="divide-y">
        {users.map((user, index) => (
          <Table.Row
            key={index}
            style={{ fontSize: '25px' }}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell style={{ fontSize: '25px' }}>{index + 1}</Table.Cell>
            <Table.Cell style={{ fontSize: '25px' }} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.Username}
            </Table.Cell >
            <Table.Cell>{user.Score}</Table.Cell>

          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </div>
    </div>

  );
};

export default ScoresPages;
