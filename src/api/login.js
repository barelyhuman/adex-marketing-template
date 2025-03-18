import crypto from 'crypto'
import { db } from '../lib/db'
import argon from 'argon2'
import { serialize } from 'cookie'

/**
 *
 * @param {import("adex/http").IncomingMessage} req
 * @param {import("adex/http").ServerResponse} res
 * @returns
 */
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.end('Method Not Allowed')
    return
  }

  const body = await req.parseBodyJSON()

  const { email, password } = body

  if (!email || !password) {
    res.statusCode = 400
    res.json({ error: 'Missing email or password' })
    return
  }

  try {
    // Lookup the user in the "user" table by email
    const user = await db('users').where({ email }).first()
    if (!user) {
      res.statusCode = 401
      res.json({ error: 'Invalid credentials' })
      return
    }

    // In production use bcrypt or another proper method to check password hashes.
    if (!(await argon.verify(user.password, password))) {
      res.statusCode = 401
      res.json({ error: 'Invalid credentials' })
      return
    }

    // Generate a unique auth token
    const token = crypto.randomBytes(32).toString('hex')

    // Insert the token into the "tokens" table with a reference to the user
    await db('tokens').insert({
      user_id: user.id,
      token,
      created_at: new Date(),
    })

    const cookieStr = serialize('auth', token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    })

    res.setHeader('Set-Cookie', cookieStr)
    res.statusCode = 200
    res.json({ token })
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    res.json({ error: 'Server error' })
  }
}

export default handler
