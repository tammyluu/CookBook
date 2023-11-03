import 'dotenv/config'

export function authMiddleware(req, res, next) {

    // Récupération du de l'authentication dans l'entête de la requête HTTP
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [email, password] = Buffer.from(b64auth, 'base64').toString().split(':');
  
    // Vérifier le password et l'email
    if (email && password && email === process.env.LOGIN && password === process.env.PASSWORD) {
      return next();
    }

    return res.sendStatus(401);
}