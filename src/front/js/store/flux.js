const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: [],
      array1: [
        "Matt Johnson",
        "Matt Johnson",
        "Bart Paden",
        "Ryan Doss",
        "Jared Malcolm",
      ],
      array2: [
        "Matt Johnson",
        "Bart Paden",
        "Bart Paden",
        "Jordan Heigle",
        "Jordan Heigle",
        "Tyler Viles",
      ],
    },
    actions: {
      submitForm: (contactInputData) => {
        fetch(process.env.BACKEND_URL + "/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: contactInputData.firstName,
            last_name: contactInputData.lastName,
            title: contactInputData.title,
            email: contactInputData.email,
            message: contactInputData.message,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },

      getData: () => {
        fetch(process.env.BACKEND_URL + "/api/home")
          .then((resp) => resp.json())
          .then((data) => setStore({ data: data.content }))
          .catch((error) =>
            console.error("Error loading message from backend", error)
          );
      },
    },
  };
};

export default getState;
