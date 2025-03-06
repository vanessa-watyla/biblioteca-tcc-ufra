import React from "react";
import styled from "styled-components";

const Container = styled.div``
const NavClass = styled.nav``
const Content = styled.div``
const Text = styled.a`
`


export function NavBarLogin() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <img src="src\pages\images\logo-ufra.png" width={80} className="ms-5"/>
        <div className="vr me-4 ms-4"></div>
        <a className="navbar-brand" href="/">UNIVERSIDADE FEDERAL RURAL DA AMAZÔNIA</a>

    </nav>
    );
}
