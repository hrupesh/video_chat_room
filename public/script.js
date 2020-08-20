const socket = io("/");
const myPeer = new myPeer(undefined, {
  host: "/",
  post: "3001",
});

socket.emit("join-room", ROOM_ID, 4);

socket.on("user-connected", (userId) => {
  console.log("Welcome  " + userId);
});
