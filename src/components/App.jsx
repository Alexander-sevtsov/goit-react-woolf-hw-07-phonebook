import Section from './section/Section';
import Form from './form/Form';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { useDispatch } from 'react-redux';
import { getAllContactsThunk } from 'store/operations';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Section title="Phone Book">
        <Form />
      </Section>
      <Section>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
