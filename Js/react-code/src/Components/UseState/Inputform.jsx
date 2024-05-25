import { useState } from "react";

const Inputform = () => {
  const [form, setform] = useState({
    firstname: "Abdul",
    lastname: "Aziz",
    email: "az@gmail.com",
    location: {
      country: "Bangladesh",
      city: "Rajshahi",
    },
  });

  return (
    <div>
      <label htmlFor="">First name</label>
      <input
        value={form.firstname}
        type="text"
        onChange={(e) => setform({ ...form, firstname: e.target.value })}
      />
      <label htmlFor="">Lastname name</label>
      <input
        value={form.lastname}
        type="text"
        onChange={(e) => setform({ ...form, lastname: e.target.value })}
      />
      <label htmlFor="">email</label>
      <input
        value={form.email}
        type="text"
        onChange={(e) => setform({ ...form, email: e.target.value })}
      />
      <div>
        <label htmlFor="">Country</label>
        <input
          value={form.location.country}
          type="text"
          onChange={(e) =>
            setform({
              ...form,
              location: { ...form.location, country: e.target.value },
            })
          }
        />
      </div>
      <div>
        <label htmlFor="">City</label>
        <input
          value={form.location.city}
          type="text"
          onChange={(e) =>
            setform({
              ...form,
              location: { ...form.location, city: e.target.value },
            })
          }
        />
      </div>
      <p>Your firstname:{form.firstname}</p>
      <p>Your Last name:{form.lastname}</p>
      <p>your email:{form.email}</p>
      <div>
        {form.location.country}
        {form.location.city}
      </div>
    </div>
  );
};

export default Inputform;
