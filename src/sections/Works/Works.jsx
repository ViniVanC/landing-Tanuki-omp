import React, { useState } from "react";

const WorkItem = ({ imageUrl, title, tags }) => {
  return (
    <div className="works__item item">
      <div className="item__img">
        <img src={imageUrl} alt={`${title}-image`} />
      </div>
      <h3 className="item__title">{title}</h3>
      <div className="tags">
        {tags.map((tag) => (
          <div className="tag">{tag}</div>
        ))}
      </div>
    </div>
  );
};

export const Works = () => {
  const [workItemList] = useState([
    {
      imageUrl: "images/code-img.jpg",
      title: "title",
      tags: ["#code"],
    },
    {
      imageUrl: "images/code-img.jpg",
      title: "title",
      tags: ["#code"],
    },
    {
      imageUrl: "images/code-img.jpg",
      title: "title",
      tags: ["#code"],
    },
    {
      imageUrl: "images/code-img.jpg",
      title: "title",
      tags: ["#code"],
    },
    {
      imageUrl: "images/code-img.jpg",
      title: "title",
      tags: ["#code"],
    },
    {
      imageUrl: "images/code-img.jpg",
      title: "title",
      tags: ["#code"],
    },
  ]);

  return (
    <section className="section works" id="works">
      <div className="container">
        <h2 className="title">Works</h2>
        <div className="inner">
          {workItemList ? (
            <div className="works__items">
              {workItemList.map((item) => (
                <WorkItem
                  imageUrl={item.imageUrl}
                  title={item.title}
                  tags={item.tags}
                />
              ))}
            </div>
          ) : (
            <h3 className="subtitle">Nothing</h3>
          )}
        </div>
      </div>
    </section>
  );
};
