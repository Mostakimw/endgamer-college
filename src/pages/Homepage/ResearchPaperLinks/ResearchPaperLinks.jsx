import SectionTitle from "../../../components/SectionTitle";

const ResearchPaperLinks = () => {
  const researchPaperLinks = [
    {
      id: 1,
      title: "Research Paper 1",
      authors: ["John Doe"],
      publication: "Journal of Science",
      publicationDate: "5th August, 2023",
      link: "research-paper-link-1",
    },
    {
      id: 2,
      title: "Research Paper 2",
      authors: ["Jane Smith"],
      publication: "Conference on Technology",
      publicationDate: "10th August, 2023",
      link: "research-paper-link-2",
    },
  ];

  return (
    <div className="mt-20">
      <SectionTitle title="Recommended Research Paper" />
      <div className="mt-10">
        <ul className="list-disc list-inside">
          {researchPaperLinks.map((paper) => (
            <li key={paper.id} className="mb-2">
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {paper.title}
              </a>{" "}
              by {paper.authors.join(", ")} - {paper.publication},{" "}
              {paper.publicationDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResearchPaperLinks;
