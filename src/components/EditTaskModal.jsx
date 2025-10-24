import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function EditTaskModal({ showEditTaskModal, closeEditTaskModal, taskData, updateTask }) {
    const [validated, setValidated] = useState(false);
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        status: ''
    });

    useEffect(() => {
        if (taskData) {
            setTask({
                title: taskData.title || '',
                description: taskData.description || '',
                dueDate: taskData.dueDate || '',
                status: taskData.status || '',
                id: taskData.id,
                projectId: taskData.projectId
            });
        }
    }, [taskData]);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setTask({
            ...task,
            [name]: value
        });
    }

    function handleSaveTask(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!task.title || !task.description || !task.dueDate || !task.status) {
            setValidated(true);
            return;
        }
        updateTask(task.projectId, task.id, task);
        closeEditTaskModal();
        setValidated(false);
    }

    return (
        <Modal size="lg" show={showEditTaskModal} onHide={closeEditTaskModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={handleSaveTask}>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formTaskTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="title"
                            value={task.title}
                            onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a title.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTaskDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            name="description"
                            value={task.description}
                            onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a description.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTaskDueDate">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            name="dueDate"
                            value={task.dueDate}
                            onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a due date.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTaskStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            required
                            name="status"
                            value={task.status}
                            onChange={handleInputChange}
                        >
                            <option value="">Select status</option>
                            <option value="Completed">Completed</option>
                            <option value="In Progress">In Progress</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please select a status.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeEditTaskModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
