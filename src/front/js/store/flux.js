const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      submitForm: (first_name, last_name, title, email, message) => {
        console.log("body", first_name, last_name, title, email, message);
        fetch(process.env.BACKEND_URL + "/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            title: title,
            email: email,
            message: message,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },

      getData: () => {
        // fetching data from the backend
        // fetch(process.env.BACKEND_URL + "/api/home")
        const fetchData = async () => {
          try {
            const response = await fetch(process.env.BACKEND_URL + "/api/home");
            const data = await response.json();
            // console.log("data", data);
            setStore({ data: data.content });
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
