import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({ frontmatter }) => (
  <div>
    <h1>Home</h1>
  </div>
);

IndexPageTemplate.propTypes = {
  frontmatter: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string,
  // heading: PropTypes.string,
  // subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate frontmatter={frontmatter} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        usps {
          usp1
          usp2
          usp3
        }
        intro {
          title
          text
          openinghours {
            monday {
              monOpen
              monOpenAt
              monClosedAt
            }
            tuesday {
              tueOpen
              tueOpenAt
              tueClosedAt
            }
            wednesday {
              wedOpen
              wedOpenAt
              wedClosedAt
            }
            thursday {
              thurOpen
              thurOpenAt
              thurClosedAt
            }
            friday {
              friOpen
              friOpenAt
              friClosedAt
            }
            saturday {
              satOpen
              satOpenAt
              satClosedAt
            }
            sunday {
              sunOpen
              sunOpenAt
              sunClosedAt
            }
          }
        }
      }
    }
  }
`;
