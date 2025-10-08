import { useState } from "react";

export default function AddressTable({ data, onUpdate }) {
    const [editingId, setEditingId] = useState(null);
    const [editValues, setEditValues] = useState({});

    const handleEdit = (entry) => {
        setEditingId(entry.id);
        setEditValues({ ...entry });
    };

    const handleSave = () => {
        if (!editValues.firstName || !editValues.lastName || !editValues.phone) {
            alert("Fields cannot be empty!");
            return;
        }
        onUpdate(editingId, editValues);
        setEditingId(null);
    };

    // Якщо даних немає
    if (data.length === 0) {
        return <p className="no-data">No data to display.</p>;
    }

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map((entry) => (
                    <tr key={entry.id}>
                        <td>{entry.id}</td>
                        <td>
                            {editingId === entry.id ? (
                                <input
                                    value={editValues.firstName}
                                    onChange={(e) =>
                                        setEditValues({ ...editValues, firstName: e.target.value })
                                    }
                                />
                            ) : (
                                entry.firstName
                            )}
                        </td>
                        <td>
                            {editingId === entry.id ? (
                                <input
                                    value={editValues.lastName}
                                    onChange={(e) =>
                                        setEditValues({ ...editValues, lastName: e.target.value })
                                    }
                                />
                            ) : (
                                entry.lastName
                            )}
                        </td>
                        <td>
                            {editingId === entry.id ? (
                                <input
                                    value={editValues.phone}
                                    onChange={(e) =>
                                        setEditValues({ ...editValues, phone: e.target.value })
                                    }
                                />
                            ) : (
                                entry.phone
                            )}
                        </td>
                        <td>
                            {editingId === entry.id ? (
                                <button onClick={handleSave}>💾 Save</button>
                            ) : (
                                <button onClick={() => handleEdit(entry)}>✏️ Edit</button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
