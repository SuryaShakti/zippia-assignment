import React from "react";
import ReactMarkdown from "react-markdown";
import { Markup } from "react-render-markup";

const JobCard = ({ job }) => {
  return (
    <div className="w-full p-4 border space-y-1 shadow my-5">
      <div className="text-lg font-semibold text-[#333333[">{job.jobTitle}</div>
      <div className="text-sm text-[#333333] font-semibold">
        {job.companyName}
      </div>
      <div className="text-sm text-[#333333]">{job.location}</div>
      <div>
        Ex aliquip enim reprehenderit in minim culpa ipsum quis reprehenderit.
        Lorem consequat velit amet nulla adipisicing id dolore duis non
        pariatur. Esse culpa est reprehenderit officia. Est enim consequat
        eiusmod proident aliqua consequat id dolore sunt est sunt. Commodo
        proident esse labore adipisicing do sit proident. Ea ullamco in eu nisi
        duis do minim id consequat proident.
      </div>
      <div className="w-full flex justify-between items-center text-sm text-[#333333]">
        <div>{job.estimatedSalary}</div>
        <div>{job.postedDate}</div>
      </div>
      {/* <ReactMarkdown children={job.jobDescription} escapeHtml={false} /> */}
      {/* <Markup markup={job.jobDescription} /> */}

      {/* <div
        dangerouslySetInnerHTML={{ __html: job.jobDescription.slice(0, 200) }}
      /> */}
    </div>
  );
};

export default JobCard;
