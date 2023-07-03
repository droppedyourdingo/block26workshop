import {useEffect, useState} from 'react'
import React from 'react'
import ExtendContactRow from './ContactRowExtend';


export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState({})
    console.log(selectedContactId)
    const backButton = () => {
        setSelectedContactId(null);
      };

    useEffect(()=>{
        async function fetchSelectedContact() {
            try {
                const response = await fetch(

                    `http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                    
                    );
                    const result = await response.json();
                    setContact(result);
            } catch(error) {
                console.error(error);
            }
        }
        fetchSelectedContact()
    },[]);
    console.log("Contacts: ", contact)
    
    return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="6">More Details</th>
            </tr>
          </thead>
          <tbody>
            {
            Object.keys(contact).length > 0 ? (
                <ExtendContactRow key={contact.id} contact={contact} />
            ) : (
                <tr>
                    <td colSpan="6">Loading...</td>
                </tr>
            )
            }
            <button onClick={backButton}>Back</button>
          </tbody>
        </table>
    ); 
}