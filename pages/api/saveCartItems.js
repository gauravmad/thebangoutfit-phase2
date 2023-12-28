import { client } from "../../lib/client";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const identifier = req.body.identifier;

  const { cartItems } = req.body;

  try {
    const query = `*[_type == 'userdetails' && emailid == $identifier][0]`;
    const currentUserDetails = await client.fetch(query, { identifier });

    if (currentUserDetails) {
      
      await client
        .patch(currentUserDetails._id)
        .set({ cartItems }) 
        .commit();

      res.status(200).json({ message: 'Cart items updated successfully for the user.' });
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    console.error('Error updating cart items:', error);
    res.status(500).json({ error: 'Error updating cart items.' });
  }
}
