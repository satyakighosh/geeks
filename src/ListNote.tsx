import { useState } from "react";

export default function ListNote() {
    const [notes, setNotes] = useState<string[]>([]);
    const [currentNote, setCurrentNote] = useState<string>('');
    const updateNotes = () => {
        setNotes([...notes, currentNote])
    }
    const deleteNote = (index: number) => {
        const clone = [...notes];
        setNotes(clone.filter((_x, i) => i !== index))
    }
    const renderListItem = (value: string, index: number) => {
        return (
            <li key={index}>
                <div>{value}</div>
                <button onClick={() => deleteNote(index)}>delete</button>
            </li>
        )
    }
    return (
        <>
            <input type="text" onChange={(e) => setCurrentNote(e.target.value)} />
            <button onClick={updateNotes}>add note</button>
            <ul>
                {notes.map(renderListItem)}
            </ul>
        </>
    )
}