import { Router } from "express";
import { signIn, signOut, signUp } from "../../controllers/user.controller.js";
import { upload } from "../../middlewares/multer.middleware.js";
import { verifyJWT } from "../../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  signUp
);

router.route("/signin").post(signIn);

// secured routes
router.route("/signout").post(verifyJWT, signOut);

export default router;
