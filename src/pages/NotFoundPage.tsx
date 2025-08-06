import React from 'react';
import Header from '../components/Header';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p className="mt-2 text-lg">Sorry, the page you are looking for does not exist.</p>
      </main>
    </div>
  );
};

export default NotFoundPage;