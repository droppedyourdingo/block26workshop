export default function ExtendContactRow({ contact }) {
    return (
        <table>             
          <p class="extendDetail">Name</p>
          <p>{contact.name}</p>
          <p class="extendDetail">Email</p>
          <p>{contact.email}</p>
          <p class="extendDetail">Phone</p>
          <p>{contact.phone}</p>
          <p class="extendDetail">Username</p>
          <p>{contact.username}</p>
          <p class="extendDetail">Website</p>
          <p>{contact.website}</p>
          <p class="extendDetail">Company</p>
          <p>{contact.company.name}</p>
        </table>
      );
}