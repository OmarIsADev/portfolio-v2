import CertificateCard from "../components/certificate-card";
import HackerRankReact from "../assets/certificates/HackerRank-React(Basic).png";
import HackerRankFrontend from "../assets/certificates/HackerRank-Frontend(React).png";
import ProdigyCert from "../assets/certificates/Prodigy-InfoTech-Intern.png";

const certificates = [
  {
    name: "React (Basic)",
    issuer: "Hacker Rank",
    date: "2025",
    img: HackerRankReact,
    url: "https://www.hackerrank.com/certificates/5cbaa8551d1f",
  },
  {
    name: "Frontend (React)",
    issuer: "Hacker Rank",
    date: "2025",
    img: HackerRankFrontend,
    url: "https://www.hackerrank.com/certificates/a2326afd9cdc",
  },
  {
    name: "Frontend Internship",
    issuer: "Prodigy InfoTech",
    date: "2025",
    img: ProdigyCert,
    url: "https://prodigyinfotech.dev/verify?cin=PIT/NOV25/10493",
  },
];

export default function Certificates() {
  return (
    <div
      id="certificates"
      className="flex w-full flex-col items-center gap-16 px-6 sm:px-16"
    >
      <div className="flex flex-col items-center gap-4">
        <h2>Certificates</h2>
        <h3>My achievements and qualifications</h3>
      </div>

      <div className="grid w-full max-w-[1312px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} index={index} certificate={cert} />
        ))}
      </div>
    </div>
  );
}
