import React from 'react'
import { useFormik } from 'formik';

const Add_bus = () => {
    
    const formik = useFormik({
        initialValues: {
          Numer_boczny : '',
          nazwisko: '',
          wynagrodzenie: 0,
          stanowisko: 0,
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    return (
        <div>
            
        </div>
    )
}

export default Add_bus

