import React from 'react';
import Header from '../components/Header';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">About AI & Future</h1>
        <p className="mt-2 text-lg">Learn more about our mission to explore AI technologies.</p>
      </main>
    </div>
  );
};

export default AboutPage;