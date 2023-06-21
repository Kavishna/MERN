import "./Status.css";

const Status = ({ status }) => {
  const text = status;

  return (
    <div
      className="status"
      style={{ backgroundColor: status === "error" ? "#ff9090" : "#9dff90" }}
    >
      <p>{status === "error" ? "Something Went Wrong" : "Ad Published"}</p>
    </div>
  );
};

export default Status;
