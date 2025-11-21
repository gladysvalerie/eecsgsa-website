import ProfileCard from "../../components/ProfileCard";

export default function DeckOfCards({ members = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
      {members.map((member, index) => (
        <div className="pc-card-wrapper" key={index}>
          <ProfileCard
            name={member.name}
            title={member.title}
            handle={member.handle}
            status={member.status}
            avatarUrl={member.avatarUrl}
            showUserInfo={true}
            enableTilt={true}
          />
        </div>
      ))}
    </div>
  );
}
