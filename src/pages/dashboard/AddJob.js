import { FormRow, Alert, FormRowSelect } from "../../components/index.js";
import { useAppContext } from "../../context/appContext.js";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(`${name}: ${value}`);
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !position || !jobLocation) {
      displayAlert();
      return;
    }

    if (isEditing) {
      editJob();
      return;
    }
    createJob();
    console.log("create job");
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit Job" : "Add Job"}</h3>
        {showAlert && <Alert />}
        {/* Position */}
        <div className="form-center">
          <FormRow
            name="position"
            value={position}
            handleChange={handleJobInput}
          />

          {/* company */}

          <FormRow
            name="company"
            value={company}
            handleChange={handleJobInput}
          />

          {/* location */}

          <FormRow
            labelText="Job Location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/* job status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* jobtype*/}
          <FormRowSelect
            name="jobType"
            labelText="Job Type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          {/* btn container */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
