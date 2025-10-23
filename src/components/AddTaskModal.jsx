import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function AddTaskModal({showNewTaskModal, closeAddTaskModal, saveTask, projectId}) {

    const [validated, setValidated] = useState(false);

    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        status: ''
    });

    function handleInputChange(event){  
        const { name, value } = event.target;
        setTask({
            ...task,
            [name]: value
        });
    }

    function handleSaveTask(event){
        event.preventDefault();
        event.stopPropagation();
        
        // Check if all required fields are filled
        if (!task.title || !task.description || !task.dueDate || !task.status) {
            setValidated(true);
            return;
        }

        // Create task object with project ID
        const newTask = {
            ...task,
            id: `t${Date.now()}`, // Generate unique task ID
            projectId: projectId  // Add the project ID
        };


        // Save task and close modal when validation passes
        saveTask(newTask);
        closeAddTaskModal();
        
        // Reset form
        setTask({
            title: '',
            description: '',
            dueDate: '',
            status: ''
        });
        setValidated(false);
    }
    
    return (
        <>
            <Modal size="lg" show={showNewTaskModal}  onHide={closeAddTaskModal}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSaveTask}>
                    <Form.Group className="mb-3" controlId="taskForm.TaskTitle">
                    <Form.Label>Task Title</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="task title"
                        name="title"
                        value={task.title}
                        onChange={(e) => handleInputChange(e)}
                        isInvalid={validated && !task.title}
                        autoFocus
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a task title.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="taskForm.TaskDescription"
                    >
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        required 
                        value={task.description} 
                        onChange={(e) => handleInputChange(e)} 
                        rows={3} 
                        name="description"
                        isInvalid={validated && !task.description} 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a task description.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="taskForm.DueDate"
                    >
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control 
                        type="date" 
                        required 
                        value={task.dueDate} 
                        onChange={(e) => handleInputChange(e)} 
                        name="dueDate"
                        isInvalid={validated && !task.dueDate}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please select a due date.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="taskForm.TaskStatus">
                    <Form.Label>Task Status</Form.Label>
                     <Form.Select 
                        aria-label="Task status"
                        name="status"
                        value={task.status}
                        onChange={(e) => handleInputChange(e)}
                        required
                        isInvalid={validated && !task.status}
                     >
                        <option value="">Select Status</option>
                        <option value="not-started">Not Started</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Please provide a task status.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={closeAddTaskModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={(e) => handleSaveTask(e)}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}