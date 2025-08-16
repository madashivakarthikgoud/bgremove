import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' })
    }

    const token = authHeader.split(' ')[1]
    const token_decode = jwt.decode(token)

    if (!token_decode?.clerkId) {
      return res.status(401).json({ success: false, message: 'Invalid token' })
    }

    req.clerkId = token_decode.clerkId
    next()

  } catch (error) {
    console.log(error.message)
    res.status(401).json({ success: false, message: error.message })
  }
}

export default authUser
