// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "This section is dedicated to (mostly) description and explanation of projects I have been involved in. This section will not have a focus on coding, but rather explanation of the methodology and the results (What, Why and How). For coding and tutorials, check out the blog posts and my GitHub repositories!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-practical-guide-to-cell-segmentation-domain-identification-and-cell-type-annotation-in-single-cell-spatial-transcriptomics-visium-hd",
        
          title: "Practical Guide to Cell Segmentation, Domain Identification and Cell Type Annotation in Single-Cell...",
        
        description: "A hands-on tutorial covering cell segmentation with SOPA (StarDist + ProSeg), spatial domain identification with Novae (with batch correction on the fly), and cell type annotation using 1) reference-based methods, deconvolution on 8 µm bins with RCTD-py and FlashDeconv, plus CellTypist on segmented cells using a scRNA-seq reference, and 2) reference-free annotation with Enrichmap gene set signatures (with built-in batch correction and spatial smoothing), on a Visium HD colorectal cancer dataset.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/segmentation-and-annotation/";
          
        },
      },{id: "post-cancer-subtyping-using-cnmf-and-literature-markers",
        
          title: "Cancer subtyping using cNMF and literature markers",
        
        description: "An example of usage of cNMF to identify cancer subtypes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/distill/";
          
        },
      },{id: "books-12-rules-for-life",
          title: '12 rules for life',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/12rules/";
            },},{id: "news-accepted-to-phd-program-medical-technology-at-ntnu-trondheim-norway",
          title: 'Accepted to PhD program (Medical Technology) at NTNU, Trondheim, Norway',
          description: "",
          section: "News",},{id: "news-started-this-blog-and-moved-from-a-notion-digital-cv-to-a-github-website",
          title: 'Started this blog and moved from a Notion digital CV to a GitHub...',
          description: "",
          section: "News",},{id: "projects-nzbridge",
          title: 'NZBridge',
          description: "A browser extension and Zotero plugin for bidirectional sync between Zotero and Google NotebookLM. Push your research library into NotebookLM for AI-powered analysis, then pull generated notes back into Zotero.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_nzbridge/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Rafael_Oliveira_CV_2026.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%66%61%65%6C.%73%6C%6F@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rafael-slo/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
