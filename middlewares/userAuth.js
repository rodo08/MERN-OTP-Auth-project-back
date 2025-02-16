import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies; //obtener token de cookies

  if (!token) {
    return res.json({
      success: false,
      message: "Not authorized. Please log in.",
    });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET); //verificar token
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res.json({
        success: false,
        message: "Not authorized. Please log in.",
      });
    }

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export default userAuth;
