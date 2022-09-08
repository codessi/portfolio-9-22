import React from "react";

import logoReact from "./../images/tech stack/react.svg";
import logoHtml from "./../images/tech stack/html.svg";
import logoCSS from "./../images/tech stack/css.svg";
import logosass from "./../images/tech stack/sass.svg";
import logoJavascript from "./../images/tech stack/javascript.svg";
import logoapi from "./../images/tech stack/api.svg";
import logofirebase from "./../images/tech stack/firebase.svg";
import logogit from "./../images/tech stack/git.svg";
import logovscode from "./../images/tech stack/vscode.svg";
import logocypress from "./../images/tech stack/cypress.svg";
import logoexpress from "./../images/tech stack/express.svg";
import logomongodb from "./../images/tech stack/mongodb.svg";
import logonodejs from "./../images/tech stack/node-js.svg";
import logofigma from "./../images/tech stack/figma.svg";
import logotailwind from "./../images/tech stack/tailwind.svg";

export default function techStack() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3>Teck Stack</h3>
      <ul className="flex  justify-start items-end flex-wrap gap-14 p-28">
        <li className="flex flex-col justify-center items-center gap-2 ">
          <img class="w-16" src={logoReact} alt="" />
          <p>REACT</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logoHtml} alt="" />
          <p>HTML</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logoCSS} alt="" />
          <p>CSS</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logosass} alt="" />
          <p>SASS</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logoJavascript} alt="" />
          <p>JAVASCRIPT</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logoapi} alt="" />
          <p>API</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logofirebase} alt="" />
          <p>FIREBASE</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logovscode} alt="" />
          <p>VS CODE</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logogit} alt="" />
          <p>GIT</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logocypress} alt="" />
          <p>CYPRESS</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logoexpress} alt="" />
          <p>EXPRESS</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logomongodb} alt="" />
          <p>MONGODB</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-center"><img class="w-16" src={logonodejs} alt="" /></div>
          <p>NODE JS</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logofigma} alt="" />
          <p>FIGMA</p>
        </li>
        <li className="flex flex-col justify-center items-center gap-2">
          <img class="w-16" src={logotailwind} alt="" />
          <p>TAILWIND</p>
        </li>
      </ul>
    </div>
  );
}
