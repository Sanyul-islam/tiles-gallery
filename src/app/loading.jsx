import React from 'react';

const loadingPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
};

export default loadingPage;