import Accordion from 'react-bootstrap/Accordion';
import TaskAccordian from './TaskAccordian';
import { useRef } from 'react';

function ProjectAccordian({projectData, activeKey, onSelect, onDelete, openTaskModal, onDeleteTask, openEditProjectModal}) {

  function deleteTaskhandler(taskId) {
      onDeleteTask(projectData.id, taskId);
  }

  function openEditModal() {
      openEditProjectModal(projectData);
  }

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
            <div>
              <button className='btn btn-success me-3' onClick={openEditModal}>Edit</button>
              <button className='btn btn-danger' onClick={() => onDelete(projectData.id)}>Delete</button>
            </div>
            
          </div>
          {projectData.description}
          <div className="row mt-4">
                <div className="col-md-12">
                  <hr />
                  <div className='d-flex justify-content-between align-items-center'>
                    <h2>Tasks</h2>
                    <button className='btn btn-primary mb-3' onClick={() => openTaskModal(projectData.id)}>Add Task</button>
                  </div>
                  
                  { (projectData.tasks || []).map(task => {
                    return (
                      <TaskAccordian key={task.id} taskData={task} onDelete={deleteTaskhandler} />
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