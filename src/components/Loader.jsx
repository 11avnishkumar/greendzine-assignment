import React from "react";
import Container from "./Container";
const Loader = () => {
  return (
    <Container isFullHeight={true}>
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-3xl font-bold text-center">One Moment Please...</p>
      </div>
    </Container>
  );
};

export default Loader;
