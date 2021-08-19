import { useState, useEffect } from 'react';

const useForm = ( callback, validate ) =>
{
  const [ values, setValues ] = useState( {
    firstName: '',
    lastName: '',
    email: '',
    org: '',
    euResident: '',
    advances: '',
    alerts: '',
    other: ''
  } );
  const [ errors, setErrors ] = useState( {} );

  const [ isSubmitting, setIsSubmitting ] = useState( false );

  const handleChange = e =>
  {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues( {
      ...values,
      [ e.target.name ]: value
    } );


  };
  const handleReset = e =>
  {
    e.preventDefault();
    setValues( {
      firstName: '',
      lastName: '',
      email: '',
      org: '',
      euResident: '',
      advances: false,
      alerts: false,
      other: false
    } )

  }

  const handleSubmit = e =>
  {
    e.preventDefault();

    setErrors( validate( values ) );
    setIsSubmitting( true );
  };

  useEffect(
    () =>
    {
      if ( Object.keys( errors ).length === 0 && isSubmitting )
      {
        callback();
      }
    },
    [ errors ]
  );

  return { handleChange, handleSubmit, handleReset, isSubmitting, values, errors };
};

export default useForm;
