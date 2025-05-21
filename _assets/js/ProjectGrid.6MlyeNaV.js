import { d as createAstro, c as createComponent, m as maybeRenderHead, f as renderSlot, e as renderScript, a as renderTemplate, b as addAttribute, r as renderComponent } from './vendor.CcqDjLzD.js';
import 'kleur/colors';
import 'clsx';
import { g as getCollection, $ as $$FormattedDate } from './FormattedDate.BuWy1okq.js';
/* empty css                        */

const $$Astro$1 = createAstro("https://dixydres.github.io");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  const posts = await getCollection("works");
  const allTags = [
    "Tous",
    ...new Set(posts.flatMap((post) => post.data.tags || []))
  ].sort();
  const {
    showHeader = true,
    showButton = true,
    showFilters = false,
    activeTag = "Tous"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="projects-section" id="projects" data-astro-cid-amng4zvp> <div class="projects-container" data-astro-cid-amng4zvp> <!-- Le header avec le titre sera affiché uniquement si showHeader est true (par défaut) --> ${Astro2.props.showHeader !== false && renderTemplate`<div class="projects-header" data-aos="fade-up" data-astro-cid-amng4zvp> <h2 class="projects-title" data-astro-cid-amng4zvp>Mes Projets</h2> <div class="projects-divider" data-astro-cid-amng4zvp></div> <p class="projects-subtitle" data-astro-cid-amng4zvp>
Découvrez une sélection de mes travaux récents
</p> </div>`} ${showFilters && renderTemplate`<div class="filter-container" data-aos="fade-up" data-aos-delay="100" data-astro-cid-amng4zvp> <div class="tag-filter" data-astro-cid-amng4zvp> ${allTags.map((tag) => renderTemplate`<a${addAttribute(
    tag === "Tous" ? `${"/PortfolioAstro"}works` : `${"/PortfolioAstro"}works?tag=${tag}`,
    "href"
  )}${addAttribute(`filter-tag ${tag === activeTag ? "active" : ""}`, "class")}${addAttribute(tag, "data-tag")} data-astro-cid-amng4zvp> ${tag} </a>`)} </div> </div>`} <div class="projects-grid" data-astro-cid-amng4zvp> ${renderSlot($$result, $$slots["default"])} </div> ${Astro2.props.showButton !== false && renderTemplate`<div class="projects-button-container" data-aos="fade-up" data-astro-cid-amng4zvp> <a${addAttribute(`${"/PortfolioAstro"}works`, "href")} class="projects-button" data-astro-cid-amng4zvp> <span data-astro-cid-amng4zvp>Voir tous mes projets</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-amng4zvp> <path d="M5 12h14" data-astro-cid-amng4zvp></path> <path d="M12 5l7 7-7 7" data-astro-cid-amng4zvp></path> </svg> </a> </div>`} </div> <!-- Éléments décoratifs --> <div class="decorative-element circle1" data-astro-cid-amng4zvp></div> <div class="decorative-element circle2" data-astro-cid-amng4zvp></div> <div class="decorative-element square1" data-astro-cid-amng4zvp></div> </section> ${renderScript($$result, "C:/Users/jeanj/OneDrive/Bureau/Perso/PortfolioAstro/src/components/Projects.astro?astro&type=script&index=0&lang.ts")}   ${renderScript($$result, "C:/Users/jeanj/OneDrive/Bureau/Perso/PortfolioAstro/src/components/Projects.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/jeanj/OneDrive/Bureau/Perso/PortfolioAstro/src/components/Projects.astro", void 0);

const $$Astro = createAstro("https://dixydres.github.io");
const $$ProjectGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectGrid;
  const { count, category } = Astro2.props;
  const posts = await getCollection("works");
  let filteredPosts = posts;
  if (category) {
    filteredPosts = posts.filter(
      (post) => post.data.tags && post.data.tags.includes(category)
    );
  }
  filteredPosts = filteredPosts.sort((a, b) => {
    return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  });
  const sortedPosts = count ? filteredPosts.slice(0, count) : filteredPosts;
  return renderTemplate`${maybeRenderHead()}<div class="project-grid" data-astro-cid-2wkm2a2e> ${sortedPosts.map((post, index) => renderTemplate`<article${addAttribute(`project-card ${index % 2 === 0 ? "card1" : "card2"}`, "class")} data-aos="fade-up"${addAttribute(post.data.tags?.join(" "), "data-categories")} data-astro-cid-2wkm2a2e> <div class="project-content" data-astro-cid-2wkm2a2e> <h3 class="project-title" data-astro-cid-2wkm2a2e>${post.data.title}</h3> <p class="project-description" data-astro-cid-2wkm2a2e>${post.data.description}</p> <div class="project-meta" data-astro-cid-2wkm2a2e> <span class="project-date" data-astro-cid-2wkm2a2e> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-2wkm2a2e": true })} </span> ${post.data.tags && renderTemplate`<div class="project-tags" data-astro-cid-2wkm2a2e> ${post.data.tags.map((tag) => renderTemplate`<span class="project-tag" data-astro-cid-2wkm2a2e>${tag}</span>`)} </div>`}${" "} </div>${" "} <a${addAttribute(`${"/PortfolioAstro"}${post.collection}/${post.slug}/`, "href")} class="project-link" data-astro-cid-2wkm2a2e>
Voir le projet
</a>${" "} </div> ${post.data.heroImage && renderTemplate`<div class="project-image" data-astro-cid-2wkm2a2e> <img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} class="project-img" loading="lazy" width="800" height="500" style="cursor: pointer;"${addAttribute(`openOverlay('${post.data.heroImage}')`, "onclick")} data-astro-cid-2wkm2a2e> </div>`} </article>`)} </div> <div id="overlay" class="overlay" onclick="closeOverlay(event)" data-astro-cid-2wkm2a2e> <span class="close" onclick="closeOverlay(event)" data-astro-cid-2wkm2a2e>&times;</span> <img id="overlayImage" src="" alt="" data-astro-cid-2wkm2a2e> </div> ${renderScript($$result, "C:/Users/jeanj/OneDrive/Bureau/Perso/PortfolioAstro/src/components/ProjectGrid.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/jeanj/OneDrive/Bureau/Perso/PortfolioAstro/src/components/ProjectGrid.astro", void 0);

export { $$Projects as $, $$ProjectGrid as a };
