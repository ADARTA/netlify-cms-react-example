import React from "react";

const RelationKitchenSinkPostPreview = ({ value, fieldsMetaData }) => {
  const [post, setPost] = React.useState({});

  React.useEffect(() => {
    const posts = fieldsMetaData.getIn(['posts']);
    if (!value || !posts) {
      setPost({})
    } else {
      const postsData = posts.getIn([value]).toJS();
      if (postsData) {
        setPost(postsData);
      }
    }
  }, [fieldsMetaData, value]);

  return post &&
    <div style={{ border: '2px solid #ccc', borderRadius: '8px', padding: '20px' }}>
      <h2>Related Post</h2>
      <h3>{post.title}</h3>
      <img src={post.image} alt={post.title}/>
      <p>{`${post.body ? post.body.substr(0, 100) : 'Loading'}...`}</p>
    </div>
};

export default RelationKitchenSinkPostPreview;
