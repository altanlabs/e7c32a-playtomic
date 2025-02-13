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
      const region = Intl.DateTimeFormat().resolvedOptions().timeZone || 
                    navigator.language || 
                    'unknown';
                    
      await addRecord(
        { 
          email,
          region
        },
        (error) => {
          console.error('Failed to add to waitlist:', error);
          alert('No se pudo unir a la lista de espera. Por favor, inténtalo de nuevo.');
        }
      );
      setEmail('');
      alert('¡Te has unido a la lista de espera con éxito!');
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex w-full gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Introduce tu email"
          required
          className="flex-1 bg-white/90 text-black h-12 px-4"
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="bg-[#029455] hover:bg-[#029455]/90 text-white h-12 px-6"
        >
          {isSubmitting ? 'Uniendo...' : 'Unirse'}
        </Button>
      </form>
    </div>
  );
};