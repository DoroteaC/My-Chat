const Messages = (props) => {
  const room = props.drone.subscribe("general");

  room.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
    // Connected to room
  });

  room.on("message", (message) => {
    console.log(message)
  });
};

export default Messages;
