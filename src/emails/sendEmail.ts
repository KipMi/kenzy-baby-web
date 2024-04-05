type FormType = {
  emailAddress: string;
  subject: string;
  body: string;
};

export function sendEmail(data: FormType) {
  const apiEndpoint = "api/contact-us";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
