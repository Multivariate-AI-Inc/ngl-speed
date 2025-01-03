import Link from "next/link";
import React, { useState } from "react";
import Loader from "../../elements/Loader";
import { formatURL, isValidUrl } from "../../utils";
import { toast } from "react-toastify";
import {
  extractLangAttribute,
  isGoogleFontsUsed,
  isUsingCloudflare,
  isWordPress,
  findTypekitFontScripts,
  findUsedAnalytics,
  findUsedLibraries,
  isGoogleTagManagerIncluded,
  findSEOPlugins,
  findPass,
  findUsedLanguages,
} from "./helper";
import RenderData from "./RenderData";

const initialStateTechStack = {
  Analytics: null,
  TagManagers: null,
  Widgets: null,
  CDN: null,
  PAAS: null,
  SEO: null,
  Databases: null,
  FontScript: null,
  ProgrammingLanguages: null,
  JavaScriptLibraries: null,
  WordpressPlugins: null,
  CMS: null,
  Blogs: null,
};

const initialStateAbout = {
  Title: null,
  Description: null,
  Tags: null,
  Language: null,
  Country: null,
};

const TechChecker = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isValidURL, setIsValidURL] = useState(false);
  const [oldUrl, setOldUrl] = useState("");
  const [techStack, setTechStack] = useState(initialStateTechStack);
  const [aboutData, setAboutData] = useState(initialStateAbout);

  const handleSubmit = async () => {
    setError(false);
    setLoading(true);
    let url = await formatURL(inputUrl);
    if (oldUrl === url) {
      toast.error(`Please enter new URL`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(false);
      setLoading(false);
      return;
    }
    setTechStack(initialStateTechStack);
    setAboutData(initialStateAbout);
    if (!isValidUrl(url)) {
      setIsValidURL(true);
      setLoading(false);
      return;
    }
    setInputUrl(url);
    setOldUrl(url);
    try {
<<<<<<< HEAD
      const response = await fetch(
        "https://js-apis.maakeetoo.com/page-seo/get-page?url=" + url
      );
=======
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
      }
      const response = await fetch("/api/get-page", requestOptions)
>>>>>>> 4e83810e85beab3f4b01c5a1a78ae5959391dd52
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const htmlContent = data.body;
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");
      const { techstack: extractedTechstack, about: extractedAbout } =
        extractInfo(doc);
      setTechStack(extractedTechstack);
      setAboutData(extractedAbout);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  function extractInfo(parsedHTML) {
    const techstack = {
      Analytics: null,
      TagManagers: null,
      Widgets: null,
      CDN: null,
      PAAS: null,
      SEO: null,
      Databases: null,
      FontScript: null,
      ProgrammingLanguages: null,
      JavaScriptLibraries: null,
      WordpressPlugins: null,
      CMS: null,
      Blogs: null,
    };

    const about = {
      Title: null,
      Description: null,
      Tags: null,
      Language: null,
      Country: null,
    };
    // Extract information from parsedHTML and populate techstack and about arrays

    // Example: extracting title
    const titleElement = parsedHTML.querySelector("title");
    if (titleElement) {
      about.Title = titleElement.textContent.trim();
    }
    // Example: extracting description
    const metaDescription = parsedHTML.querySelector(
      'meta[name="Description"],meta[name="description"],meta[property="og:description"]'
    );
    if (metaDescription) {
      about.Description = metaDescription.getAttribute("content").trim();
    }
    // Example: extracting tags
    const metaKeywords = parsedHTML.querySelector(
      'meta[name="keywords"],meta[name="Keywords"],meta[name="keyword"],meta[name="Keyword"]'
    );
    if (metaKeywords) {
      about.Tags = metaKeywords
        .getAttribute("content")
        .split(",")
        .map((tag) => tag.trim());
    }

    // Extracting country
    const metaRegion = parsedHTML.querySelector('meta[name="geo.region"]');
    about.Country = metaRegion ? metaRegion.getAttribute("content") : null;

    // Extracting language
    const metaLanguage = extractLangAttribute(parsedHTML);
    // console.log("lang", metaLanguage)
    about.Language = metaLanguage ? metaLanguage : null;

    // Example: extracting tech stack information

    // Check if Google Tag Manager is included
    const isGTMIncluded = isGoogleTagManagerIncluded(parsedHTML);
    techstack.TagManagers = isGTMIncluded ? "Google Tag Manager" : null;

    // Check if site is wordpress or not
    const isWordpress = isWordPress(parsedHTML);

    techstack.CMS = isWordpress ? "Wordpress" : null;
    techstack.Blogs = isWordpress ? "Wordpress" : null;
    techstack.Databases = isWordpress ? "MySQL" : null;
    if (techstack.ProgrammingLanguages === null) {
      // console.log(isWordpress, "isword");
      techstack.ProgrammingLanguages = isWordpress ? "PHP" : null;
    }

    // Checking cloudflare
    const isCloudFlare = isUsingCloudflare(parsedHTML);
    // console.log("cloud flare",isCloudFlare)
    techstack.CDN = isCloudFlare ? "Cloud Flare" : null;
    techstack.Analytics = isCloudFlare ? "Cloudflare Browser Insights" : null;
    // console.log(techstack.Analytics, "analyticsssss")

    // Checking Google analytics
    const isGoogleAnalytics = findUsedAnalytics(parsedHTML);
    if (techstack.Analytics === null) {
      techstack.Analytics = isGoogleAnalytics
        ? isGoogleAnalytics.join(", ")
        : null;
    }

    // Find used libraries
    const lib = findUsedLibraries(parsedHTML);
    if (lib != null) {
      const libraries = lib.filter(
        (value, index, self) => self.indexOf(value) === index
      );
      techstack.JavaScriptLibraries = libraries ? libraries.join(", ") : null;
    }

    // Find SEO plugins
    const seoPlugins = findSEOPlugins(parsedHTML);
    techstack.SEO = seoPlugins ? seoPlugins.join(", ").toUpperCase() : null;

    // Find PAAS
    const foundStrings = findPass(parsedHTML);
    techstack.PAAS = foundStrings ? foundStrings.join(", ") : null;
    // console.log('Found strings:', foundStrings);

    // find Used Languages
    const languages = findUsedLanguages(parsedHTML);
    // console.log(languages);
    if (languages !== null) {
      const languageNames = Array.from(languages.keys()).join(", ");
      techstack.ProgrammingLanguages = languageNames;
    }

    // is google font APIs used
    const googleFontsUsed = isGoogleFontsUsed(parsedHTML);
    techstack.Widgets = googleFontsUsed ? "Google Font API" : null;

    // find font script
    const typekitFontScripts = findTypekitFontScripts(parsedHTML);
    techstack.FontScript = typekitFontScripts ? typekitFontScripts : null;
    // console.log("font script", typekitFontScripts);

    return { techstack, about };
  }

  return (
    <section className="section" style={{ backgroundColor: "#E0F1F4" }}>
      <div className="container text-center">
        <div className="row mt-50 mb-5">
          <p className="tools_tag">Free SEO Tool</p>
          <h1 className="font-4xl-bold color-brand-1 mb-25 mt-10">
            Website Technology Checker
          </h1>
          <p className="font-md color-grey-500 mb-25">
            Unlock insights into any website&apos;s technology stack with our
            Website Technology Checker Tool! Analyze CMS, web servers,
            JavaScript libraries, and more with just a click.
          </p>
          <div className="aso-input-form mb-25 main-box-holder">
            <div className="search-box-suggestion">
              <div className="main-search-bar">
                <input
                  type="text"
                  autoComplete="off"
                  className="search-input"
                  placeholder="Website URL"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="audit-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        {/* ************************** */}

        {isValidURL && (
          <div className="error-message w-form-fail mb-20">
            <div>Oops! Please enter correct URL</div>
          </div>
        )}
        {error && (
          <div className="error-message w-form-fail mb-20">
            <div>Oops! Something Went Wrong. Please try again !!</div>
          </div>
        )}
        {loading && (
          <div className="mb-40 mt-20">
            {" "}
            <Loader />{" "}
          </div>
        )}

        {/* ************************** */}
<<<<<<< HEAD
        {aboutData.Title !== null && (
          <RenderData techstackData={techStack} aboutData={aboutData} />
        )}
=======
        {
          (aboutData.Title !== null) &&
          <RenderData
            techstackData={techStack}
            aboutData={aboutData}
          />
        }
>>>>>>> 4e83810e85beab3f4b01c5a1a78ae5959391dd52

        {/* ************************** */}
        <div className="mb-50 mt-30">
          <h5>
            Powered by-
            <Link
              href="https://nextgrowthlabs.com/contact/?utm_source=web-page-crawler"
              target="_blank"
              rel="noopener noreferrer"
              className="utm-link"
            >
              NextGrowth Lab
            </Link>
          </h5>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default TechChecker;
