import { ToastContainer } from 'react-toastify';
import Container from './components/Container/Container';
import 'react-toastify/dist/ReactToastify.css';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

function App() {
  return (
    <Container>
      <ToastContainer autoClose={3000} />
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
