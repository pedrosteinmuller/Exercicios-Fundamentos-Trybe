import React from 'react';

class exercicio extends React.Component {
  render() {
    const skills = [
      'GitGithub',
      'HTML',
      'CSS',
      'JavaScript',
      'ManipulaçãoDOM',
      'FormsFlexboxResponsividade',
      'Jest',
      'HOFs',
    ];
    const jsxSkills = skills.map((skill) => <li>{skill}</li>);

    return (
      <div>
        <h1>Pedro Steinmuller Pimentel</h1>
        <p>
          Moro em Campina Grande - Paraíba, tenho 26 anos , possuo graduação em
          física e mestrado em física, atualmente estudante de programação com
          pretensão de ser dev fullstack
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>{ jsxSkills }</ul>
      </div>
    );
  }
}

export default exercicio;
