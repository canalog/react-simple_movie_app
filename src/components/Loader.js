import styled from "styled-components";

const Loading = styled.h1`
  color: white;
  width: 100%;
  height: 65vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return <Loading>Loading...</Loading>;
};

export default Loader;
