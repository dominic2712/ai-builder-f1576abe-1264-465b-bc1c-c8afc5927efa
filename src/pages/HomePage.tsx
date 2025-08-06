import React from 'react';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Welcome to the Future!</h1>
        <p className="mt-2 text-lg">Explore how AI is shaping the future.</p>
      </main>
    </div>
  );
};

export default HomePage;