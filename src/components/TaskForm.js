// src/components/TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TaskForm = ({ fetchTasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return;

        try {
            await axios.post('/api/tasks', { title, description, status });
            fetchTasks();
            setTitle('');
            setDescription('');
            setStatus('To Do');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={5}>


                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="taskForm.title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="taskForm.description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="taskForm.status">
                            <Form.Label>Status</Form.Label>
                            <Form.Select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="To Do">

                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Done">Done</option>
                            </Form.Select>
                        </Form.Group>
                        <Row className="justify-content-md-center">
                            <Col lg={3}>

                                <Button type="submit">Add Task</Button>
                            </Col>
                        </Row>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
};

export default TaskForm;
