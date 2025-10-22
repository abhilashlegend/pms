import { useState } from 'react';
import AddProjectModal from "./AddProjectModal";
import ProjectAccordian from "./ProjectAccordian";
import PROJECTDATA from '../data/dummy-projects.json';

export default function Projects() {
    const [showNewProject, setShowNewProject] = useState(false);
    const [projectsData, setProjectsData] = useState(PROJECTDATA);
    const [activeProject, setActiveProject] = useState(null);

    // Set first project as active when data loads
    useState(() => {
        if (projectsData?.projects?.[0]) {
            setActiveProject(projectsData.projects[0].id);
        }
    }, [projectsData]);

    const handleCloseProject = () => setShowNewProject(false);
    const handleOpenProject = () => setShowNewProject(true);

    function addNewProject(project){
    // Ensure the incoming project has the expected shape
    const normalized = {
        id: project.id || `p${Date.now()}`,
        title: project.title || 'Untitled Project',
        description: project.description || '',
        dueDate: project.dueDate || '',
        tasks: Array.isArray(project.tasks) ? project.tasks : [],
    };

    const updatedProjects = [...(projectsData?.projects || []), normalized];

    setProjectsData({projects: updatedProjects});

    }

    return (
        <div className="container-fluid">
            <AddProjectModal saveProject={addNewProject} showNewProjectModal={showNewProject} handleCloseAddProjectModal={handleCloseProject} />
            <div className="row">
                <div className="col-md-4">
                     <h1 className="text-center text-2xl font-bold">Projects</h1>
                </div>
                <div className="col-md-8">
                    <form className="row g-3 ms-auto d-flex justify-content-end align-items-center">
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary" onClick={handleOpenProject}>Add Project</button>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="projectfilter" className="visually-hidden">Filter Project List</label>
                            <select className="form-select" id='projectfilter' aria-label="Default select example">
                                <option defaultValue={'All'}>All</option>
                                <option value="1">Completed</option>
                                <option value="2">In Progress</option>
                            </select>
                        </div>
                    </form>

                    
                    
                </div>
            </div>
            { (projectsData?.projects || []).map((project) => {
                return (
                    <div key={project.id} className="row mt-4">
                        <div className="col-md-12">
                             <ProjectAccordian 
                                 projectData={project}
                                 activeKey={activeProject}
                                 onSelect={(key) => setActiveProject(key)}
                             />
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}