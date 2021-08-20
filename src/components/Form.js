import React from 'react';
import axios from 'axios';
import validate from '../helpers/validateInfo';
import useForm from '../helpers/useForm';
import SelectField from './SelectField';
import InputField from './InputField';
import { StateActionsContext } from '../context/stateContext';
import { dataSuccess, dataError } from '../helpers/mock';

const Form = ({ submitForm }) => {
  const ctx = React.useContext(StateActionsContext);
  const {
    handleChange,
    handleSubmit,
    handleReset,
    values,
    errors,
    isSubmitting,
  } = useForm(submitForm, validate);
  React.useEffect(() => {
    if (isSubmitting === true && Object.keys(errors).length === 0) {
      axios
        .post( 'http://localhost:3005/items', values )
        .then(response => {
          if ( response )
          {

            ctx.setNotification( dataSuccess.message );
          }
        })
        .catch( () =>
        {
          ctx.setErrorData( true );
          ctx.setNotification( dataError.message );
        });
    }
  }, [values, errors]);

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <h1>Sing up for email updates</h1>

        {errors.firstName && <span className="error">{errors.firstName}</span>}
        {errors.lastName && <span className="error">{errors.lastName}</span>}
        {errors.email && <span className="error">{errors.email}</span>}
        {errors.euResident && (
          <span className="error">{errors.euResident}</span>
        )}
        {errors.checkError && (
          <span className="error">{errors.checkError}</span>
        )}

        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <InputField
              className={errors.firstName && 'form-error'}
              label="FIRST NAME*"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <InputField
              className={errors.lastName && 'form-error'}
              label="LAST NAME*"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <InputField
              className={errors.email && 'form-error'}
              type="email"
              label="EMAIL ADDRESS*"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <InputField
              label="ORGANIZATION"
              name="org"
              value={values.org}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-4">
            <SelectField
              className={errors.euResident && 'form-error'}
              label="EU RESIDENT*"
              name="euResident"
              value={values.euResident}
              onChange={handleChange}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </SelectField>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="check-content">
              <InputField
                className={errors.checkError && 'form-error'}
                type="checkbox"
                label="ADVANCES"
                name="advances"
                value="advances"
                checked={values.advances}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6 mb-3 ">
            <div className="check-content">
              <InputField
                className={errors.checkError && 'form-error'}
                type="checkbox"
                label="ALERTS"
                name="alerts"
                value="alerts"
                checked={values.alerts}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="check-content">
              <InputField
                className={errors.checkError && 'form-error'}
                type="checkbox"
                label="OTHER COMMUNICATIONS"
                name="other"
                value="other"
                checked={values.other}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 col-sm-3 mb-3">
            <button className="button-primary" type="submit">
              SUBMIT
            </button>
          </div>
          <div className="col-6 col-sm-3 mb-3">
            <button className="button-secondary" type="button" onClick={handleReset}>
              RESET
            </button>
          </div>
        </div>
      </form>
      { ctx.notification && <p className="form-error">{ ctx.notification }</p> }
    </>
  );
};

export default Form;
