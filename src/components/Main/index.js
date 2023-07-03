import "./index.css";
import { profileImageLink, ChatGPTResponse } from "../../fixtures";
import ChatItem from "../ChatItem";

const Main = () => {
  return (
    <div className="main">
      <ChatItem imageLink={profileImageLink} text="코딩 잘하는 법" />
      <ChatItem imageLink="/images/chatgpt.png" text={ChatGPTResponse} />
    </div>
  );
};

export default Main;
