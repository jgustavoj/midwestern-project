import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Title"
        {...register("Title", { required: true })}
      />
      <input
        type="email"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="text"
        placeholder="Message"
        {...register("Message", { required: true })}
      />

      <input type="submit" />
    </form>
  );
}

// import React from "react";

// export const InputField = (props) => {
//   return (
//     <>
//       <form>
//         <div className="row">
//           <div className="form-group col-md-6">
//             <input
//               onChange={props.handleChange}
//               name="first_name"
//               type="text"
//               className="form-control"
//               placeholder="First Name"
//               value={props.firstName}
//               autoFocus
//             />
//           </div>
//           <div className="form-group col-md-6">
//             <input
//               onChange={props.handleChange}
//               type="text"
//               className="form-control"
//               placeholder="Last Name"
//               value={props.lastName}
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="form-group col-md-6">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Title"
//               onChange={props.handleChange}
//               value={props.title}
//             />
//           </div>
//           <div className="form-group col-md-6">
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Email"
//               onChange={props.handleChange}
//               value={props.email}
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="form-group col-md-12">
//             <textarea
//               onChange={props.handleChange}
//               className="form-control"
//               rows="8"
//               placeholder="Message"
//               value={props.message}></textarea>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };
