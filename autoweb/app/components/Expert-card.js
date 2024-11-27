export default function ExpertCard({ icon, title, description }) {
  return (
    <div className="expert-card">
      <div className="expert-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
