import express, { Request, Response } from 'express';
import cors from 'cors';
import { OAuth2Client } from 'google-auth-library';

const app = express();
const PORT = 3000;

// Your Google OAuth Client ID
const CLIENT_ID = '457846212442-5k20v7spou6fu0e9psi6ks1g5vd7a5og.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);
console.log(`hello world sannit`);

// Middleware
app.use(cors())
app.use(express.json());

// User interface
interface User {
  googleId: string;
  email: string;
  name: string;
  picture: string;
}

// In-memory user "database"
const users: User[] = [];

// Google Login API Endpoint
app.post('/api/auth/google', async (req: Request, res: Response):Promise<any> => {
  try {
    console.log('hi')
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ message: 'Token is required' });
    }

    // Verify token with Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });

    const payload = await ticket.getPayload();
    if (!payload) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const { sub, email, name, picture } = payload;
    console.log(sub)
    if (!sub || !email) {
      return res.status(400).json({ message: 'Invalid user data' });
    }

    // Check if user exists
    let user = users.find(u => u.googleId === sub);
    console.log(users)
    // If not, create new user
    if (!user) {
      user = {
        googleId: sub,
        email,
        name: name || '',
        picture: picture || '',
      };
      users.push(user);
    }
    console.log(users)

    // Normally, you’d create a JWT here to manage sessions

    res.json({
      message: 'Login successful',
      user
    });

  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

