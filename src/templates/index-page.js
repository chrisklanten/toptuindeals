import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { FaCheck, FaFacebook, FaGooglePlus, FaGoogle } from "react-icons/fa";

import hero from "../img/toptuindeals_hero.jpg";

import { FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

import ContactForm from "../pages/contact/index";
import Layout from "../components/Layout";
import MarkdownContent from "../components/MarkdownContent";

export const IndexPageTemplate = ({ frontmatter }) => {
  console.log(frontmatter);

  const today = new Date().getDay();

  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: `center center`,
          backgroundSize: `cover`,
          minHeight: `200px`,
        }}
      ></section>
      <section className="w-full bg-toptuindeals-darkgreen py-2">
        <div className="container flex justify-center items-center">
          <p className="uppercase font-bold text-white px-4">
            {frontmatter.usps.usp1}
          </p>
          <p className="uppercase font-bold text-white px-4">
            {frontmatter.usps.usp2}
          </p>
          <p className="uppercase font-bold text-white px-4">
            {frontmatter.usps.usp3}
          </p>
        </div>
      </section>

      <section className="w-full py-10">
        <div className="container block md:flex justify-center items-center">
          <div className="w-full md:w-1/2 lg:3/4 md:mr-8">
            <h1 className="text-black font-bold h2">
              {frontmatter.intro.title}
            </h1>
            <MarkdownContent
              content={frontmatter.intro.text}
              className="pt-2 pb-4"
            />
          </div>
          <div className="w-full md:w-1/2 lg:1/4">
            <div className="shadow-lg px-10 py-8">
              <h3 className="font-bold mb-0 mt-0">Openingstijden deze week</h3>
              <p className="text-gray-500 mb-4">We heten u van harte welkom</p>
              <ul>
                <li className="flex">
                  <p
                    className={`w-32 block ${
                      today === 1 && `text-toptuindeals-darkgreen font-bold`
                    }`}
                  >
                    Maandag
                  </p>
                  <p
                    className={
                      today === 1
                        ? `text-toptuindeals-darkgreen font-bold`
                        : undefined
                    }
                  >
                    {frontmatter.intro.openinghours.monday.monOpen
                      ? `${frontmatter.intro.openinghours.monday.monOpenAt} - ${frontmatter.intro.openinghours.monday.monClosedAt}`
                      : `Gesloten`}
                  </p>
                </li>
                <li className="flex">
                  <p
                    className={`w-32 block ${
                      today === 2 && `text-toptuindeals-darkgreen font-bold`
                    }`}
                  >
                    Dinsdag
                  </p>
                  <p
                    className={
                      today === 2
                        ? `text-toptuindeals-darkgreen font-bold`
                        : undefined
                    }
                  >
                    {frontmatter.intro.openinghours.tuesday.tueOpen
                      ? `${frontmatter.intro.openinghours.tuesday.tueOpenAt} - ${frontmatter.intro.openinghours.tuesday.tueClosedAt}`
                      : `gesloten`}
                  </p>
                </li>
                <li className="flex">
                  <p
                    className={`w-32 block ${
                      today === 3 && `text-toptuindeals-darkgreen font-bold`
                    }`}
                  >
                    Woensdag
                  </p>
                  <p
                    className={
                      today === 3
                        ? `text-toptuindeals-darkgreen font-bold`
                        : undefined
                    }
                  >
                    {frontmatter.intro.openinghours.wednesday.wedOpen
                      ? `${frontmatter.intro.openinghours.wednesday.wedOpenAt} - ${frontmatter.intro.openinghours.wednesday.wedClosedAt}`
                      : `gesloten`}
                  </p>
                </li>
                <li className="flex">
                  <p
                    className={`w-32 block ${
                      today === 4 && `text-toptuindeals-darkgreen font-bold`
                    }`}
                  >
                    Donderdag
                  </p>
                  <p
                    className={
                      today === 4
                        ? `text-toptuindeals-darkgreen font-bold`
                        : undefined
                    }
                  >
                    {frontmatter.intro.openinghours.thursday.thurOpen
                      ? `${frontmatter.intro.openinghours.thursday.thurOpenAt} - ${frontmatter.intro.openinghours.thursday.thurClosedAt}`
                      : `gesloten`}
                  </p>
                </li>
                <li className="flex">
                  <p
                    className={`w-32 block ${
                      today === 5 && `text-toptuindeals-darkgreen font-bold`
                    }`}
                  >
                    Vrijdag
                  </p>
                  <p
                    className={
                      today === 5
                        ? `text-toptuindeals-darkgreen font-bold`
                        : undefined
                    }
                  >
                    {frontmatter.intro.openinghours.friday.friOpen
                      ? `${frontmatter.intro.openinghours.friday.friOpenAt} - ${frontmatter.intro.openinghours.friday.friClosedAt}`
                      : `gesloten`}
                  </p>
                </li>

                <li className="flex">
                  <p
                    className={`w-32 block ${
                      today === 6 && `text-toptuindeals-darkgreen font-bold`
                    }`}
                  >
                    Zaterdag
                  </p>
                  <p
                    className={
                      today === 6
                        ? `text-toptuindeals-darkgreen font-bold`
                        : undefined
                    }
                  >
                    {frontmatter.intro.openinghours.saturday.satOpen
                      ? `${frontmatter.intro.openinghours.saturday.satOpenAt} - ${frontmatter.intro.openinghours.saturday.satClosedAt}`
                      : `gesloten`}
                  </p>
                </li>

                <li className="flex">
                  <p
                    className={`w-32 block ${
                      today === 7 && `text-toptuindeals-darkgreen font-bold`
                    }`}
                  >
                    Zondag
                  </p>
                  <p
                    className={
                      today === 7
                        ? `text-toptuindeals-darkgreen font-bold`
                        : undefined
                    }
                  >
                    {frontmatter.intro.openinghours.sunday.sunOpen
                      ? `${frontmatter.intro.openinghours.sunday.sunOpenAt} - ${frontmatter.intro.openinghours.sunday.sunClosedAt}`
                      : `gesloten`}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-10">
        <div className="container flex">
          <div className="w-full">
            <h2 className="font-bold">Waarom Top Tuin Deals?</h2>
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 p-2 bg-toptuindeals-bggreen rounded-full mr-4 flex justify-center items-center">
                <FaCheck className="text-toptuindeals-darkgreen" />
              </div>
              <div className="w-64">
                <h3 className="mt-0 mb-2 text-base font-bold">
                  {frontmatter.storeUsps.usp1.title}
                </h3>
                <p className="mt-0 text-sm text-gray-600 leading-snug">
                  {frontmatter.storeUsps.usp1.text}
                </p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 p-2 bg-toptuindeals-bggreen rounded-full mr-4 flex justify-center items-center">
                <FaCheck className="text-toptuindeals-darkgreen" />
              </div>
              <div className="w-64">
                <h3 className="mt-0 mb-2 text-base font-bold">
                  {frontmatter.storeUsps.usp2.title}
                </h3>
                <p className="mt-0 text-sm text-gray-600 leading-snug">
                  {frontmatter.storeUsps.usp2.text}
                </p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 p-2 bg-toptuindeals-bggreen rounded-full mr-4 flex justify-center items-center">
                <FaCheck className="text-toptuindeals-darkgreen" />
              </div>
              <div className="w-64">
                <h3 className="mt-0 mb-2 text-base font-bold">
                  {frontmatter.storeUsps.usp3.title}
                </h3>
                <p className="mt-0 text-sm text-gray-600 leading-snug">
                  {frontmatter.storeUsps.usp3.text}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Img
              className="rounded w-full h-full"
              fluid={
                !!frontmatter.storeUsps.uspImage.childImageSharp
                  ? frontmatter.storeUsps.uspImage.childImageSharp.fluid
                  : frontmatter.storeUsps.uspImage
              }
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h3 className="pt-0 mt-0">Laatste nieuws</h3>
          <div className="flex">
            {frontmatter.latestMessages.messages.map((message) => (
              <div className="shadow-lg">
                <Img
                  className="rounded"
                  fluid={
                    !!message.messageImage.childImageSharp
                      ? message.messageImage.childImageSharp.fluid
                      : message.messageImage
                  }
                />
                <p className="py-3 px-5 font-bold">{message.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative w-full" style={{ height: "350px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.017845654398!2d4.562834950941023!3d51.58623631265751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM1JzEwLjQiTiA0wrAzMyc1NC4xIkU!5e0!3m2!1snl!2snl!4v1602688761426!5m2!1snl!2snl"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        <div
          className="rounded-lg shadow-lg bg-white p-8 absolute"
          style={{
            left: "10%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <h3 className="text-black font-bold mt-0 pt-0 mb-2 placeCard h4">
            {frontmatter.location.title}
          </h3>
          <p className="text-gray-500 mb-6">{frontmatter.location.intro}</p>
          <ul>
            <li className="text-black font-bold flex items-center mb-2">
              <FaMapMarkerAlt className="text-toptuindeals-darkgreen mr-3" />
              {frontmatter.location.address}
            </li>
            <li className="text-black font-bold flex items-center mb-2">
              <FaPhoneAlt className="text-toptuindeals-darkgreen mr-3" />

              <a
                target="_blank"
                className="no-underline text-black font-bold flex items-center"
                href="tel:+31627201455"
                rel="noreferrer"
              >
                {frontmatter.location.phone}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="-mt-6 px-8 sm:px-0 relative">
        <div className="container box-border sm:mx-auto">
          <div
            data-sal="slide-up"
            data-sal-delay="50"
            data-sal-easing="ease"
            data-sal-duration="300"
            className="rounded-sm shadow-2xl p-8 sm:p-16 bg-white sm:flex"
          >
            <div className="w-full mr-3">
              <h3>{frontmatter.contact.title}</h3>
              <p className="mb-6">{frontmatter.contact.intro}</p>
              <ul>
                <li className="text-black font-bold flex items-center mb-2">
                  <FaFacebook className="text-evisie-yellow mr-3" />
                  Volg ons op facebook!
                </li>
                <li className="text-black font-bold flex items-center mb-2">
                  <FaGoogle className="text-evisie-yellow mr-3" />

                  <a
                    target="_blank"
                    className="no-underline text-black font-bold flex items-center"
                    href="tel:+31627201455"
                    rel="noreferrer"
                  >
                    Laat een review achter op Google!
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

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
        storeUsps {
          uspImage {
            childImageSharp {
              fluid(maxWidth: 950, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          usp3 {
            text
            title
          }
          usp2 {
            text
            title
          }
          usp1 {
            text
            title
          }
        }
        latestMessages {
          messages {
            message
            messageImage {
              childImageSharp {
                fluid(maxWidth: 950, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        location {
          phone
          address
          intro
          title
        }
        contact {
          title
          intro
        }
      }
    }
  }
`;
