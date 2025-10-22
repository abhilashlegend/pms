import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function AddProjectModal({showNewProjectModal, handleCloseAddProjectModal, saveProject}) {

    const [project, setProject] = useState({
        title: '',
        description: '',
        dueDate: ''
    });

    function handleInputChange(event){  
        const { name, value } = event.target;
        setProject({
            ...project,
            [name]: value
        });
    }

    function handleSaveProject(){
        saveProject(project);
    }
    
    return (
        <>
            <Modal size="lg" show={showNewProjectModal} onHide={handleCloseAddProjectModal}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="project title"
                        name="title"
                        value={project.title}
                        onChange={(e) => handleInputChange(e)}
                        autoFocus
                    />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    >
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control as="textarea" value={project.description} onChange={(e) => handleInputChange(e)} rows={3} name="description" />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.DueDate"
                    >
                    <Form.Label>Due Date</Form.Label>
                    <input type="date" value={project.dueDate} onChange={(e) => handleInputChange(e)} className="form-control" name="dueDate" />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAddProjectModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveProject}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}