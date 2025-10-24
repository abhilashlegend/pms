import { useState, useEffect } from 'react';
import AddProjectModal from "./AddProjectModal";
import ProjectAccordian from "./ProjectAccordian";
import PROJECTDATA from '../data/dummy-projects.json';
import AddTaskModal from './AddTaskModal';
import EditProjectModal from './EditProjectModal';
import EditTaskModal from './EditTaskModal';

export default function Projects() {
    const [showNewProject, setShowNewProject] = useState(false);
    const [projectsData, setProjectsData] = useState(PROJECTDATA);
    const [activeProject, setActiveProject] = useState(null);

    const [showNewTask, setShowNewTask] = useState(false);
    const [showEditProject, setShowEditProject] = useState(false);
    const [project, setProject] = useState({});

    // Edit Task Modal State
    const [showEditTask, setShowEditTask] = useState(false);
    const [editTaskData, setEditTaskData] = useState(null);

    const handleCloseAddTaskModal = () => setShowNewTask(false);
    const handleOpenAddTaskModal = (projectId) => {
        setShowNewTask(true);
        setActiveProject(projectId);
    }

    // Edit Task Modal Handlers
    function handleOpenEditTaskModal(task) {
        setEditTaskData(task);
        setShowEditTask(true);
    }
    function handleCloseEditTaskModal() {
        setShowEditTask(false);
        setEditTaskData(null);
    }

    // Update Task in Project
    function updateTaskHandler(projectId, taskId, updatedTask) {
        setProjectsData((prevData) => {
            const updatedProjects = {
                ...prevData,
                projects: prevData.projects.map(project => {
                    if (project.id === projectId) {
                        return {
                            ...project,
                            tasks: (project.tasks || []).map(task =>
                                task.id === taskId ? { ...task, ...updatedTask } : task
                            )
                        };
                    }
                    return project;
                })
            };
            return updatedProjects;
        });
    }

    // Set first project as active only when component mounts
    useEffect(() => {
        if (projectsData?.projects?.[0] && !activeProject) {
            setActiveProject(projectsData.projects[0].id);
        }
    }, []); // Empty dependency array means this only runs once on mount

    const handleCloseProject = () => setShowNewProject(false);
    const handleOpenProject = () => setShowNewProject(true);

    function handleOpenEditProjectModal(project) {
        setProject(project);
        setShowEditProject(true);
    }

    function handleCloseEditProject() {
        setShowEditProject(false);
        setProject({}); // Reset project data when closing
    }

    function handleCloseEditProject() {
        setShowEditProject(false);
    }

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

    function updateProjectHandler(projectId, updatedInfo) {
        setProjectsData((prevData) => {
            const updatedProjects = {
                ...prevData,
                projects: prevData.projects.map(project => {
                    if (project.id === projectId) { 
                        return {
                            ...project,
                            ...updatedInfo
                        };
                    }
                    return project;
                })                    
            };
            return updatedProjects;
        });
    }

    function deleteProject(projectId) {
        setProjectsData((prevData) => {
            const updatedProjects = {
                ...prevData,
                projects: prevData.projects.filter(project => project.id !== projectId)
            };
            return updatedProjects;
        });
    }

    function handleDeleteTask(projectId, taskId) {
        
        setProjectsData((prevData) => {
            const updatedProjects = {
                ...prevData,
                projects: prevData.projects.map(project => {
                    if (project.id === projectId) {
                        return {
                            ...project,
                            tasks: (project.tasks || []).filter(task => task.id !== taskId)
                        };
                    }
                    // return unchanged project for non-matching entries
                    return project;
                })                    
            };
            return updatedProjects;
        });
    }
    function saveTaskToProject(newTask) {
        setProjectsData((prevData) => {
            const updatedProjects = {
                ...prevData,
                projects: prevData.projects.map(project => {
                    if (project.id === newTask.projectId) {
                        return {
                            ...project,
                            tasks: [...(project.tasks || []), {
                                id: newTask.id,
                                title: newTask.title,
                                description: newTask.description,
                                dueDate: newTask.dueDate,
                                status: newTask.status
                            }]
                        };
                    }
                    return project;
                })
            };
            return updatedProjects; // Add this return statement
        });
    }

    return (
        <div className="container-fluid">
            <AddProjectModal saveProject={addNewProject} showNewProjectModal={showNewProject} handleCloseAddProjectModal={handleCloseProject} />
            <EditProjectModal projectData={project} showEditProjectModal={showEditProject} closeEditProjectModal={handleCloseEditProject} updateProject={updateProjectHandler} />
            <AddTaskModal  saveTask={saveTaskToProject} showNewTaskModal={showNewTask} projectId={activeProject} closeAddTaskModal={handleCloseAddTaskModal} />
            <EditTaskModal showEditTaskModal={showEditTask} closeEditTaskModal={handleCloseEditTaskModal} taskData={editTaskData} updateTask={updateTaskHandler} />
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
                                 onDelete={deleteProject}
                                 projectData={project}
                                 activeKey={activeProject}
                                 onSelect={(key) => setActiveProject(key)}
                                 openTaskModal={handleOpenAddTaskModal}
                                 onDeleteTask={handleDeleteTask}
                                 openEditProjectModal={() => handleOpenEditProjectModal(project)}
                                 openEditTaskModal={handleOpenEditTaskModal}
                             />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}