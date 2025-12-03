import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Login.module.css'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className={classes['login-block']}>
             <Form className={classes['form-signin']}>
                {/* <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" /> */}
                <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                <Form.Label htmlFor="inputEmail" className='sr-only'>Email address</Form.Label>
                <Form.Control type="email" id="inputEmail" placeholder="Email address" required="" autofocus="" />
                <Form.Label htmlFor="inputPassword" className='sr-only'>Password</Form.Label>
                <Form.Control type="password" id="inputPassword" placeholder="Password" required="" />
                <div className="checkbox mb-3">
                    
                        <Form.Check type="checkbox" id='remember-me' label="Remember me" />
                
                </div>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" type="submit"><i className="bi bi-box-arrow-in-right"></i> Sign in</Button>
                    <Link className='btn btn-lg btn-secondary' to="/register"><i class="bi bi-person-plus"></i> Register</Link>
                </div>
                
                <p className="mt-5 mb-3 text-muted text-center">© 2026-2027</p>
            </Form>
        </div>
    )
}