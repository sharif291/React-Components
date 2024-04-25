import { useState } from 'react';

const useForm = (initialState, validator) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValues = {
            ...values,
            [name]: value
        }
        setValues(newValues);

        const validationErrors = validator(newValues)
        // console.log(validationErrors)
        // if need to show errro for only focused input field
        // setErrors({ [name]: validationErrors[name] })

        // if need to show error for any input field validation
        setErrors(validationErrors)
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validator(values);
        setErrors(validationErrors);

        // check if form is valid
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', values);
        }
    };

    return { values, handleChange, handleSubmit, errors };
};

export default useForm;