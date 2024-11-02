import  { useState, useEffect, useRef, useCallback } from 'react';

// Sample data for contacts
const initialContacts = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
];

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  // useEffect to simulate data fetching on mount
  useEffect(() => {
    // Simulating an API call
    setContacts(initialContacts);
    
    // Focusing on the search input when component mounts
    inputRef.current.focus();
  }, []);

  // useCallback to memoize the filter function
  const filteredContacts = useCallback(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [contacts, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Contact List</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleSearch}
      />
      
      <ul>
        {filteredContacts().map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
