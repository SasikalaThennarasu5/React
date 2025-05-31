import React, { useState } from 'react';

const Task3 = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.phone || !/^\d{10}$/.test(form.phone)) newErrors.phone = 'Phone must be 10 digits';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length === 0) {
      alert('Form submitted!');
      setForm({ name: '', email: '', phone: '' });
    } else {
      setErrors(validation);
    }
  };

  return (
    <div className="task">
      <h2>Task3: Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <span>{errors.name}</span>}

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <span>{errors.email}</span>}

        <input
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <span>{errors.phone}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Task3;
