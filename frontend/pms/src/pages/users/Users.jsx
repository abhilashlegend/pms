import { Link } from "react-router-dom";
import PageHeader from "../../components/pageheader/PageHeader";
import Table from 'react-bootstrap/Table';
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Users(){
    useDocumentTitle('Users | PMS')
    return (
        <>
            <PageHeader title="Users" buttonLink="/users/new-user" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>mark@example.com</td>
                                <td>
                                    <Link to={`/edit-user/`} className="btn btn-sm btn-success me-2">
                                        <i class="bi bi-pencil-square"></i> Edit
                                    </Link>

                                     <Link to={`/delete-user/`} className="btn btn-sm btn-danger">
                                        <i class="bi bi-trash"></i> Delete
                                    </Link>
                                </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
        
    )
}