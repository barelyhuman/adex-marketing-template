import crc32 from 'crc-32'
import { createHash, randomBytes } from 'crypto'

export function generateCryptoRandomToken(
  bytes = 32,
  prefix = 'oat_'
): { token: string; tokenHash: string } {
  const randomPart = randomBytes(bytes)
  const crc = crc32.buf(randomPart) >>> 0 // Ensure unsigned value
  const crcBuffer = Buffer.alloc(4)
  crcBuffer.writeUInt32BE(crc, 0)
  const tokenBuffer = Buffer.concat([randomPart, crcBuffer])
  const tokenBase64 = tokenBuffer.toString('base64')
  const token = prefix + tokenBase64
  const tokenHash = createHash('sha256').update(token).digest('hex')
  return { token, tokenHash }
}

export function verifyCryptoRandomToken(
  token: string,
  expectedTokenHash: string,
  prefix = 'oat_'
): boolean {
  const actualHash = createHash('sha256').update(token).digest('hex')
  if (actualHash !== expectedTokenHash) {
    return false
  }
  if (!token.startsWith(prefix)) {
    return false
  }
  const tokenBase64 = token.slice(prefix.length)
  const tokenBuffer = Buffer.from(tokenBase64, 'base64')
  if (tokenBuffer.length < 4) {
    return false
  }
  const dataPart = tokenBuffer.subarray(0, tokenBuffer.length - 4)
  const crcPart = tokenBuffer.readUInt32BE(tokenBuffer.length - 4)
  const computedCRC = crc32.buf(dataPart) >>> 0 // Ensure unsigned value
  return crcPart === computedCRC
}
