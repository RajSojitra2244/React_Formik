import React from 'react';
import Privateheader from '../header/Privateheader';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import FormikControll from '../../Formik_Parts/FormikControll';
import '../CSS/CreateBlog.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { CreateBlogRequest } from '../../Redux/Private/CraeteBlog/CreateBlogAction';

function CreateBlog(props) {
  console.log('About');
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
      blogTitle: '',
      blogContent: '',
    },
    onSubmit = (values, onSubmitProps) => {
      console.log('blog_values', values);
      dispatch(CreateBlogRequest(values, onSubmitProps, props));
    };

  const validationSchema = Yup.object({
    blogTitle: Yup.string().required('Required!'),
    blogContent: Yup.string().required('Required!'),
  });

  return (
    <Privateheader title="About">
      <div className="CreateBlog">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <Card>
                  <Card.Body>
                    <Card.Title className="Blogtitle">
                      <h3>Create Blog</h3>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <FormikControll
                      control="input"
                      type="text"
                      lable="Blog Title"
                      name="blogTitle"
                    />
                    <FormikControll
                      control="input"
                      type="text"
                      lable="Blog Content"
                      name="blogContent"
                    />

                    <button
                      className="btn btn-info CreateBlogBtn"
                      type="submit"
                      href="#"
                    >
                      Create
                    </button>
                  </Card.Body>
                </Card>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Privateheader>
  );
}

export default CreateBlog;
