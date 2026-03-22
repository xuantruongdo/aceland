import { JOB_POSITIONS } from "@/constants";
import { JobPosition } from "@/types";

function JobCard({ job }: { job: JobPosition }) {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: "Hình thức làm việc", value: job.workType },
    { label: "Số lượng", value: job.quantity },
    { label: "Mức lương", value: job.salary },
    { label: "Địa điểm làm việc", value: job.location },
    { label: "Thời hạn ứng tuyển", value: job.deadline },
    { label: "Liên hệ", value: job.contact },
    {
      label: "Email",
      value: (
        <a
          href={`mailto:${job.email}`}
          className="text-blue-600 hover:underline"
        >
          {job.email}
        </a>
      ),
    },
  ];

  return (
    <div className="border border-gray-200 p-7 space-y-4">
      <h3 className="font-crimson text-base font-bold text-gray-800 pb-4 border-b border-gray-200">
        {job.title}
      </h3>

      <div className="space-y-2">
        {rows.map(({ label, value }) => (
          <p key={label} className="text-sm text-gray-500">
            {label}:{" "}
            <span className="font-semibold text-gray-800">{value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default function JobListings() {
  return (
    <div className="w-full bg-white px-6 md:px-16 lg:px-24 py-16">
      <h2 className="font-crimson text-2xl md:text-3xl font-light tracking-[0.15em] text-gray-800 uppercase text-center mb-12">
        Các Vị Trí Tuyển Dụng
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {JOB_POSITIONS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
