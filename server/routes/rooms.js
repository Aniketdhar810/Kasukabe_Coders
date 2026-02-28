const router = require("express").Router();
const passport = require("passport");
const roomController = require("../controllers/roomController");

const requireAuth = passport.authenticate("jwt", { session: false });

router.post("/", requireAuth, roomController.createRoom);
router.get("/mine", requireAuth, roomController.listMyRooms);
router.get("/:roomId", requireAuth, roomController.getRoomById);
router.post("/join", requireAuth, roomController.joinRoomByCode);
router.post("/:roomId/leave", requireAuth, roomController.leaveRoom);

module.exports = router;
