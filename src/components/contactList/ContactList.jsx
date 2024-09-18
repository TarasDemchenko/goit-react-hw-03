import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.con_list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => handleDelete(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
