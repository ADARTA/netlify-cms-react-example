import React from "react";

const GeneralPreview = ({ entry, widgetsFor, getAsset }) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    setData(entry.getIn(['data']).toJS());
  }, [entry]);

  return (
    <div>
      <h1>{data.title}</h1>
      <dl>
        <dt>Posts on Frontpage</dt>
        <dd>{widgetsFor('posts').getIn(['widgets', 'front_limit']) || 0}</dd>
        <dt>Default Author</dt>
        <dd>{(data.posts && data.posts.author) || 'None'}</dd>
        <dt>Default Thumbnail</dt>
        <dd>{data.posts && data.posts.thumb && <img src={data.posts.thumb} alt="Author Pic" />}</dd>
      </dl>
    </div>
  );
};

export default GeneralPreview;
