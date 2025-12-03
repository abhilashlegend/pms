import { Form, useNavigation, useNavigate } from "react-router-dom";
import PageHeader from "../../../components/pageheader/PageHeader";
import { useState } from "react";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { Link } from "react-router-dom";

export default function NewUser(){

    useDocumentTitle('New User | PMS')

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [formError, setFormError] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const navigation = useNavigation();

    const navigate = useNavigate();

    function Cancel() {
        return navigate('..');
    }

    const isSubmitting = navigation.state === 'submitting';

    function validateField(name, value) {
        switch(name){
            case 'firstName':
            case 'lastName': 
                if(!value || value.trim() === '') return 'Please enter the field'
                return '';
            case 'username':
                if(!value || value.trim() === '') return 'Please enter the username';
                if(value.length < 3) return 'username should be atleast 3 characters in length';
                return '';
            case 'email': { 
                if(!value || value.trim() === '') return 'Please enter email';

                // Simple email check
                 const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                 if(!emailRe.test(value)) return 'Please enter a valid email address';
                 return ''
            }
            case 'password':
                if(!value || value.trim() === '') return 'Please enter password';
                if(value.length < 6) return 'Password must be atleast 6 characters in length';
                return ''
            case 'confirmPassword':
                if(!value) return 'Please enter confirm password';
                 if(!value || value !== formData.password) return 'Confirm password do not match password';
                 return '';
            default:
                return '';
        }
    }

    function handleBlur(e){
        const {name, value} = e.target;
        const error = validateField(name, value);
        setFormError((prevError) => ( {...prevError, [name]: error }))
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevData => { return {...prevData, [name]: value } })

        // clear previous errors
        if(formError[name]){
            setFormError(prev => ({...prev, [name]: ''}))
        }
    }

    function validateAll() {
        const newErrors = {}
        Object.keys(formData).forEach(key => {
            newErrors[key] = validateField(key, formData[key])
        })
        setFormError(newErrors)
        return !Object.values(newErrors).some(Boolean);
    }

    function onSubmit(e) {
        e.preventDefault();
        if(!validateAll()) return;
        console.log(formData);
    }

    return (
        <>
            <PageHeader title="New User" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Form method='POST' onSubmit={onSubmit}>
                            <div className="row">
                                    <div className="col-sm-6 col-md-3 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="firstName"><span className="required">*</span> First Name</label>
                                            <input type="text" id="firstName" name="firstName" onChange={handleChange} onBlur={handleBlur} value={formData.firstName} className={`form-control ${formError.firstName ? 'is-invalid' : ''}`} />   
                                            {formError.firstName && <div className="invalid-feedback d-block">{formError.firstName}</div>}
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-3 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="lastName"><span className="required">*</span> Last Name</label>
                                            <input type="text" id="lastName" name="lastName" onChange={handleChange} onBlur={handleBlur} value={formData.lastName} className={`form-control ${formError.lastName ? 'is-invalid' : ''}`} />   
                                            {formError.lastName && <div className="invalid-feedback d-block">{formError.lastName}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 col-md-3 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="username"><span className="required">*</span> Username</label>
                                            <input type="text" id="username" name="username" onChange={handleChange} onBlur={handleBlur} value={formData.username} className={`form-control ${formError.username ? 'is-invalid' : ''}`} />   
                                            {formError.username && <div className="invalid-feedback d-block">{formError.username}</div>}
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-3 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="email"><span className="required">*</span> Email</label>
                                            <input type="email" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={formData.email} className={`form-control ${formError.email ? 'is-invalid' : ''}`} />   
                                            {formError.email && <div className="invalid-feedback d-block">{formError.email}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 col-md-3 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="password"><span className="required">*</span> Password</label>
                                            <input type="password" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={formData.password} className={`form-control ${formError.password ? 'is-invalid' : ''}`} />   
                                            {formError.password && <div className="invalid-feedback d-block">{formError.password}</div>}
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-3 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="confirmPassword"><span className="required">*</span> Confirm Password</label>
                                            <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={formData.confirmPassword} className={`form-control ${formError.confirmPassword ? 'is-invalid' : ''}`} />   
                                            {formError.confirmPassword && <div className="invalid-feedback d-block">{formError.confirmPassword}</div>}
                                        </div>
                                    </div>
                                </div>

                                 <div className="row">
                                    <div className="col-sm-6 col-md-3 mb-4">
                                         <div className="form-outline">
                                             <label className="form-label" htmlFor="role"><span className="required">*</span> User Role</label>
                                             <select name="role" className="form-control">
                                                <option>Member</option>
                                                <option>Lead</option>
                                             </select>
                                         </div>
                                    </div>
                                </div>

                                 <div className="row">
                                    <div className="col-md-12 mt-4">
                                        <button className="btn btn-primary me-3" type="submit" disabled={isSubmitting}>{ isSubmitting ? 'Submitting' : 'Submit' }</button>
                                        <button className="btn btn-danger" onClick={Cancel}>Cancel</button>
                                    </div>
                                 </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}