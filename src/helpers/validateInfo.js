export default function validateInfo( values )
{
  const errors = {};

  if ( !values.firstName.trim() )
  {
    errors.firstName = 'First name is required';
  }
  if ( !values.lastName.trim() )
  {
    errors.lastName = 'Last name is required';
  }
  if ( !values.euResident )
  {
    errors.euResident = 'Eu Resident is required';
  }
  if ( !values.advances && !values.alerts && !values.other )
  {
    errors.checkError = 'at latest one is required';
  }

  if ( !values.email )
  {
    errors.email = 'Email is required';
  } else if ( !/\S+@\S+\.\S+/.test( values.email ) )
  {
    errors.email = 'Email address is invalid';
  }

  return errors;
}
