// Create the authentication middleware
const authenticateToken = (req, res, next) => {
    const token = req.headers['x-access-token']
    if (!token) {
      return res.status(401).json({ status: 'error', error: 'missing token' })
    }
  
    try {
      const decoded = jwt.verify(token, 'secret123')
      req.user = decoded
      next()
    } catch (error) {
      console.log(error)
      res.status(401).json({ status: 'error', error: 'invalid token' })
    }
  }