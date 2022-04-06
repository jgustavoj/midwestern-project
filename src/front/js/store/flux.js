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

      getData: () => {
        // fetching data from the backend
        // fetch(process.env.BACKEND_URL + "/api/home")
        // fetch("http://127.0.0.1:5000/" + "/api/home")
        // .then(resp => resp.json())
        // 	.then(data => setStore({ data: data.content }))
        // 	.catch(error => console.log("Error loading message from backend", error))

        const url = "http://127.0.0.1:5000/" + "/api/home";
        const fetchData = async () => {
          try {
            const response = await fetch(url);
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
