import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";

const Job = ({
  _id,
  position,
  jobLocation,
  jobType,
  company,
  createdAt,
  status,
}) => {
  const { setEditJob, deleteJob } = useAppContext();

  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo text={jobLocation} icon={FaLocationArrow} />
          <JobInfo text={date} icon={FaCalendarAlt} />
          <JobInfo text={jobType} icon={FaBriefcase} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              className="btn edit-btn"
              to="/add-job"
              onClick={() => setEditJob(_id)}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteJob(_id)}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
