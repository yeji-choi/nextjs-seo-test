const setMetaTags = ({ title = "기본 타이틀", description = "기본 설명", imageUrl = "https://source.unsplash.com/random/200x125" }) => {
  if (typeof window === "undefined") {
    return null;
  } else {
    //set title

    const ogTitle = document.querySelector('meta[property="og:title"]');
    ogTitle.getAttribute("content");
    ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    ogDesc.getAttribute("content");
    ogDesc.setAttribute("content", description);

    const ogImage = document.querySelector('meta[property="og:image"]');
    ogImage.getAttribute("content");
    ogImage.setAttribute("content", imageUrl);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    ogUrl.getAttribute("content");
    ogUrl.setAttribute("content", window.location.href);
    // document.addEventListener('meta[property="og:title"]').setAttribute("content", `${title}`); //set description
    // document.querySelector('meta[property="og:description"]').setAttribute("content", description); //set images
    // document.querySelector('meta[property="og:image"]').setAttribute("content", imageUrl); //set url
    // document.querySelector('meta[property="og:url"]').setAttribute("content", window.location.href);
  }
};

export default setMetaTags;

// const setMetaTags = ({ title = "기본 타이틀", description = "기본 설명", imageUrl = "https://source.unsplash.com/random/200x125" }) => {
//   if (typeof window === "undefined") {
//     return null;
//   } else {
//     //set title

//     console.log("document.querySelector('meta[property=og:title]') ::", document.querySelector("meta"));
//     document.addEventListener('meta[property="og:title"]').setAttribute("content", `${title}`); //set description

//     // if (document.addEventListener('meta[property="og:title"]'))
//     //   document.addEventListener('meta[property="og:title"]').setAttribute("content", `${title}`); //set description
//     if (document.querySelector('meta[property="og:description"]'))
//       document.querySelector('meta[property="og:description"]').setAttribute("content", description); //set images
//     if (document.querySelector('meta[property="og:image"]'))
//       document.querySelector('meta[property="og:image"]').setAttribute("content", imageUrl); //set url
//     if (document.querySelector('meta[property="og:url"]'))
//       document.querySelector('meta[property="og:url"]').setAttribute("content", window.location.href);
//   }
// };

// export default setMetaTags;
