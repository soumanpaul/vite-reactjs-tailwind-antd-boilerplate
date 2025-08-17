import { Card } from "antd";
import "./ProfileCard.less";

export function ProfileCard() {
  return (
    <div className="profile-card-container">
      <Card
        className="profile-card"
        title={<span className="title">Jane</span>}
      >
        <p className="subtitle loader">Staff Engineer</p>
        <p className="description loader">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Card>
    </div>
  );
}
export default ProfileCard;
