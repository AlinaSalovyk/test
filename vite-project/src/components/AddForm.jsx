import { useState } from "react";

export default function AddForm({ onAdd }) {
    const [form, setForm] = useState({ firstName: "", lastName: "", phone: "" });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.firstName.trim()) newErrors.firstName = "The first name is required";
        if (!form.lastName.trim()) newErrors.lastName = "The last name is required";
        if (!form.phone.trim()) newErrors.phone = "The phone is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onAdd(form);
            setForm({ firstName: "", lastName: "", phone: "" });
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}

            <input
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}

            <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <button type="submit">Add</button>
        </form>
    );
}
