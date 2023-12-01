import React, { useState, ChangeEvent, FormEvent } from "react";

interface ListItemProps {
  onAdd: (taskName: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ onAdd }) => {
  const [taskName, setTaskName] = useState<string>("");

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  };

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setTaskName(ev.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={handleInputChange}
        placeholder="Your next task..."
      />
    </form>
  );
};

export default ListItem;
