const contacts = [
  {
    id: 1,
    name: "Nguyen Van A",
    phone: "0123456789",
    email: "vana@mail.com"
  },
  {
    id: 2,
    name: "Nguyen Van B",
    phone: "0123456789",
    email: "vanb@mail.com"
  },
  {
    id: 3,
    name: "Nguyen Van C",
    phone: "0123456789",
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
  res.send('contact/create');
};

const postCreate = (req, res) => {
  res.send('contact/postCreate');
};

const edit = (req, res) => {
  res.send('contact/edit');
};

const postEdit = (req, res) => {
  res.send('contact/postEdit');
};

const deleteContact = (req, res) => {
  res.send('contact/delete');
};
module.exports = {
  index,
  create,
  postCreate,
  edit,
  postEdit,
  deleteContact
};