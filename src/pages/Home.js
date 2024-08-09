// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import axios from 'axios';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);
    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm fetchTasks={fetchTasks} />
            <TaskList fetchTasks={fetchTasks} tasks={tasks} />
        </div>
    );
};

export default Home;
