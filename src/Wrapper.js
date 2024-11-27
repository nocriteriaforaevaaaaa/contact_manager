const Wrapper = (props) => {
  return (
    <>
      <div className="container" style={{ color: "grey" }}>
        <h3> Conatct List:</h3>
        {props.children}
      </div>
    </>
  );
};

export default Wrapper;
// wrapper component is capital so that react knows it is a custom component
