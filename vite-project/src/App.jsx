import { useState } from "react";
import AddForm from "./components/AddForm";
import SearchBar from "./components/SearchBar";
import AddressTable from "./components/AddressTable";
import "./styles.css";

export default function App() {
    const [entries, setEntries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Додаємо новий запис
    const addEntry = (newEntry) => {
        setEntries((prev) => [...prev, { id: prev.length + 1, ...newEntry }]);
    };

    // Оновлення (редагування) запису
    const updateEntry = (id, updatedData) => {
        setEntries((prev) =>
            prev.map((e) => (e.id === id ? { ...e, ...updatedData } : e))
        );
    };

    // Пошук по полях
    const filteredEntries = entries.filter(
        (e) =>
            e.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            e.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            e.phone.includes(searchTerm)
    );

    return (
        <div className="container">
            <h1>📖 Address Book</h1>

            {/* Форма додавання */}
            <AddForm onAdd={addEntry} />

            {/* Пошук */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/* Таблиця */}
            <AddressTable data={filteredEntries} onUpdate={updateEntry} />
        </div>
    );
}
