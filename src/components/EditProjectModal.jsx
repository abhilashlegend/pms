import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function EditProjectModal({projectData, showEditProjectModal, closeEditProjectModal, updateProject}) {

    const [validated, setValidated] = useState(false);

    const [project, setProject] = useState(projectData);

    // Update local state when projectData changes
    useEffect(() => {
        console.log('ProjectData changed:', projectData);
        setProject(projectData);
    }, [projectData]);

    function handleInputChange(event){  
        const { name, value } = event.target;
        setProject({
            ...project,
            [name]: value
        });
    }

    function handleUpdateProject(event){
        event.preventDefault();
        event.stopPropagation();
        
        // Check if all required fields are filled
        if (!project.title || !project.description || !project.dueDate) {
            setValidated(true);
            return;
        }

        // Save project and close modal when validation passes
        updateProject(project.id, {
            title: project.title,
            description: project.description,
            dueDate: project.dueDate
        });
        
        closeEditProjectModal();
        setValidated(false);
    }
    
    return (
        <>
            <Modal size="lg" show={showEditProjectModal}  onHide={closeEditProjectModal}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form noValidate validated={validated} >
                    <Form.Group className="mb-3" controlId="editForm.ProjectTitle">
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="project title"
                        name="title"
                        value={project.title || projectData.title}
                        onChange={(e) => handleInputChange(e)}
                        isInvalid={validated && !project.title || !projectData.title}
                        autoFocus
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a project title.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="editForm.ProjectDescription"
                    >
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        required 
                        value={project.description || projectData.description} 
                        onChange={(e) => handleInputChange(e)} 
                        rows={3} 
                        name="description"
                        isInvalid={validated && !project.description || !projectData.description} 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a project description.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="editForm.DueDate"
                    >
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control 
                        type="date" 
                        required 
                        value={project.dueDate || projectData.dueDate} 
                        onChange={(e) => handleInputChange(e)} 
                        name="dueDate"
                        isInvalid={validated && !project.dueDate || !projectData.dueDate}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please select a due date.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={closeEditProjectModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdateProject}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}