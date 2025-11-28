import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Login.module.css'

export default function Login() {
    return (
        <Form className={classes['form-signin']}>
            {/* <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" /> */}
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <Form.Label htmlFor="inputEmail" className='sr-only'>Email address</Form.Label>
            <Form.Control type="email" id="inputEmail" placeholder="Email address" required="" autofocus="" />
            <Form.Label htmlFor="inputPassword" className='sr-only'>Password</Form.Label>
            <Form.Control type="password" id="inputPassword" placeholder="Password" required="" />
            <div className="checkbox mb-3">
                
                    <Form.Check type="checkbox" id='remember-me' label="Remember me" />
               
            </div>
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" type="submit">Sign in</Button>     
            </div>
            
            <p className="mt-5 mb-3 text-muted text-center">© 2026-2027</p>
        </Form>
    )
}