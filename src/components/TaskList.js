// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



const TaskList = ({ tasks, fetchTasks }) => {
    const [filter, setFilter] = useState('All');



    const filteredTasks = tasks.filter((task) =>
        filter === 'All' ? true : task.status === filter
    );

    return (
        <Container className="vh-100" >

            <Table responsive className="vh-100">
                <thead>
                    <tr>
                        <th>
                            Task Id
                        </th>
                        <th>
                            Task
                        </th>
                        <th>
                            Description
                        </th>
                        <th>


                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="stauts-dropdown">
                                    Status                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setFilter('All')}  >All</Dropdown.Item>

                                    <Dropdown.Item onClick={() => setFilter('To Do')}  >To Do</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setFilter('In Progress')} >In Progress</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setFilter('Done')} >Done</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map((task) => (
                        <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
                    ))}
                </tbody>
            </Table>

        </Container>
    );
};

export default TaskList;
