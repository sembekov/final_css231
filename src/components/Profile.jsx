import { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import "./ProfilePage.css";
import { useShoppingCart } from '../context/ShoppingContext';

const ProfilePage = () => {
  const { orderHistory } = useShoppingCart();
  const [name, setName] = useState("Nazarov Darkhan");
  const [email, setEmail] = useState("220103319@stu.sdu.edu.kz");
  const [avatar, setAvatar] = useState(
    ""
  ); 

  const fileInputRef = useRef(null); 

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click(); 
  };

  const handleUpdate = () => {
    alert("Profile updated!");
  };

  
  const handleDelete = () => {
    alert("Profile deleted!");
  
  };

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill out all fields.");
      return;
    }
    handleUpdate();
  };

  return (
    <div className="profile">
      <Sidebar />
      <div className="profile-container">
        <h1 className="profile-header">Profile</h1>
        <p className="profile-subtitle">Nice to meet you!</p>

        <div className="avatar-container" onClick={handleAvatarClick}>
          <img src={avatar} alt="Avatar" className="avatar" />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            ref={fileInputRef}
            style={{ display: "none" }} 
          />
        </div>

        <form className="profile-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <div htmlFor="name" className="form-label">
              Your Name
            </div>
            <input
              id="name"
              placeholder="Your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <div htmlFor="email" className="form-label">
              Your Email
            </div>
            <input
              id="email"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>

          <button className="update-button" type="submit">
            UPDATE
          </button>
          <button className="delete-button" type="button" onClick={handleDelete}>
            Delete
          </button>
        </form>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Order History</h2>
         {orderHistory.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orderHistory.map(order => (
            <div
              key={order.id}
              className="border-b py-4"
            >
              <p className="font-semibold">Order #{order.id}</p>
              <p>Date: {order.date}</p>
              <p>Total: ${order.total.toFixed(2)}</p>
              <p>Items: {order.items}</p>
              <div className="mt-2">
                <p className="font-medium">Products:</p>
                <ul className="ml-4">
                  {order.products.map(product => (
                    <li key={product.id}>
                      {product.name} x {product.quantity} - ${(product.price * product.quantity).toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
// import React, {useState, useMemo, useCallback, useContext} from "react";
// import { useShoppingCart } from '../context/ShoppingContext';

// const Profile = () => {
//   const { orderHistory } = useShoppingCart();
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com"
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">User Profile</h1>
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
        
//         <h2 className="text-2xl font-semibold mt-6 mb-4">Order History</h2>
//         {orderHistory.length === 0 ? (
//           <p>No orders yet</p>
//         ) : (
//           orderHistory.map(order => (
//             <div
//               key={order.id}
//               className="border-b py-4"
//             >
//               <p className="font-semibold">Order #{order.id}</p>
//               <p>Date: {order.date}</p>
//               <p>Total: ${order.total.toFixed(2)}</p>
//               <p>Items: {order.items}</p>
//               <div className="mt-2">
//                 <p className="font-medium">Products:</p>
//                 <ul className="ml-4">
//                   {order.products.map(product => (
//                     <li key={product.id}>
//                       {product.name} x {product.quantity} - ${(product.price * product.quantity).toFixed(2)}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;
