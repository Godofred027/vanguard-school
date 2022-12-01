import User from "../models/User";

export const signin = async (req, res) => {
  try {
    const userFound = await User.findOne({
      email: req.body.email,
    }).populate("roles");
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
