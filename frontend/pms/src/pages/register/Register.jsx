import { useState } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Register() {

    useDocumentTitle('Register | PMS');

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [formError, setFormError] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const validateField = (name, value) => {
        switch (name) {
            case 'firstName':
            case 'lastName':
                if (!value || value.trim() === '') return 'This field is required.';
                return '';
            case 'username':
                if (!value || value.trim() === '') return 'Please enter a username.';
                if (value.trim().length < 3) return 'Username must be at least 3 characters.';
                return '';
            case 'email': {
                if (!value || value.trim() === '') return 'Please enter an email.';
                // simple email check
                const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRe.test(value)) return 'Please enter a valid email address.';
                return '';
            }
            case 'password':
                if (!value) return 'Please enter a password.';
                if (value.length < 6) return 'Password must be at least 6 characters.';
                return '';
            case 'confirmPassword':
                if (!value) return 'Please confirm your password.';
                if (value !== formData.password) return 'Passwords do not match.';
                return '';
            default:
                return '';
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));

        // clear previous error while typing
        if (formError[name]) {
            setFormError(prev => ({ ...prev, [name]: '' }));
        }
    }

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setFormError(prev => ({ ...prev, [name]: error }));
    }

    const validateAll = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            newErrors[key] = validateField(key, formData[key]);
        });
        setFormError(newErrors);
        return !Object.values(newErrors).some(Boolean);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!validateAll()) return;
        // submit formData
        console.log('Submitting', formData);
    }

    return (
        <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card">
                        <div className="cart-body p-4 p-md-5">
                            <h1 className="mb-4 pb-2 pb-md-0 mb-md-5">Register</h1>

                            <form onSubmit={onSubmit} noValidate>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="firstName"><span className="required">*</span> First Name</label>
                                            <input type="text" id="firstName" name="firstName" onChange={handleChange} onBlur={handleBlur} value={formData.firstName} className={`form-control ${formError.firstName ? 'is-invalid' : ''}`} />   
                                            {formError.firstName && <div className="invalid-feedback d-block">{formError.firstName}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="lastName"><span className="required">*</span> Last Name</label>
                                            <input type="text" id="lastName" name="lastName" onChange={handleChange} onBlur={handleBlur} value={formData.lastName} className={`form-control ${formError.lastName ? 'is-invalid' : ''}`} />   
                                            {formError.lastName && <div className="invalid-feedback d-block">{formError.lastName}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="username"><span className="required">*</span> Username</label>
                                            <input type="text" id="username" name="username" onChange={handleChange} onBlur={handleBlur} value={formData.username} className={`form-control ${formError.username ? 'is-invalid' : ''}`} />   
                                            {formError.username && <div className="invalid-feedback d-block">{formError.username}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="email"><span className="required">*</span> Email</label>
                                            <input type="email" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={formData.email} className={`form-control ${formError.email ? 'is-invalid' : ''}`} />   
                                            {formError.email && <div className="invalid-feedback d-block">{formError.email}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="password"><span className="required">*</span> Password</label>
                                            <input type="password" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={formData.password} className={`form-control ${formError.password ? 'is-invalid' : ''}`} />   
                                            {formError.password && <div className="invalid-feedback d-block">{formError.password}</div>}
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="confirmPassword"><span className="required">*</span> Confirm Password</label>
                                            <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={formData.confirmPassword} className={`form-control ${formError.confirmPassword ? 'is-invalid' : ''}`} />   
                                            {formError.confirmPassword && <div className="invalid-feedback d-block">{formError.confirmPassword}</div>}
                                        </div>
                                    </div>
                                </div>

                                 <div className="row">
                                    <div className="col-md-12 mt-4">
                                        <button className="btn btn-primary me-3" type="submit">Submit</button>
                                        <Link className="btn btn-danger" to="/">Cancel</Link>
                                    </div>
                                 </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}