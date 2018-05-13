import React from "react";
import { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import ContentLoader from "react-content-loader";
import "react-image-lightbox/style.css";
import ContentWrapper from "../components/ContentWrapper";
import SectionTitle from "../components/SectionTitle";
import MasterTitle from "../components/MasterTitle";
import Container from "../components/Container";
import GalleryImage from "../components/GalleryImage";
import { contentful, client } from "../helpers/contentful";

import { cssVariables as css } from "../variables/cssvariables";

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 30px;
`;

const LoadingImage = styled.div``;

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      images: [],
      loading: true
    };
  }

  componentDidMount() {
    client
      .getAssets()
      .then(response =>
        this.setState({ images: response.items, loading: false })
      )
      .catch(console.error);
  }

  render() {
    const { images, photoIndex, isOpen } = this.state;

    return (
      <div>
        <MasterTitle
          title="Gallery"
          subtitle="An assortment of conceptual but mostly professional work"
        />
        <ContentWrapper>
          <Container width={css.scaffold.widthLg}>
            <GalleryWrapper>
              {images.map((image, index) => {
                return this.state.loading ? (
                  <LoadingImage>
                    <ContentLoader
                      height={225}
                      width={300}
                      speed={2}
                      primaryColor="#ddd"
                      secondaryColor="#eee"
                    >
                      <rect
                        x="0"
                        y="0"
                        rx="0"
                        ry="0"
                        width="300"
                        height="225"
                      />
                    </ContentLoader>
                  </LoadingImage>
                ) : (
                  <GalleryImage
                    imageUrl={image.fields.file.url}
                    key={index}
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: index })
                    }
                  />
                );
              })}
            </GalleryWrapper>
          </Container>
        </ContentWrapper>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].fields.file.url}
            nextSrc={images[(photoIndex + 1) % images.length].fields.file.url}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].fields
                .file.url
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}
