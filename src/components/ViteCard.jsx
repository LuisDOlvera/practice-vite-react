export default function viteCard(props) {
  console.log("props: ", props);
  return (
    <article className="info">
      💡
      <h2>{`${props.title}`}</h2>
      <p>{`${props.description}`}</p>
    </article>
  );
}
