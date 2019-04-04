import React from "react";
import { HomePageArticleCard } from "./HomePageArticleCard";
import "<styles>/HomePageCards.scss";

export const HomePageCards = ({ articles }) => (
  <div>
    <h1 className="homepage-card-header">Recent Articles</h1>
    <div className="homepage-cards-container">
      {articles.map(article => (
        <HomePageArticleCard key={article.id} article={article} />
      ))}
    </div>
  </div>
);
