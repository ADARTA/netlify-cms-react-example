import React from 'react'

const AuthorsPreview = ({ entry }) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    setData(entry.getIn(['data']).toJS())
  }, [entry]);

  return data.authors.map( (author, index) => {
    return (
      <div key={ index }>
        <hr />
        <strong>{ author.name }</strong>
        { author.description }
      </div>
    )
  });
};

export default AuthorsPreview;
