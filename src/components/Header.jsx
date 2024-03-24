import "../App.css";
import netflix from "/public/netflix.png";
export default function Header() {
  return (
    <header>
      <div className="header">
        <img alt="netflix" src={netflix} />
      </div>
    </header>
  );
}
