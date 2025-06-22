import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = (
    <span className="inline-block w-40 text-base text-[#e1dec7] uppercase m-0 p-2 rounded text-ellipsis text-center">
      {playerName}
    </span>
  );

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        className="font-inherit text-base w-40 border-none p-2 bg-[#46432f] text-center uppercase animate-pulse"
      />
    );
  }

  return (
    <li
      className={`flex items-center w-1/2 border-2 ${isActive
        ? 'border-yellow-300 animate-pulse text-yellow-300'
        : 'border-transparent'
        }`}
    >
      <span className="border-2 border-transparent p-2 rounded font-bold flex items-center">
        {editablePlayerName}
        <span className="ml-4 text-base text-[#e1dec7]">{symbol}</span>
      </span>
      <button
        onClick={handleEditClick}
        className="w-12 border-none bg-none text-[#c3ba78] text-sm cursor-pointer transition-colors duration-200 p-2 text-center hover:text-[#f8ca31]"
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}


