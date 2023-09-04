//You can use metadata on any layout
export const metadata = {
  title: "My nextjs course - about",
};
const AboutLayout = ({ children }) => {
  return (
    <>
      <nav>Layout de about</nav>
      {children}
    </>
  );
};

export default AboutLayout;
