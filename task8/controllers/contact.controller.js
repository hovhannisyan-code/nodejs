const contacts = [
  {
    id: 1,
    name: "Nguyen Van A",
    phone: "+37498123456",
    email: "vana@mail.com"
  },
  {
    id: 2,
    name: "Nguyen Van B",
    phone: "+37498123456",
    email: "vanb@mail.com"
  },
  {
    id: 3,
    name: "Nguyen Van C",
    phone: "+37498123456",
    email: "vanc@mail.com"
  },
];
const index = (req, res) => {
  res.render("index", {
    title: "Contact",
    contacts
  });
};

const create = (req, res) => {
  res.render("add", {
    title: "Add Contact"
  });
};

const postCreate = (req, res) => {
  const { name, phone, email } = req.body;
  const contact = {
    id: contacts.length + 1,
    name,
    phone,
    email
  };
  contacts.push(contact);
  res.redirect("/");
};

const edit = (req, res) => {
  const { id } = req.params;
  const contact = contacts.find(contact => contact.id === parseInt(id));
  res.render("edit", {
    title: `Edit Contact ${contact.name}`,
    contact
  });
};

const postEdit = (req, res) => {
 
  const { id } = req.params;
  console.log(req.body, id);
  const { name, phone, email } = req.body; // second variant { id, name, phone, email } = req.body;
  const contact = contacts.find(contact => contact.id === parseInt(id));
  contact.name = name;
  contact.phone = phone;
  contact.email = email;
  res.redirect("/");
};

const deleteContact = (req, res) => {
  const { id } = req.params;
  const contact = contacts.find(contact => contact.id === parseInt(id));
  contacts.splice(contacts.indexOf(contact), 1);
  res.redirect("/");
};
module.exports = {
  index,
  create,
  postCreate,
  edit,
  postEdit,
  deleteContact
};