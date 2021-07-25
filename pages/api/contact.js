const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const message = `
  Name: ${req.body.name}\r\n
  Email: ${req.body.email}\r\n
  Message: ${req.body.message}
`;

  const data = {
    to: process.env.RECEIVER,
    from: process.env.SENDER,
    subject: `New message from ${req.body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail.send(data);

  res.status(200).json({ status: "OK" });
}
