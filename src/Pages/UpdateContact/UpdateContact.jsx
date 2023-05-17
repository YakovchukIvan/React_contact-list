//css
import './UpdateContact.css'

//valid
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {validationSchema} from '../../validation/Validation'

// for id
// import {v4 as uuidv4} from 'uuid'

//router-dom
import { useNavigate } from 'react-router-dom'

//
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editContact } from '../../redux/action'




const UpdateContact = () => {

    const {id} = useParams()
    const contact = useSelector((state) =>
      state.contacts.find((contact) => contact.id === id)
    )

    const dispatch = useDispatch()

    const initialValues = {
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      avatar: contact.avatar,
      gender: contact.gender,
      status: contact.status,
      favorite: contact.favorite
    }

    const navigate = useNavigate();

    const handleSubmit = (values) => {
      dispatch(editContact(id, values))
      navigate('/');
    };

    return(
      <div className='container'>
          <div className="rounded addPage shadow-lg">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({isSubmitting }) => (
                <Form >
                  <h1 className="text-center">Edit Contact</h1>
                  <hr />
                  <div className='m-4'>
                    <Field className="form-control fs-5" placeholder='Name' type='text' name='name' />
                    <ErrorMessage component="p" className='text-danger position-absolute' name='name' />
                  </div>

                  <div className='m-4'>
                    <Field className="form-control fs-5" placeholder='Phone' type='text' name='phone' />
                    <ErrorMessage component="p" className='text-danger position-absolute'  name='phone' />
                  </div>

                  <div className='m-4'>
                    <Field className="form-control fs-5" placeholder='Email' type='text' name='email' />
                    <ErrorMessage component="p" className='text-danger position-absolute' name='email' />
                  </div>

                  <div className='m-4'>
                    <Field className="form-control fs-5" placeholder='Avatar' type='number' name='avatar' min={0} max={99}/>
                    <ErrorMessage component="p" className='text-danger position-absolute' name='avatar' />
                  </div>

                  <div className='m-4'>
                    <Field className="form-control fs-5"  as='select' name='gender' >
                      <option value=''>Choose gender</option>
                      <option value='men'>Men</option>
                      <option value='women'>Women</option>
                    </Field>
                    <ErrorMessage component="p" className='text-danger position-absolute' name='gender' />
                  </div>

                  <div className='m-4'>
                    <Field className="form-control fs-5" as='select' name='status' >
                      <option value=''>Choose status</option>
                      <option value='Work'>Work</option>
                      <option value='Family'>Family</option>
                      <option value='Private'>Private</option>
                      <option value='Friends'>Friends</option>
                    </Field>
                    <ErrorMessage component="p" className='text-danger position-absolute' name='status' />
                  </div>
                  <div className='m-4 fs-5'>
                    <Field className='form-check-input m-1' type='checkbox' name='favorite' />
                    <label className='form-check-label' htmlFor='favorite'>Favorite</label>
                  </div>
                  
                  <div className='m-4'>
                  <button type='submit' className="btn btn-primary btn-lg form-control" disabled={isSubmitting}>Update</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
      </div>

    )
}

export default UpdateContact