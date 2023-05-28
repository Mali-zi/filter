function ProjectList({ projects }) {
  const projectsList = projects.map(item => {
    return (
      <img src={item.img} alt="" width="250px" />
    )
  });

  return (
    <div>
      {projectsList}
    </div>
  )
};

export default ProjectList;