import React from "react";
import "./apptitude.css";

const Apptitude = (props) => {
  console.log("The data:", props?.data?.title);

  return (
    <div className="agh_parent">
      <div className="agh_content">
        <h1 className="agh_heading">{props?.data?.title}</h1>

        <div className="agh_tagline">
          {props?.data?.tagline}
          <br />
          <span>{props?.data?.highlight}</span>
        </div>

        <div className="agh_description">
          {props?.data?.description}{" "}
          {props?.data?.platforms?.map((platform, index) => (
            <React.Fragment key={index}>
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="agh_platform"
              >
                {platform.name}
              </a>
              {index !== props?.data?.platforms?.length - 1 && ", "}
            </React.Fragment>
          ))}
          , and more.
        </div>

        <div className="agh_buttons">
          <a href={props?.data?.startLink} className="agh_start_button">
            {props?.data?.startButton}
          </a>

          <a href={props?.data?.demoLink} className="agh_demo_button">
            {props?.data?.demoButton}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Apptitude;
