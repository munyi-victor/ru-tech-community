import Mailgun from "mailgun-js";

const mailgun = new Mailgun({
  apiKey: "f40aca5fa23d51d1f60502c811631e50",
  domain: "sandbox279fe78076d14f55ad8c9ade80b70299.mailgun.org",
});

export const sendRegistrationEmail = (email: any, firstName: string) => {
  const data = {
    from: "your_email@your_domain.com",
    to: email,
    subject: "Welcome to Rongo University Tech Community",
    text: `Hi ${firstName}, 
    We're excited to welcome you to the Rongo University Tech Community!

As a member, you'll have access to:

Networking opportunities: Connect with other developers, share knowledge, and learn from experts.
Workshops and events: Attend workshops and events on various programming topics.
Projects and collaborations: Work on exciting projects with fellow club members.
Mentorship: Receive guidance and support from experienced developers.
We're committed to providing a supportive and inclusive environment for all developers. We look forward to seeing you at our upcoming events and participating in our community.

Best regards,

The Rongo University Tech Community Team.`,
  };

  return new Promise((resolve, reject) => {
    mailgun.messages().send(data, (error, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};
