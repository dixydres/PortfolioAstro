---
title: "Leafbay"
description: "Conception et développement d'une plateforme e-commerce inspirée de l'univers Animal Crossing: New Horizons. Ce projet de SAÉ inclut la création graphique 3D, le développement web et la production audiovisuelle."
pubDate: 2024-03-15
heroImage: "/Portfolio/Leafbay.svg"
projectLink: "https://www.mullersae402.mmidev.fr/"
tags: ["E-commerce", "UX/UI Design", "3D Modélisation", "WordPress"]
order: 6
---

<style>
  h1:first-of-type {
    padding-top: 20px; /* Ajouter de l'espace avant le premier titre H1 */
    margin-top: 0;
  }
  
  @media (max-width: 768px) {
    h1:first-of-type {
      padding-top: 30px;
    }
  }
  
  @media (max-width: 480px) {
    h1:first-of-type {
      padding-top: 40px;
    }
  }
</style>

# Leafbay

Leafbay est une plateforme e-commerce inspirée de l'univers d'Animal Crossing: New Horizons que j'ai conçue et développée dans le cadre d'un projet de SAÉ. Ce projet interdisciplinaire combine création graphique 3D, développement web et production audiovisuelle.

---

## Le concept

Inspiré par l'esthétique et les mécaniques du jeu Animal Crossing: New Horizons, Leafbay propose une expérience d'achat immersive dans un univers coloré et ludique. La plateforme permet aux utilisateurs d'acheter des objets, meubles et vêtements inspirés du jeu, créant ainsi un pont entre l'expérience virtuelle et le monde réel.

![Animal Crossing Interface](/Portfolio/assets/images/Leafbay.svg)





## Modélisation 3D & Vidéo promotionnelle

Dans le cadre de ce projet, j'ai créé plusieurs modèles 3D inspirés de l'univers d'Animal Crossing. Ces rendus ont été réalisés pour intégrer l'identité visuelle de la plateforme e-commerce et offrir une expérience immersive aux utilisateurs.

<div class="carousel-container">
  <button class="carousel-button prev">
    <svg viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
  </button>
  <button class="carousel-button next">
    <svg viewBox="0 0 24 24">
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
    </svg>
  </button>
  <div class="image-row">
    <div class="image-container">
      <img src="/Property-1cartboard_rendered.png" alt="Maison style Animal Crossing">
      <div class="image-overlay">
        <div class="overlay-title">Maison style Animal Crossing</div>
        <div class="overlay-description">Modèle 3D d'une maison inspirée du style visuel caractéristique du jeu Animal Crossing</div>
      </div>
    </div>
    <div class="image-container">
      <img src="/Property-1flower_render.png" alt="Jardin luxuriant">
      <div class="image-overlay">
        <div class="overlay-title">Jardin luxuriant</div>
        <div class="overlay-description">Composition florale dans l'univers coloré et stylisé de Leafbay</div>
      </div>
    </div>
    <div class="image-container">
      <img src="/atm.png" alt="DAB ludique">
      <div class="image-overlay">
        <div class="overlay-title">DAB interactif</div>
        <div class="overlay-description">Distributeur automatique de billets adapté à l'univers ludique de la plateforme</div>
      </div>
    </div>
    <div class="image-container">
      <img src="/axe_render_t.png" alt="Hache détaillée">
      <div class="image-overlay">
        <div class="overlay-title">Hache détaillée</div>
        <div class="overlay-description">Modélisation 3D d'un outil emblématique de l'univers du jeu</div>
      </div>
    </div>
    <div class="image-container">
      <img src="/flower2_render.png" alt="Composition florale">
      <div class="image-overlay">
        <div class="overlay-title">Composition florale</div>
        <div class="overlay-description">Élément décoratif intégré dans l'identité visuelle de la plateforme</div>
      </div>
    </div>
  </div>
  <div class="carousel-indicator"></div>
</div>

Dans le cadre de la promotion de la plateforme Leafbay, j'ai réalisé une vidéo entièrement en 3D, de la conception à la post-production. Ce projet m'a permis de démontrer ma maîtrise de l'ensemble de la chaîne de création audiovisuelle : modélisation, animation, sound design, rendu 3D et montage. Cette production s'inscrit dans une démarche professionnelle visant à valoriser l'identité visuelle du site et à offrir une expérience immersive et cohérente à l'utilisateur.



<video controls poster="/miniature.png" style="width:100%; max-width:400px; margin: 2rem auto; display:block; border-radius:12px; background:#eaeaea; object-fit:contain;">
  <source src="/Muller_leafbay.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture vidéo.
</video>



<style>  .carousel-container {
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 2rem auto;
    overflow: hidden;
    padding: 1.5rem;
    background-color: #f1f5f9;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 48, 107, 0.1);
    border: 1px solid #d0ddf0;
    box-sizing: border-box;
  }

  .image-row {
    display: flex;
    width: max-content;
    align-items: center;
    transition: transform 0.5s ease;
    margin: 0 auto;
  }.image-container {
    width: 90vw;
    max-width: 700px;
    height: 400px;
    flex-shrink: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease, transform 0.3s ease;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
  }

  .image-container.active {
    opacity: 1;
    pointer-events: auto;
  }
  .image-container img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.5s ease;
  }
  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: rgba(0, 48, 107, 0.7); /* Bleu semi-transparent */
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
    color: white;
    text-align: center;
    padding: 1.5rem;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  
  .image-container.active:hover .image-overlay {
    opacity: 1;
  }
  
  .image-container.active:hover img {
    transform: scale(1.03);
  }
  
  .overlay-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .overlay-description {
    font-size: 1rem;
    max-width: 100%;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #0056b3;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 2px solid #fff;
  }

  .carousel-button.prev {
    left: 1rem;
  }

  .carousel-button.next {
    right: 1rem;
  }

  .carousel-button:hover {
    transform: translateY(-50%) scale(1.1);
    background: #004494;
  }
  
  .carousel-button svg {
    fill: white;
    width: 24px;
    height: 24px;
  }  .carousel-indicator {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 1.5rem;
  }

  .indicator-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #E0E0E0;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .indicator-dot:hover {
    background-color: #B8CDE5;
  }
  .indicator-dot.active {
    background-color: #0056b3;
    border-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
  
  @media (max-width: 1024px) {
    .image-container {
      height: 320px;
    }
  }
  
  @media (max-width: 768px) {
    .carousel-container {
      max-width: 100%;
      padding: 1rem;
    }
    
    .image-container {
      width: 90vw;
      max-width: 90vw;
      height: 250px;
    }
    
    .image-container img {
      object-fit: cover;
      max-height: 250px;
    }
    
    .overlay-title {
      font-size: 1.2rem;
    }
    
    .overlay-description {
      font-size: 0.9rem;
    }
  }
    @media (max-width: 480px) {
    .image-container {
      height: 180px;
      margin-top: 10px; /* Ajouter un peu d'espace en haut pour éviter la superposition avec la navbar */
    }
    
    .image-container img {
      max-height: 180px;
    }
    
    .carousel-button {
      width: 32px;
      height: 32px;
    }
    
    .carousel-button svg {
      width: 20px;
      height: 20px;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const row = container.querySelector('.image-row');
    const items = Array.from(row.children);
    const prev = container.querySelector('.carousel-button.prev');
    const next = container.querySelector('.carousel-button.next');
    const indicator = container.querySelector('.carousel-indicator');
    let idx = 0;
    
    // Create indicator dots
    items.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('indicator-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        idx = i;
        update();
      });
      indicator.appendChild(dot);
    });
    
  function update() {
      // Update carousel position
      const itemWidth = items[0].offsetWidth;
      row.style.transform = `translateX(-${idx * itemWidth}px)`;
      
      // Update active states for items and dots
      items.forEach((item, i) => {
        item.classList.toggle('active', i === idx);
      });
      
      const dots = indicator.querySelectorAll('.indicator-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
      });
      
      // Update button states
      prev.style.opacity = idx > 0 ? '1' : '0.5';
      next.style.opacity = idx < items.length - 1 ? '1' : '0.5';
      prev.style.pointerEvents = idx > 0 ? 'auto' : 'none';
      next.style.pointerEvents = idx < items.length - 1 ? 'auto' : 'none';
    }
    
    // Button click handlers
    prev.addEventListener('click', () => { 
      if (idx > 0) { 
        idx--; 
        update(); 
      } 
    });
    
    next.addEventListener('click', () => { 
      if (idx < items.length - 1) { 
        idx++; 
        update(); 
      } 
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' && idx > 0) {
        idx--;
        update();
      } else if (e.key === 'ArrowRight' && idx < items.length - 1) {
        idx++;
        update();
      }
    });
    
    // Handle resize
    window.addEventListener('resize', update);
    
    // Set initial state
    items[0].classList.add('active');
    update();
  });
</script>

## Ma contribution

### Conception et direction artistique
- Création d'une identité visuelle fidèle à l'univers Animal Crossing
- Développement d'éléments graphiques 3D pour la mise en valeur des produits
- Conception d'interfaces utilisateur intuitives et ludiques

### Développement technique
- Intégration WordPress personnalisée pour le système e-commerce
- Mise en place d'une architecture responsive et performante
- Développement de fonctionnalités spécifiques inspirées du gameplay d'Animal Crossing

### Production audiovisuelle
- Réalisation de vidéos promotionnelles pour la plateforme
- Création d'animations pour dynamiser l'expérience utilisateur
- Production de contenu visuel pour les réseaux sociaux

---

## Méthodologie et défis

Le projet a été réalisé en suivant une méthodologie agile, permettant d'itérer rapidement sur les différentes composantes de la plateforme. L'un des principaux défis a été de transposer l'atmosphère unique d'Animal Crossing dans une expérience e-commerce fonctionnelle, tout en respectant les contraintes techniques et légales d'un site marchand.


## Résultats

Leafbay a été très bien reçu lors de sa présentation, tant pour son originalité que pour sa fidélité à l'univers d'Animal Crossing. Le projet a démontré ma capacité à mener un projet créatif complet alliant compétences techniques et artistiques, tout en répondant à des objectifs précis.

Ce projet m'a permis d'approfondir mes connaissances en modélisation 3D, en UX/UI design et en développement WordPress, tout en explorant les possibilités créatives offertes par l'adaptation d'un univers vidéoludique à une plateforme e-commerce.

---

### Technologies utilisées

| Catégorie | Technologies |
|-----------|-------------|
| **Design** | Figma, Blender, Adobe XD |
| **Front-end** | HTML5, CSS3, JavaScript |
| **Back-end** | WordPress, PHP |
| **Production** | Adobe After Effects, Premiere Pro |