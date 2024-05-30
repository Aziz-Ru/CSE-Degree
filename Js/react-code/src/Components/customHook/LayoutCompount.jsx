import useWindow from "./useWindow";

const LayoutCompount = () => {
  const onSmallScreen = useWindow(840);
  return (
    <div>
      <h1>LayoutCompoun</h1>
      <h3>You Are Using {onSmallScreen ? "Large" : "Small"} Device</h3>
    </div>
  );
};

export default LayoutCompount;
