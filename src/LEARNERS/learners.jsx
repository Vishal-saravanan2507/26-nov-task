import "./learners.css";

const Learners = (props) => {
  console.log("The data:", props?.data?.title);

  return (
    <div className="learners_parent">
      <div className="learners_banner">
        <h1 className="learners_heading">{props?.data?.title}</h1>

        <p className="learners_subtitle">{props?.data?.subTitle}</p>
      </div>

      <div className="courses_parent">
        <h1 className="courses_heading">{props?.data?.courseTitle}</h1>

        <p className="courses_description">{props?.data?.courseDescription}</p>
      </div>
    </div>
  );
};

export default Learners;
