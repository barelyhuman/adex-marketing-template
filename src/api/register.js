import argon2 from 'argon2'
import { db } from '../lib/db'
import { generateCryptoRandomToken } from '../lib/token'

/**
 * @param {import("adex/http").IncomingMessage}
 * @param {import("adex/http").ServerResponse}
 */
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed')
    return
  }

  const body = await req.parseBodyJSON()

  const { email, password } = body
  if (!email || !password) {
    res.status(400).json({ error: 'Missing email or password' })
    return
  }

  try {
    const existingUser = await db('users').where({ email }).first()
    if (existingUser) {
      res.status(409).json({ error: 'User already exists' })
      return
    }

    const hashedPassword = await argon2.hash(password)

    const [user] = await db('users')
      .insert({
        email,
        password: hashedPassword,
        created_at: new Date(),
      })
      .returning('*')

    const { token, tokenHash } = generateCryptoRandomToken()

    await db('tokens').insert({
      user_id: user.id,
      token,
      hash: tokenHash,
    })

    res.statusCode = 201
    return res.json({ token })
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    return res.json({ error: 'Server error' })
  }
}

export default handler
