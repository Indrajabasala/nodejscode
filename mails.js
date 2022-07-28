var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "yopmail",
  auth: {
    user: "indhu@yopmail.com",
    pass: "indhu123",
  },
});

var options = {
  from: "indhu@yopmail.com",
  to: "test@yopmail.com",
  subject: "check mail",
  text: "hello everyone i am fine",
};

transporter.sendMail(options, (err, info) => {
  if (err) {
    console.log("err", err);
  } else {
    console.log("mail successfully send", info);
  }
});
