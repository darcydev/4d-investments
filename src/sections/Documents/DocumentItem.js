import React from 'react';
import styled from 'styled-components';
import { Button as AntButton } from 'antd';

export default function DocumentItem({
  title = 'Default Doc Title',
  imageSrc = 'images/azalea/doc-a.jpg',
  lang = 'ENGLISH',
  downloadLink = undefined
}) {
  // TODO... download the document
  const onDocDownloadClick = downloadLink => 10;

  return (
    <div className="col-sm-4 col-lg-4">
      <div className="doc animated" data-animate="fadeInUp" data-delay="0.3">
        <div className="doc-photo doc-shape doc-shape-a">
          <img src={imageSrc} alt="doc" />
        </div>
        <div className="doc-text">
          <h5 className="doc-title title-sm">{title}</h5>
          {downloadLink ? (
            <AntButton
              type="danger"
              shape="square"
              icon="download"
              size="large"
              onClick={onDocDownloadClick(downloadLink)}
            />
          ) : null}
          <div className="doc-lang">{lang}</div>
        </div>
      </div>
    </div>
  );
}
