// check language
export function extractLangAttribute(parsedHTML) {
    // Find the <html> tag
    const htmlTag = parsedHTML.querySelector("html");
  
    // Check if <html> tag exists and has a lang attribute
    if (htmlTag && htmlTag.hasAttribute("lang")) {
      return htmlTag.getAttribute("lang");
    } else {
      return false; // If lang attribute is not found
    }
  }

  // Google tag manager
export function isGoogleTagManagerIncluded(htmlContent) {
    const htmlString = new XMLSerializer().serializeToString(htmlContent);
    const lowercaseContent = htmlString.toLowerCase();
    return (
      lowercaseContent.includes("googletagmanager") ||
      lowercaseContent.includes("gtm.js") ||
      lowercaseContent.includes("google tag manager") ||
      lowercaseContent.includes("<!-- google tag manager -->")
    );
  }

 // functions to check site is wordpress or not
export function isWordPress(parsedHTML) {
    // Check if the <meta> tag with name="generator" contains "WordPress"
    const metaGenerator = parsedHTML.querySelector('meta[name="generator"]');
    if (
      metaGenerator &&
      metaGenerator.getAttribute("content").toLowerCase().includes("wordpress")
    ) {
      return true;
    }
    // Check if WordPress specific classes exist in body or any element
    const wordpressClasses = ["wp-includes", "wp-content"];
    for (const className of wordpressClasses) {
      if (parsedHTML.querySelector(`.${className}`)) {
        return true;
      }
    }
    // Check if any HTML comments contain "WordPress"
    const searchArray = ["wp-content", "wordpress"];
  
    const htmlString = new XMLSerializer()
      .serializeToString(parsedHTML)
      .toLowerCase();
  
    // Check if any string from the search array is found in the HTML content
    for (const searchString of searchArray) {
      if (htmlString.includes(searchString.toLowerCase())) {
        return true;
      }
    }
    // If none of the above conditions are met, return false
    return false;
  }
  


  // javacript libraries

  export function findUsedLibraries(parsedHTML) {
    const scripts = parsedHTML.querySelectorAll("script");
    const libraries = [];
  
    scripts.forEach((script) => {
      const src = script.getAttribute("src");
      if (src) {
        // Extract the library name from the src attribute
        const libraryName = extractLibraryNameFromSrc(src);
        if (libraryName) {
          libraries.push(libraryName);
        }
      } else {
        // Extract the library name from the script content
        const content = script.textContent;
        const libraryName = extractLibraryNameFromContent(content);
        if (libraryName) {
          libraries.push(libraryName);
        }
      }
    });
  
    // Check for additional libraries
    if (
      parsedHTML.querySelector("[data-lightbox]") ||
      parsedHTML.querySelector(".lightbox")
    ) {
      libraries.push("lightbox");
    }
    if (
      parsedHTML.querySelector("[data-modernizr]") ||
      parsedHTML.querySelector(".modernizr")
    ) {
      libraries.push("modernizr");
    }
  
    return libraries.length > 0 ? libraries : null;
  }
  
  function extractLibraryNameFromSrc(src) {
    // Example: Extract library name from src attribute
    // Modify this function based on your known library URLs
    if (src.includes("jquery")) {
      return "jQuery";
    } else if (src.includes("react")) {
      return "React";
    } else if (src.includes("angular")) {
      return "Angular";
    }
    // Add more library checks as needed
    return null;
  }
  
  function extractLibraryNameFromContent(content) {
    // Example: Extract library name from script content
    // Modify this function based on your known library content patterns
    if (content.includes("Vue")) {
      return "Vue.js";
    } else if (content.includes("underscore")) {
      return "Underscore.js";
    }
    // Add more library checks as needed
    return null;
  }
  
  // find seo plugins
  
  export function findSEOPlugins(parsedHTML) {
    const head = parsedHTML.querySelector("head");
    if (!head) return null;
  
    const comments = head.childNodes;
    const plugins = [];
  
    comments.forEach((comment) => {
      if (comment.nodeType === Node.COMMENT_NODE) {
        const commentText = comment.textContent.toLowerCase();
        if (commentText.includes("yoast seo plugin")) {
          const pluginName = extractPluginNameFromComment(
            commentText,
            "yoast seo plugin"
          );
          if (pluginName) {
            plugins.push(pluginName);
          }
        } else if (commentText.includes("rank math")) {
          const pluginName = extractPluginNameFromComment(
            commentText,
            "rank math"
          );
          if (pluginName) {
            plugins.push(pluginName);
          }
        }
      }
    });
  
    return plugins.length > 0 ? plugins : null;
  }
  
  export function extractPluginNameFromComment(commentText, pluginIdentifier) {
    // Extract the plugin name from the comment text
    // Modify this function based on the known patterns in the comments
    const startIndex = commentText.indexOf(pluginIdentifier);
    if (startIndex !== -1) {
      const endIndex = commentText.indexOf("-", startIndex);
      if (endIndex !== -1) {
        return commentText.substring(startIndex, endIndex).trim();
      }
    }
    return null;
  }
  
  // find programming languages
  export function findUsedLanguages(parsedHTML) {
    const languageMap = new Map();
    // Regular expressions for detecting code patterns
    const languagePatterns = {
      Python: /\b(import|def|print)\b/,
      // "JavaScript": /\b(function|var|let|const|=>|console\.)/,
      PHP: /\b<\?php|echo\b/,
      // Add more language patterns as needed
    };
  
    // Iterate through text content of the entire document
    const textContent = parsedHTML.body.textContent;
  
    // Check each language pattern against the text content
    for (const language in languagePatterns) {
      if (languagePatterns[language].test(textContent)) {
        languageMap.set(language, true);
      }
    }
  
    return languageMap.size > 0 ? languageMap : null;
  }
  // google font APIs
  
  export function isGoogleFontsUsed(parsedHTML) {
    // Get all <link> elements from the parsed HTML content
    const linkElements = parsedHTML.getElementsByTagName("link");
  
    // Check if any <link> element has a href containing "fonts.googleapis.com"
    for (const linkElement of linkElements) {
      if (linkElement.href && linkElement.href.includes("fonts.googleapis.com")) {
        return true;
      }
    }
  
    // If no <link> element with Google Fonts API href is found, return false
    return false;
  }
  
  // find PAAS
  export function findPass(parsedHTML) {
    const paasProviders = {
      heroku: ["heroku"],
      firebase: ["firebase"],
      WPEngine: ["wpengine.com"],
      aws: [
        "aws",
        "amazon-web-services",
        "elasticbeanstalk",
        "lambda",
        "dynamodb",
      ],
      "microsoft azure": ["azure"],
      "google app engine": ["appengine", "googleappengine"],
    };
  
    const foundStrings = [];
    // Convert the parsedHTML to string
    const htmlString = new XMLSerializer()
      .serializeToString(parsedHTML)
      .toLowerCase();
    // console.log(htmlString)
  
    // Iterate through each PaaS provider and check for associated indicators
    for (const indicators of Object.values(paasProviders)) {
      for (const indicator of indicators) {
        if (htmlString.includes(indicator)) {
          foundStrings.push(indicator);
        }
      }
    }
  
    return foundStrings.length > 0 ? foundStrings : null;
  }
  
  // find Font Scripts
  export function findTypekitFontScripts(parsedHTML) {
    const typekitPatterns = {
      Typekit: /https:\/\/use\.typekit\.net/,
    };
  
    // Iterate through each pattern and test against the serialized HTML content
    for (const patternName in typekitPatterns) {
      const pattern = typekitPatterns[patternName];
      const htmlString = new XMLSerializer()
        .serializeToString(parsedHTML)
        .toLowerCase();
  
      // Check if the pattern is found in the HTML content
      if (pattern.test(htmlString)) {
        return patternName; // Return the matched pattern name
      }
    }
  
    return null; // Return null if no pattern is found
  }


  // check if cloudflare exist or not
export function isUsingCloudflare(parsedHTML) {
    // Check if any script tag contains 'static.cloudflareinsights.com' in its src attribute
    const scripts = parsedHTML.querySelectorAll(
      "script[src^='https://static.cloudflareinsights.com']"
    );
    return scripts.length > 0;
  }
  
  // check if google analytics present

export function findUsedAnalytics(parsedHTML) {
    const analyticsMap = new Map();
    // Regular expressions for detecting analytics-related patterns
    const analyticsPatterns = {
      "Google Analytics": /google-analytics\.com\/analytics\.js/,
      // "Google Tag Manager": /googletagmanager\.com\/gtag\/js/,
      "Facebook Pixel": /facebook\.net\/en_US\/fbevents\.js/,
      RudderStack: /cdn\.rudderlabs\.com\/rudderstack\.min\.js/,
      // Add more analytics patterns as needed
    };
  
    // Iterate through each analytics pattern
    for (const tool in analyticsPatterns) {
      // Test if the pattern matches any part of the HTML content
      if (analyticsPatterns[tool].test(parsedHTML.body.innerHTML)) {
        // If matched, add the analytics tool to the map
        analyticsMap.set(tool, true);
      }
    }
    return analyticsMap.size > 0 ? analyticsMap : null;
  }
  