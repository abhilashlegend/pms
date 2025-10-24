import Accordion from 'react-bootstrap/Accordion';

function TaskAccordian({taskData, onDelete, openEditTaskModal, projectId}) {
    return (
         <Accordion className='mb-3' defaultActiveKey={taskData.id}>
            <Accordion.Item eventKey={taskData.id}>
                <Accordion.Header>
                <span className='me-3'>#{taskData.id} </span> 
                <span>{taskData.title}</span>
                </Accordion.Header>
                <Accordion.Body>
                <div className='d-flex justify-content-between'>
                    <span><strong>Due Date: { taskData.dueDate }</strong></span>
                    <span><strong>Status:</strong> {taskData.status}</span>
                </div>
                {taskData.description}
                
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-success' onClick={() => openEditTaskModal({...taskData, projectId})}>Edit</button>
                    <button onClick={() => onDelete(taskData.id)} className='btn btn-danger ms-3'>Delete</button>
                </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default TaskAccordian;