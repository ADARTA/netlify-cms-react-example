import React from "react";

const PostPreview = ({ entry, widgetFor }) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    setData(entry.getIn(['data']).toJS())
  }, [entry]);

  return (
    <React.Fragment>
      <div className="cover">
        <h1>{data.title}</h1>
        {widgetFor('image')}
      </div>
      <p><small>{`Written ${data.date}`}</small></p>
      <div className="text">{widgetFor('body')}</div>
    </React.Fragment>
  );
};

export default PostPreview;
