const socket = io("/");

socket.emit("join-room", ROOM_ID, 4);

socket.on("user-connected", (userId) => {
  console.log("Welcome  "+userId);
});
