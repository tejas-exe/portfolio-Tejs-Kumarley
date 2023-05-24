import Logng from "../../Assets/fast-loading.svg";
const Loding = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        alignContent: "center",
        justifyContent:"center",
        width:"100%",
        width:"20%"
      }}
    >
      <img src={Logng} alt="Loding..."/>
      {/* <p>loading please wait...</p> */}
    </div>
  );
};
export default Loding;
