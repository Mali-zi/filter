import { useState } from 'react';

import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import { data } from './data';

function Portfolio() {
  
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const [activeFilter, setActiveFilter] = useState("All");

  function onSelectFilter(filter) {
    setActiveFilter(filter);
  };

  let projects = data;
  if (activeFilter !== "All") {
    projects = data.filter(item => item.category === activeFilter);
  };

  return (
    <div className='container'>
      <div className='toolbar'>
        <Toolbar
          filters={filters}
          selected={activeFilter}
          onSelectFilter={onSelectFilter}
        />
      </div>
      <div>
        <ProjectList projects={projects} />
      </div>
    </div>
  )
}

export default Portfolio;