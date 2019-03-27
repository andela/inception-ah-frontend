import React, { Component, Fragment } from "react";
import NavBar from "<components>/NavBar";
import ArticleFooter from "<components>/ArticleFooter";
import CategoryLinks from "<components>/CategoryLinks";
import ArticlePhoto from "<components>/ArticlePhoto";
import ViewArticleHeader from "<components>/ViewArticleHeader";
import CommentHeader from "<components>/CommentHeader";
import NewComment from "<components>/NewComment";
import "<styles>/ViewArticlesPage.scss";

class ViewArticlePage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="article-main">
          <div className="category-container">
            <CategoryLinks categories={["Technology", "Science", "Health"]} />
          </div>
          <div className="article-container">
            <div className="column-1">
              <div className="content">
                <div className="section">
                  <ArticlePhoto photoURL={""} />
                  <ViewArticleHeader title="Andela simulation project" />
                  <div className="article-content">
                    <div>
                      Not surprising, the jobs landscape will change as well
                      with roles based on and enhanced by the use of technology,
                      such as AI and ML Specialists, Big Data Specialists,
                      Process Automation Experts, Robotics Engineers, Blockchain
                      Specialists or already established roles such as Data
                      Analysts and Scientists, and Software and Applications
                      Developers. Besides, to counter the growth of robotics,
                      the market will need more distinct ‘human’ skills,
                      expanding the need for Sales and Marketing Professionals,
                      Training and Development, People and Culture, and
                      Organizational Development Specialists and Innovation
                      Managers.
                    </div>
                    <div>
                      It is evident, that companies will have to manage the
                      skill gaps resulting from the adoption of new technologies
                      by sifting to almost complete automation, hiring new staff
                      or retraining existing personnel (or hoping that they will
                      eventually pick up the necessary skills themselves). It is
                      believed that the likelihood of hiring new staff with
                      relevant skills is nearly twice the likelihood of
                      strategic redundancies of staff lagging behind in new
                      skills adoption, so maintaining the knowledge at the
                      acceptable level or even thinking ahead of new demands
                      becomes a vital skill.
                    </div>
                    <div>
                      What is evident now is that the days of a lifetime job,
                      and of a single curriculum and training that fits for that
                      job, are gone for good. Both children and adults will have
                      to study for their whole life being always ready to
                      embrace new trends and develop new skills. In this
                      lifestyle, it is important to be equipped with
                      foundational skills that will stand you in good stead
                      regardless of a specific job.
                    </div>
                    <div>
                      <h3>Flexibility</h3>
                      Probably, in these settings, the flexibility and the
                      readiness for change become the critical skills to be
                      developed from the early age. We can’t know for sure what
                      skills will be required for the future, but what we can be
                      ready for them. When technologies change fast, we can
                      spare our children’s time in learning current trends, but
                      give them a broader and a more stable perspective on the
                      evolution of the world around them.
                    </div>
                    <div>
                      <h3>The four C’s</h3>
                      In his book, 21 Lessons for the 21st Century, Yuval Noah
                      Harari argues that the general-purpose skills should
                      dominate schooling and children should be taught critical
                      thinking, communication, collaboration and creativity
                      rather than technical skills and rigid disciplines. Only
                      in this way they will be able to learn new things and
                      preserve their mental health in unfamiliar situations as
                      well as to fit the emerging demand for “human” skills in
                      industry. In our article, How to Build Data Culture and
                      Make Data Your Friend, we state that critical thinking is
                      the basis for building data-driving teams — now and in
                      future.
                    </div>
                  </div>
                  <CommentHeader author="Philip Lawson" commentCount={8} />
                  <NewComment />
                </div>
              </div>
            </div>
            <div
              className="column-2"
              style={{ backgroundColor: "yellow", height: "600px" }}
            />
          </div>
        </div>
        <ArticleFooter />
      </Fragment>
    );
  }
}
export default ViewArticlePage;
