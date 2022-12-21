import styled from "styled-components";

const SignatureContainer = styled.div`
  margin: 4px;
  text-align: left;
  vertical-align: top;
  width: 200px;
`;

const PostSignature = (props) => {
    const {askedData} = props;

    return (
        <SignatureContainer>
            <span>{askedData}</span>
        </SignatureContainer>
    )
};

export default PostSignature;