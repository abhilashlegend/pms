import { Link } from 'react-router-dom'
import classes from './PageHeader.module.css'

export default function PageHeader({title, buttonLink}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className={classes['page-header']}>
                         <h1>{title}</h1>
                    </div>
                </div>
                <div className='col-md-6 text-end'>
                    {buttonLink && <Link to={buttonLink} className='btn btn-success'><i className="bi bi-plus-lg"></i> New</Link>}
                </div>
            </div>
        </div> 
    )
}