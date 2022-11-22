import styled from "styled-components";

export const Main = styled.main`
background-color: var(--bg);
min-height: calc(100vh - 70px);
position: relative;
.goToTopComponent{
    position: fixed;
    bottom: 0;
    right: 0;
    margin-bottom: 20px;
    margin-right: 20px;
}
`