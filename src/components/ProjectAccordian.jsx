import Accordion from 'react-bootstrap/Accordion';
import TaskAccordian from './TaskAccordian';

function ProjectAccordian({projectData, activeKey, onSelect}) {

  return (
    <Accordion activeKey={activeKey} onSelect={onSelect}>
      <Accordion.Item eventKey={projectData.id}>
        <Accordion.Header>
          <span className='me-3'>#{projectData.id} </span> 
           <span>{projectData.title}</span>
        </Accordion.Header>
        <Accordion.Body>
          <div><strong>Due Date: { projectData.dueDate }</strong></div>
          {projectData.description}
          <div className="row mt-4">
                <div className="col-md-12">
                  <h2>Tasks</h2>
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