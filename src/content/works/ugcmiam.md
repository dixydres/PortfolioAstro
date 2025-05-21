---
title: "UGC Miam"
description: "Création d'une identité visuelle et de packagings pour une marque fictive de snacks inspirés de différents genres cinématographiques : science-fiction, western, romance."
pubDate: 2023-10-12
heroImage: "/PortfolioAstro/UGC_Minia.svg"
tags: ["Identité visuelle", "Packaging", "Design graphique"]
order: 2
---

# UGC Miam 🍫🎬

**UGC Miam** est un projet de création visuelle pour une marque fictive de snacks destinés à accompagner des séances de cinéma. Chaque produit reprend les codes graphiques d’un genre cinématographique différent : **science-fiction**, **romance**, **western**.

J’ai conçu l’identité visuelle de la marque et l’ensemble des packagings de A à Z, sans utiliser InDesign. Tout a été pensé dans un esprit de cohérence de marque et de storytelling graphique.

---

## Objectifs du projet

- Créer une marque visuelle forte et identifiable
- Décliner graphiquement cette marque selon des univers narratifs distincts
- Réaliser des visuels de packaging attractifs et adaptés au public cible

---

## Thèmes explorés

### 🚀 Spacechoco – Science-fiction

<div class="image-container">
  <img src="/spacechoco.png" alt="Packaging Spacechoco" style="width: 60%; max-width: 400px; margin: 2rem auto; display: block; cursor: pointer;" onclick="openOverlay('/spacechoco.png')" />
</div>

Avec Spacechoco, j’ai créé une tablette de chocolat plongée dans un univers galactique :

- Couleurs froides et ambiance spatiale
- Planète stylisée comme élément central
- Texture et fenêtre transparente sur l’emballage

Le verso a été épuré pour rendre les informations nutritionnelles facilement lisibles.

---

### 💘 Chocolove – Romance

<div class="image-container">
  <img src="/chocolove.png" alt="Packaging Chocolove" style="width: 60%; max-width: 400px; margin: 2rem auto; display: block; cursor: pointer;" onclick="openOverlay('/chocolove.png')" />
</div>

**Chocolove** est la version romantique du produit, pensée pour évoquer la douceur et la tendresse :

- Palette de couleurs chaudes et pastels
- Typographie douce et arrondie
- Mise en page épurée et élégante

Ce packaging vise à transmettre une émotion douce, à la croisée entre gourmandise et sentiment amoureux.

---

### 🤠 Westcola – Western

<div class="image-container">
  <img src="/westcola.png" alt="Packaging Westcola" style="width: 60%; max-width: 400px; margin: 2rem auto; display: block; cursor: pointer;" onclick="openOverlay('/westcola.png')" />
</div>

Avec **Westcola**, j’ai exploré un tout autre registre graphique :

- Couleurs brunes et cuivre inspirées du cuir et du bois
- Étoile de shérif en élément central
- Motifs floraux vintage rappelant les décors de saloon

Le résultat donne un produit rustique mais travaillé, en lien direct avec l’univers du western.

---

## Résultats

Ce projet m’a permis d’expérimenter les notions de **cohérence de marque**, **déclinaison thématique** et **conception packaging**. Chaque univers cinématographique a été adapté à un format produit tout en conservant une base graphique identifiable : **UGC Miam** reste le lien entre tous ces mondes.

---

## Logiciels utilisés

| Domaine | Outils |
|--------|--------|
| **Création graphique** | Illustrator, Photoshop |
| **Maquettage produit** | Photoshop |

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .overlay img {
    max-width: 90%;
    max-height: 90%;
  }

  .overlay .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
</style>

<div id="overlay" class="overlay" onclick="closeOverlay(event)">
  <span class="close" onclick="closeOverlay(event)">&times;</span>
  <img id="overlayImage" src="" alt="" />
</div>

<script>  function openOverlay(imageSrc) {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = imageSrc;
    overlay.style.display = 'flex';
  }

  function closeOverlay(event) {
    if (event.target.id === 'overlay' || event.target.classList.contains('close')) {
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'none';
    }
  }
</script>
