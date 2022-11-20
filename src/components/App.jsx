import ContactForm from "./ContactForm/ContactForm";
import Container from "./Container/Container";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <p>You can add new contacts below:</p>
      <ContactForm />
      <p>Your Contacts:</p>
      <ContactList />
      <Filter />
    </Container>
  );
};
