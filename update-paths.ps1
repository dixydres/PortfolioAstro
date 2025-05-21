# Script PowerShell pour mettre à jour les chemins dans les fichiers markdown
$contentPath = "src/content/works"
$files = Get-ChildItem -Path $contentPath -Filter "*.md" -Recurse

foreach ($file in $files) {
    Write-Host "Traitement du fichier : $($file.FullName)"
    
    # Lire le contenu du fichier
    $content = Get-Content -Path $file.FullName -Raw
    
    # Remplacer les chemins d'images dans le format Markdown ![texte](/chemin)
    $content = $content -replace '!\[(.*?)\]\(/(?!PortfolioAstro/)([^)]+)\)', '![$1](/PortfolioAstro/$2)'
    
    # Remplacer les chemins d'images dans les balises img src="/chemin"
    $content = $content -replace 'src="/(?!PortfolioAstro/)([^"]+)"', 'src="/PortfolioAstro/$1"'
    
    # Remplacer les chemins d'images dans les fonctions JavaScript comme openOverlay('/chemin')
    $content = $content -replace 'openOverlay\(''/(?!PortfolioAstro/)([^'']+)''\)', 'openOverlay(''/PortfolioAstro/$1'')'
    
    # Écrire le contenu modifié dans le fichier
    Set-Content -Path $file.FullName -Value $content -NoNewline
    
    Write-Host "Mise à jour terminée pour $($file.Name)"
}

Write-Host "Tous les fichiers ont été mis à jour avec succès."
