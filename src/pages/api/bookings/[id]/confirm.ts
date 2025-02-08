import { bookingService } from '@/services/bookingService';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    const { clubId } = req.body;

    if (!id || !clubId) {
      return res.status(400).json({ message: 'Missing required parameters' });
    }

    const booking = await bookingService.confirmBooking(id, clubId);
    res.status(200).json(booking);
  } catch (error: any) {
    console.error('Error confirming booking:', error);
    res.status(500).json({ message: error.message || 'Failed to confirm booking' });
  }
}