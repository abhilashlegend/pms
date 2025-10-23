import Accordion from 'react-bootstrap/Accordion';
import TaskAccordian from './TaskAccordian';
import { useState } from 'react';

function ProjectAccordian({projectData, activeKey, onSelect, onDelete, openTaskModal}) {



  return (
    <Accordion activeKey={activeKey} onSelect={onSelect}>
      <Accordion.Item eventKey={projectData.id}>
        <Accordion.Header>
          <span className='me-3'>#{projectData.id} </span> 
           <span>{projectData.title}</span>
        </Accordion.Header>
        <Accordion.Body>
          <div className='d-flex justify-content-between align-items-center mb-3'>
            <strong>Due Date: { projectData.dueDate }</strong>
            <button className='btn btn-danger' onClick={() => onDelete(projectData.id)}>Delete</button>
          </div>
          {projectData.description}
          <div className="row mt-4">
                <div className="col-md-12">
                  <div className='d-flex justify-content-between align-items-center'>
                    <h2>Tasks</h2>
                    <button className='btn btn-success mb-3' onClick={openTaskModal}>Add Task</button>
                  </div>
                  
                  { (projectData.tasks || []).map(task => {
                    return (
                      <TaskAccordian key={task.id} taskData={task} />
                    )
                  })
                }
                </div>
           </div> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ProjectAccordian;