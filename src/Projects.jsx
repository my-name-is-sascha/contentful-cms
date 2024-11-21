import { useFetchData } from './fetchData';

const Projects = () => {
  const { isLoading, data } = useFetchData();
  console.log(data);

  if (isLoading) {
    return (
      <section className="projects">
        <h2>loading ...</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {data.map((item) => {
          const { id, title, description, img } = item;
          return (
            <a
              key={id}
              href={description}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
