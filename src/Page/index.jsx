import React, { useRef, useState } from "react";
import { Btn, Container, TextInput, Wrapper, ContainerHash } from "./style";
import { sha1 } from "js-sha1";
import { sha224, sha256 } from "js-sha256";
import { sha384, sha512, sha512_224, sha512_256 } from "js-sha512";

export const HomePage = () => {
  const [tabindex, settabindex] = useState(0);

  const ref = useRef(null);

  return (
    <Container>
      <h1>SHA hash function algorithms</h1>
      <TextInput
        ref={ref}
        id="message"
        name="message"
        rows={10}
        placeholder="Enter the message..."
      />

      <Wrapper>
        <Btn onClick={() => settabindex(1)}>SHA-1</Btn>
        <Btn onClick={() => settabindex(2)}>SHA-224</Btn>
        <Btn onClick={() => settabindex(3)}>SHA-256</Btn>
        <Btn onClick={() => settabindex(4)}>SHA-384</Btn>
        <Btn onClick={() => settabindex(5)}>SHA-512</Btn>
        <Btn onClick={() => settabindex(6)}>SHA-512_224</Btn>
        <Btn onClick={() => settabindex(7)}>SHA-512_256</Btn>
      </Wrapper>
      {tabindex === 1 && (
        <ContainerHash>
          <h3>SHA-1 hash value</h3>
          {sha1(ref.current.value).toUpperCase()}
        </ContainerHash>
      )}
      {tabindex === 2 && (
        <ContainerHash>
          <h3>SHA-224 hash value</h3>
          {sha224(ref.current.value).toUpperCase()}
        </ContainerHash>
      )}
      {tabindex === 3 && (
        <ContainerHash>
          <h3>SHA-256 hash value</h3>
          {sha256(ref.current.value).toUpperCase()}
        </ContainerHash>
      )}
      {tabindex === 4 && (
        <ContainerHash>
          <h3>SHA-384 hash value</h3>
          {sha384(ref.current.value).toUpperCase()}
        </ContainerHash>
      )}
      {tabindex === 5 && (
        <ContainerHash>
          <h3>SHA-512 hash value</h3>
          {sha512(ref.current.value).toUpperCase()}
        </ContainerHash>
      )}
      {tabindex === 6 && (
        <ContainerHash>
          <h3>SHA-512_224 hash value</h3>
          {sha512_224(ref.current.value).toUpperCase()}
        </ContainerHash>
      )}
      {tabindex === 7 && (
        <ContainerHash>
          <h3>SHA-512_256 hash value</h3>
          {sha512_256(ref.current.value).toUpperCase()}
        </ContainerHash>
      )}
    </Container>
  );
};

export default HomePage;
