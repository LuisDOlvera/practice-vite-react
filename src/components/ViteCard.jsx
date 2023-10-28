export default function viteCard(props) {
  console.log("props: ", props);
  return (
    <article className="info">
      <p>
        <div className="emoji-container">
          <span className="emoji">{props.emoji}</span>
        </div>
      </p>
      <h2>{`${props.title}`}</h2>
      <p>{`${props.description}`}</p>
    </article>
  );
}
