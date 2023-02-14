import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../../../components/Heading";
import JobCard from "../../../components/JobCard";
import moment from "moment";

const Jobs = ({ jobs, isLoading }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");

  // setting states from the response we got
  useEffect(() => {
    setData(jobs.jobs);
    setFilteredData(jobs.jobs);
    console.log(data);
  }, [jobs.jobs]);

  // filtering data of past 7 days
  const pastSevenDays = () => {
    setFilteredData(
      data.filter((job, index) => {
        return moment().diff(moment(job.postingDate), "days") < 8;
      })
    );
  };

  // setting to all data
  const AllJobs = () => {
    setFilteredData(data);
  };

  // filtering data according to input text
  const changeHandler = (e) => {
    setFilteredData(data.filter((job, index) => job.companyName.includes(e)));
  };

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* Page Heading Component */}
      <div className="my-10">
        <Heading title="DEVELOPER JOBS NEAR ME - 1,093 JOBS" />
      </div>

      {/* filter Buttons  */}
      <div className="flex flex-col w-full md:flex-row space-y-2 md:space-y-0 md:space-x-3">
        <button
          className=" bg-indigo-600 text-white text-sm py-1 px-4 rounded-lg hover:bg-indigo-500 shadow-xl"
          onClick={() => AllJobs()}
        >
          All Jobs
        </button>
        <button
          className="bg-indigo-600 text-white text-sm py-1 px-4 rounded-lg hover:bg-indigo-500 shadow-xl"
          onClick={() => pastSevenDays()}
        >
          Pasts 7 days
        </button>
        <div className="space-y-2">
          <div>
            <input
              type="text"
              placeholder="Enter Company Name"
              className="w-full md:w-56 py-1 md:py-2 px-3 border border-indigo-600 rounded-lg"
              // value={company}
              onChange={(e) => changeHandler(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* displaying Job Cards in JObCard component */}
      <ul>
        {filteredData?.map((job) => (
          <JobCard key={job.jobId} job={job} />
        ))}
      </ul>
    </div>
  );
};

// Fetching data using server side rendering (SSR)
export async function getServerSideProps() {
  // Fetch data from given API
  // Fetching only 10 job posts as mentioned in the assignment
  var data = JSON.stringify({
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: "Business Analyst",
    locations: [],
    numJobs: 10,
    previousListingHashes: [],
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://www.zippia.com/api/jobs/",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const jobs = await axios(config)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return { props: { jobs, isLoading: false } };
}

export default Jobs;
