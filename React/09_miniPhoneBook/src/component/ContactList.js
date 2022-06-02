import React from 'react'
import { ContactItem } from './ContactItem'
import SearchBox from './SearchBox'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const contactList = useSelector(state => state.contactList)
  return (
    <>
      <SearchBox />
      {contactList.map( (item) => (
        <ContactItem />))
      }
    </>  
  )
}
export default ContactList