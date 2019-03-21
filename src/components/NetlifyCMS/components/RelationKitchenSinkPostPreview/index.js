import React from "react";

const RelationKitchenSinkPostPreview = ({ value, fieldsMetaData }) => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    if (fieldsMetaData) {
      setPost(fieldsMetaData.getIn(['posts', value]).toJS());
    }
  }, [fieldsMetaData, value]);

  return post &&
    <div style={{ border: '2px solid #ccc', borderRadius: '8px', padding: '20px' }}>
      <h2>Related Post</h2>
      <h3>{post.title}</h3>
      <img src={post.image} alt={post.title}/>
      <p>{`${post.body.substr(0, 100)}...`}</p>
    </div>
};

export default RelationKitchenSinkPostPreview;
