function generateMarkdown(data) {
  const keys = Object.keys(data).filter(key => {
    const ignored = ['title', 'description', 'tableOfContents', 'username', 'repository'];
    return !ignored.includes(key) && data[key];
  });

  let tableOfContents = ''
  if(data.tableOfContents) {
    tableOfContents = '\n## Table Of Contents\n\n' + keys.map(key => `* [${key}](#${key})`).join('\n')
  }

  const sections = keys.map(key => `## ${key}\n\nTODO Add ${key} information`).join('\n\n')
  return `
  ![badmath](https://img.shields.io/github/last-commit/${data.username}/${data.repository}) ![badmath](https://img.shields.io/github/issues-pr/${data.username}/${data.repository}) ![badmath](https://img.shields.io/github/languages/top/${data.username}/${data.repository})
# ${data.title}

## Description

${data.description}
${tableOfContents}

${sections}

`;
}

module.exports = generateMarkdown;
