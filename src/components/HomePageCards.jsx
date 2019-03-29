import React from "react";
import { HomePageArticleCard } from "./HomePageArticleCard";
import "<styles>/HomePageCards.scss";

export const HomePageCards = () => (
  <div>
    <h1 className="homepage-card-header">Recent Articles</h1>
    <div className="homepage-cards-container">
      <HomePageArticleCard />
      <HomePageArticleCard />
      <HomePageArticleCard />
      <HomePageArticleCard />
    </div>
  </div>
);
