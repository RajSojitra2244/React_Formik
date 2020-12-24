// import './App.css';
import  Router  from './Route/RouterFile';
import EnrollMentForm from './Formik_Parts/EnrollMentForm';
// import Form from './Component/formdata'
import FormikContainer from './Formik_Parts/FormikContainer';
import LoginForm from './Formik_Parts/LoginForm';
import RegistrationForm from './Formik_Parts/RegistrationForm';
import SimpleMap from './Formik_Parts/SimpleMap';
import Table from './table'

function App() {
  return (
   
    <div className="App">
     {/* <Form/> */}
     {/* <FormikContainer/> */}
     {/* <LoginForm/> */}
     {/* <RegistrationForm/> */}
     {/* <EnrollMentForm/> */}
     {/* <SimpleMap/>
     {/* <Table/> */}
     <Router/>
    </div>
   
  );
}

export default App;
