import "./index.css";

const ChatItem = ({ imageLink, text }) => {
  return (
    <div className="chatitem" style={{ display: "flex" }}>
      <img
        style={{ width: 30, height: 30 }}
        className="chatitem-profile"
        src={imageLink}
      />
      <pre>{text}</pre>
    </div>
  );
};

export default ChatItem;
