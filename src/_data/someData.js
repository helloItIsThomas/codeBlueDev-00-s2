const Fetch = require("@11ty/eleventy-fetch");

const { createClient } = require("@sanity/client");

module.exports = async function () {
  let url = "https://api.github.com/repos/11ty/eleventy";

  const client = createClient({
    projectId: "6jpkko0l",
    dataset: "production",
    useCdn: false, // set to `true` for deployment / production
    apiVersion: "2024-12-25",
    // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations
  });

  let json = await Fetch(url, {
    duration: "1d", // save for 1 day
    type: "json", // we’ll parse JSON for you
  });

  async function getHome() {
    const home = await client.fetch(
      '*[_type == "home"]{"video": videoFile.asset->url, "splashVideo": splashVideo.asset->url, "missionVideo": missionVideo.asset->url}'
    );
    return home;
  }

  async function getGrantees() {
    const grantees = await client.fetch(
      '*[_type == "grantee"] | order(_createdAt desc) {title, link, "image": image.asset->url, "description": pt::text(description)}'
    );
    return grantees;
  }

  async function getMediaPartners() {
    const mediaPartners = await client.fetch(
      '*[_type == "mediaPartner"]{partnerName, partnerProject, "works": [...works]{title, typeOfMedia, "description": pt::text(description), image{"url": asset->url}, ctaButton}}'
    );
    return mediaPartners;
  }

  async function getFilms() {
    const films = await client.fetch(
      '*[_type == "film"]{title,"description": pt::text(description), "synopsis": pt::text(synopsis), metadata {..., awards[]{ award -> { name, graphic{"url": asset->url}}}}, ctaButton, trailerLink,"posterImage": posterImage.asset->url, galleryImages[] {"url": asset->url}, isFeatured, credits, slug, "heroImage": heroImage.asset->url}'
    );
    return films;
  }

  async function getStory() {
    const story = await client.fetch(
      '*[_type == "story"][0]{ description, shariBio, imageCredit, "heroImage": heroImage.asset->url, "shariPhoto": shariPhoto.asset->url }'
    );
    return story;
  }

  async function getConservationGrantees() {
    const conservationGrantees = await client.fetch(
      '*[_type == "conservationGrantees"][0]{imageCredit, "heroImage": heroImage.asset->url, description, subDescription}'
    );
    return conservationGrantees;
  }

  async function getImpactMedia() {
    const impactMedia = await client.fetch(
      '*[_type == "impactMedia"][0]{imageCredit, "heroImage": heroImage.asset->url, description, subDescription}'
    );
    return impactMedia;
  }

  function getHeaders() {
    const headers = {
      grantees: {
        title: "Conservation Grantees",
        subDescription:
          "Supporting impactful organizations that champion conservation and restoration of critical planetary ecosystems.",
      },
      impactMedia: {
        title: "Impact Media",
        subDescription:
          "We work with filmmakers and photographers who share critical conservation messages in a way that inspires ocean conservation and climate resilience.",
      },
      story: {
        title: "The Code Blue Story",
        subTitle: "About Us",
      },
      films: {
        subTitle: "Featured Film",
      },
    };
    return headers;
  }

  const grantees = await getGrantees();
  const films = await getFilms();
  const mediaPartners = await getMediaPartners();
  const story = await getStory();
  const headers = getHeaders();
  const conservationGrantees = await getConservationGrantees();
  const impactMedia = await getImpactMedia();
  const home = await getHome();
  return {
    json,
    grantees,
    films,
    mediaPartners,
    story,
    headers,
    conservationGrantees,
    impactMedia,
    home,
  };
};
