const { default: Link } = require("next/link");

const NotFound = () => {
  return (
    <section>
      <h1>404 Not found</h1>
      <Link href={"/"}>GO to home</Link>
    </section>
  );
};

export default NotFound;
