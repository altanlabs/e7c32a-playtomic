import { useState } from 'react';
import { useDatabase } from '@altanlabs/database';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addRecord } = useDatabase('waitlist', { autoFetch: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await addRecord(
        { 
          email,
          region: 'auto' // We'll handle this server-side
        },
        (error) => {
          console.error('Failed to add to waitlist:', error);
          alert('Failed to join waitlist. Please try again.');
        }
      );
      setEmail('');
      alert('Successfully joined the waitlist!');
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 bg-white/90 text-black"
        disabled={isSubmitting}
      />
      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="bg-[#029455] hover:bg-[#029455]/90 text-white whitespace-nowrap"
      >
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
      </Button>
    </form>
  );
};