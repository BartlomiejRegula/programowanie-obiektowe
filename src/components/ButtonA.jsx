import "./ButtonA.css";

export default function ButtonA({ fontSize, onClick }) {
  return (
    <button className="button-a" style={{ fontSize: `${fontSize}px` }} onClick={onClick}>
      TAK
    </button>
  );
}
