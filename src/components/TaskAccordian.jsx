import Accordion from 'react-bootstrap/Accordion';

function TaskAccordian({taskData}) {
    return (
         <Accordion defaultActiveKey={taskData.id}>
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
                
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default TaskAccordian;