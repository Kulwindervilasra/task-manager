// src/components/TaskItem.js
import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { HandleDelete, HandleStatus } from "./Modal"

const TaskItem = ({ task, fetchTasks }) => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const [status, setStatus] = useState(task.status);

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/tasks/${task._id}`);
            fetchTasks();

        } catch (error) {
            console.error(error);
        } finally {
            setShow(false)
        }
    };

    const handleChangeStatus = async () => {
        try {
            await axios.put(`/api/tasks/${task._id}`, { ...task, status: status });
            fetchTasks();
        } catch (error) {
            console.error(error);
        } finally {
            setShow1(false)
        }
    };
    const handleClose = () => setShow(false)
    const handleClose1 = () => setShow1(false)

    return (
        <tr>
            <td>{task._id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>

            <td>
                <Form.Select value={task.status} onChange={(e) => {
                    setStatus(e.target.value)
                    setShow1(true)
                }} aria-label="To Do">

                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </Form.Select>
            </td>
            <td> <Button variant='danger' onClick={() => setShow(true)}>Delete</Button></td>
            <HandleDelete show={show} handleClose={handleClose} onConfirm={handleDelete} />
            <HandleStatus status={status} show={show1} handleClose={handleClose1} onConfirm={handleChangeStatus} />

        </tr>
    );
};

export default TaskItem;
