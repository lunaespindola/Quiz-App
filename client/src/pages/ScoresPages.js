import React, { useState, useEffect } from "react";
import "../styles/Scores.css";
import { Table } from "flowbite-react";

const ScoresPages = () => {
  const [users, setUsers] = useState([
    {
      username: "PatoAMLO",
      score: "2",
      date: "2021-05-01",
    },
    {
      username: "Vegetta777",
      score: "5",
      date: "2021-05-03",
    },
    {
      username: "RubiusOMG",
      score: "3",
      date: "2021-05-10",
    },
  ]);

  useEffect(() => {
    const sortedScores = [...users].sort((a, b) => b.score - a.score);
    setUsers(sortedScores);
  }, [users]);

  return (
    <Table hoverable={true}>
      <Table.Head>
        <Table.HeadCell>Number</Table.HeadCell>
        <Table.HeadCell>Username</Table.HeadCell>
        <Table.HeadCell>Score</Table.HeadCell>
        <Table.HeadCell>Date</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {users.map((user, index) => (
          <Table.Row
            key={index}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {user.username}
            </Table.Cell>
            <Table.Cell>{user.score}</Table.Cell>
            <Table.Cell>{user.date}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ScoresPages;
