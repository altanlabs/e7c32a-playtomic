import { bookingService } from '@/services/bookingService';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    const { clubId, reason } = req.body;

    if (!id || !clubId) {
      return res.status(400).json({ message: 'Missing required parameters' });
    }

    const booking = await bookingService.rejectBooking(id, clubId, reason);
    res.status(200).json(booking);
  } catch (error: any) {
    console.error('Error rejecting booking:', error);
    res.status(500).json({ message: error.message || 'Failed to reject booking' });
  }
}