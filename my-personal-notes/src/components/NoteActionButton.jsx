import React from 'react';

function NoteActionButton({ variant, onClick, children, dataTestId }) {
  return (
    <button
      type="button"
      className={`note-item__${variant}-button`}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
}

export default NoteActionButton;