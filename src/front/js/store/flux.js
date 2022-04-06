const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      data: {},
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

      getMessage: () => {
        // fetching data from the backend
        // fetch("http://127.0.0.1:5000/" + "/api/home")
        // async function getContent() {
        //   try {
        //     // let response = await fetch(process.env.BACKEND_URL + "/api/home");
        //     let response = await fetch("https://api.mwi.dev/content/home");
        //     let data = await response.json();
        //     // .then((data) => setStore({ message: data }))
        //     setStore({ message: data });
        //   } catch (error) {
        //     console.log("Error loading from backend", error);
        //   }
        //   // let data = await ((resp) => resp.json())
        //   // .then((data) => setStore({ message: data }))
        //   // // .then((data) => console.log("RESPONSE", data.content[0].content))
        //   // .catch((error) =>
        //   // console.log("Error loading message from backend", error)
        //   // );
        // }
        // getContent();
        const url = "http://127.0.0.1:5000/" + "/api/home";
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            //testing
            console.log("data", data[0]);
            setStore({ data: data[0] });
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
