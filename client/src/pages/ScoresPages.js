import React, { useState, useEffect } from "react";
import "../styles/Scores.css";
import { Table } from "flowbite-react";
import axios from "axios";

const ScoresPages = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/scores").then(
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
      <Table hoverable={true}>
      <Table.Head>
        <Table.HeadCell>Number</Table.HeadCell>
        <Table.HeadCell>Username</Table.HeadCell>
        <Table.HeadCell>Score</Table.HeadCell>

      </Table.Head>
      <Table.Body className="divide-y">
        {users.map((user, index) => (
          <Table.Row
            key={index}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.Username}
            </Table.Cell>
            <Table.Cell>{user.Score}</Table.Cell>

          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </div>

  );
};

export default ScoresPages;
