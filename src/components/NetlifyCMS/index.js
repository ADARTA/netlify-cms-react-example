import React from 'react';
import FileSystemBackend from 'netlify-cms-backend-fs';
import { NetlifyCmsApp as CMS } from 'netlify-cms-app/dist/esm';
import previewStyles from './components/previewStyles';
import PostPreview from './components/PostPreview';
import AuthorsPreview from './components/AuthorsPreview';
import GeneralPreview from './components/GeneralPreview';
import EditorYoutube from './components/EditorYoutube';
import RelationKitchenSinkPostPreview from './components/RelationKitchenSinkPostPreview';

import config from './config.json';

const NetlifyCMS = () => {
  React.useEffect(() => {
    console.log(`CMS [${process.env.NODE_ENV}]`, CMS, )
    if (process.env.NODE_ENV === 'development') {
      config.load_config_file = false
      config.backend = {
        "name": "file-system",
        "api_root": "http://localhost:3000/api"
      }
      CMS.registerBackend('file-system', FileSystemBackend);
    }
    CMS.registerPreviewTemplate("posts", PostPreview);
    CMS.registerPreviewStyle(previewStyles, { raw: true });
    CMS.registerPreviewTemplate("authors", AuthorsPreview);
    CMS.registerPreviewTemplate("general", GeneralPreview);
    CMS.registerEditorComponent(EditorYoutube);
    CMS.registerWidget("relationKitchenSinkPost", "relation", RelationKitchenSinkPostPreview);

    CMS.init({config})
  })

  return <div id="nc-root" />
};

export default NetlifyCMS;
