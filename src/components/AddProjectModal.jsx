import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function AddProjectModal({showNewProjectModal, handleCloseAddProjectModal, saveProject}) {

    const [validated, setValidated] = useState(false);

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

    function handleSaveProject(event){
        event.preventDefault();
        event.stopPropagation();
        
        // Check if all required fields are filled
        if (!project.title || !project.description || !project.dueDate) {
            setValidated(true);
            return;
        }

        // Save project and close modal when validation passes
        saveProject(project);
        handleCloseAddProjectModal();
        
        // Reset form
        setProject({
            title: '',
            description: '',
            dueDate: ''
        });
        setValidated(false);
    }
    
    return (
        <>
            <Modal size="lg" show={showNewProjectModal}  onHide={handleCloseAddProjectModal}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSaveProject}>
                    <Form.Group className="mb-3" controlId="exampleForm.ProjectTitle">
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="project title"
                        name="title"
                        value={project.title}
                        onChange={(e) => handleInputChange(e)}
                        isInvalid={validated && !project.title}
                        autoFocus
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a project title.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ProjectDescription"
                    >
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        required 
                        value={project.description} 
                        onChange={(e) => handleInputChange(e)} 
                        rows={3} 
                        name="description"
                        isInvalid={validated && !project.description} 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a project description.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.DueDate"
                    >
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control 
                        type="date" 
                        required 
                        value={project.dueDate} 
                        onChange={(e) => handleInputChange(e)} 
                        name="dueDate"
                        isInvalid={validated && !project.dueDate}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please select a due date.
                    </Form.Control.Feedback>
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