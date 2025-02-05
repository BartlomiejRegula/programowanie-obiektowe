import "./ButtonA.css"; // Możesz zmienić na ButtonB.css, jeśli jest oddzielny plik

// eslint-disable-next-line react/prop-types
export default function ButtonB({ onClick }) {
  return <button className="button-b" onClick={onClick}>NIE</button>;
}
