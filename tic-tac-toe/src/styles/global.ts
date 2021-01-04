import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }
  
  ol,
  ul {
    padding-left: 30px;
  }
  
  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }
  
  .status {
    margin-bottom: 10px;
  }
  
  .square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
  }
  
  .square:focus {
    outline: none;
  }
  
  .kbd-navigation .square:focus {
    background: #ddd;
  }
  
  .game {
    display: flex;
    flex-direction: row;
  }
  
  .game-info {
    margin-left: 20px;
  }

  .main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
    padding-bottom: 10px;
  }

  .sub-title {
    color: #6A5ACD
  }

  .footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .footer img {
    margin-left: 0.5rem;
  }
  
  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;