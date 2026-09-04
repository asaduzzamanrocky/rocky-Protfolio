import React from 'react';

export const LoadingScreen: React.FC = () => (
  <div className="loading-screen" role="status" aria-label="Loading portfolio">
    <div className="loading-wrapper" aria-hidden="true">
      <span className="loading-circle" />
      <span className="loading-circle" />
      <span className="loading-circle" />
      <span className="loading-shadow" />
      <span className="loading-shadow" />
      <span className="loading-shadow" />
    </div>
    <span className="loading-label">Loading portfolio</span>
  </div>
);
