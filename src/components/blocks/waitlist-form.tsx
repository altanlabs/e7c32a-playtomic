import { useState } from 'react';
import { useDatabase } from '@altanlabs/database';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export const WaitlistForm = () => {
  const [name, setName] = useState('');
  const { addRecord, isLoading, error } = useDatabase('waitlist');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await addRecord(
        { name },
        (error) => {
          console.error('Failed to add to waitlist:', error);
          alert('Failed to join waitlist. Please try again.');
        }
      );
      setName('');
      alert('Successfully joined the waitlist!');
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
        className="flex-1 bg-white/90 text-black"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        disabled={isLoading} 
        className="bg-[#029455] hover:bg-[#029455]/90 text-white"
      >
        {isLoading ? 'Joining...' : 'Join Waitlist'}
      </Button>
      {error && (
        <p className="text-red-500 text-sm mt-2">
          Error: {error}
        </p>
      )}
    </form>
  );
};