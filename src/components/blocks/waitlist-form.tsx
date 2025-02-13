import React, { useState } from 'react';
import { useDatabase } from '@altanlabs/database';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const WaitlistForm = () => {
  const [name, setName] = useState('');
  const { addRecord, isLoading, error } = useDatabase('waitlist');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addRecord({ name });
      setName('');
      alert('You have been added to the waitlist!');
    } catch (err) {
      console.error('Failed to add to waitlist:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
        className="p-2 border rounded"
      />
      <Button type="submit" disabled={isLoading} className="bg-blue-500 text-white p-2 rounded">
        {isLoading ? 'Adding...' : 'Join Waitlist'}
      </Button>
      {error && <p className="text-red-500">Error: {error}</p>}
    </form>
  );
};
