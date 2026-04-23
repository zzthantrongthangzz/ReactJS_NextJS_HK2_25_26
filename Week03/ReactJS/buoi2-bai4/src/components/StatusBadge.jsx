import React from 'react';
import './StatusBadge.css';

export default function StatusBadge({ status }) {
  const badgeClass = `badge badge-${status}`;

  return (
    <div className={badgeClass}>
      {status}
    </div>
  );
}